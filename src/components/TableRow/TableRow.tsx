// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { StyledTableRow, AddressContainer } from '../../Borrow/tableStyles'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_CHAT } from '../../../queries/CreateChat'
import { useWeb3React } from '@web3-react/core'
import { DisabledLink, GrayLink, OrangeLink, WhiteLink } from '../styles'
import { shortName } from './helpers'
import Modal from 'components/Modal'
import ConnectWalletWarning from '../Modals/ConnectWalletWarning'
import { useTranslation } from 'react-i18next'
import { GET_TRADE_NFT_ID } from '../../../queries/GetListTrades'
import { TYPE } from '../../../theme'
import { checkIsTradeCreationAllowed } from '../utils'
import { DELETE_ADVERT } from '../../../queries/DeleteAdvert'

interface TableRowProps {
  item: {
    trader: string
    sellingAsset: string
    exchangeAsset: string
    rate: string
    limits: string
  }
}

interface Props extends TableRowProps {
  item
  removeAdvert?: () => void
  cardProps: any
  changeRate: any
  setChangeRate: () => void
}

const TableRow: React.FC<Props> = ({ item, removeAdvert, changeRate, setChangeRate}) => {
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const history = useHistory()
  const [isNftTradeCreationAllowed, setIsNftTradeCreationAllowed] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const userId = localStorage.getItem('id')
  const { id, sellAsset, nftTokenId, buyAsset, minAmount, maxAmount, price, idPerson, person } = item
  const [deleteAdvert, { error }] = useMutation(DELETE_ADVERT, { errorPolicy: 'all' })
  const { data: nftTradeInfo, loading: nftTradeInfoLoading } = useQuery(GET_TRADE_NFT_ID, {variables: {nftTokenId: nftTokenId ?? 0}})
  const [createChat] = useMutation(CREATE_CHAT, {
    variables: { idAdvert: id, idParticipant: userId },
    update(cache, { data }) {
      history.push(`/dapps/p2p/my-chats/chat/${data.createChat.id}`)
    }
  })
  const existingNftId = !nftTradeInfoLoading && nftTradeInfo?.getTradeNFT?.nftTokenId
  const nftTradeStatus = !nftTradeInfoLoading && nftTradeInfo?.getTradeNFT?.statusTrade

  const addChat = () => {
    createChat({
      variables: {
        idAdvert: id,
        idParticipant: +userId
      }
    })
  }

  const modalHandler = () => {
    setModalOpen(!modalOpen)
  }

  const token = localStorage.getItem('token') !== 'null'
  useEffect(() => {}, [token])

  useEffect(() => {
    nftTradeStatus && checkIsTradeCreationAllowed(nftTradeStatus, setIsNftTradeCreationAllowed)
  }, [nftTradeStatus]);

  useEffect(() => {
    if (existingNftId && nftTradeStatus === 'Succeeded') {
      deleteAdvert({
        variables: {
          id: item.id,
          isArchived: true
        }
      })
    }
  }, [existingNftId, nftTradeStatus]);

  return (
    <>
      <tbody>
      <Modal isOpen={modalOpen} onDismiss={modalHandler} maxWidth={356}>
        <ConnectWalletWarning text={t('modalWarning.subHeader.variants.p2p')}></ConnectWalletWarning>
      </Modal>
      {/*рендерит TableRow для Board и MyAdverts*/}
      <StyledTableRow>
        <td data-label={'№'}>
          <TYPE.white fontSize="14px">
            {id}
          </TYPE.white>
        </td>
        <td data-label={t('p2p.tableHead.trader')}>
          <TYPE.white fontSize="14px">
            <Route
              className={'at-click at-btn-all-listing'}
              path="/dapps/p2p"
              render={() => (
                <>
                  {person?.name ? (
                    person?.name
                  ) : (
                    <AddressContainer>{shortName(person?.publicAddress)}</AddressContainer>
                  )}
                </>
              )}
              exact
            />
            <Route
              className={'at-click at-btn-my-listing'}
              path="/dapps/p2p/my-adverts"
              render={() => (
                <>
                  {person?.name ? (
                    person?.name
                  ) : (
                    <AddressContainer>{shortName(person?.publicAddress)}</AddressContainer>
                  )}
                </>
              )}
              exact
            />
            <Route
              className={'at-click at-btn-archived'}
              path="/dapps/p2p/my-adverts/archived"
              render={() => (
                <>
                  {person?.name ? (
                    person?.name
                  ) : (
                    <AddressContainer>{shortName(person?.publicAddress)}</AddressContainer>
                  )}
                </>
              )}
              exact
            />
          </TYPE.white>

        </td>
        <td data-label={t('p2p.tableHead.assetToSwap')}>
          <TYPE.white fontSize="14px">
            {nftTokenId ? `NFT-${nftTokenId}` : sellAsset?.name}
          </TYPE.white>
        </td>
        <td data-label={t('p2p.tableHead.assetToReceive')}>
          <TYPE.white fontSize="14px">
            {buyAsset?.name}
          </TYPE.white>
        </td>
        <td data-label={t('p2p.tableHead.rate')}>
          <TYPE.white fontSize="14px">
            {changeRate
              ? `${+(1 / price).toFixed(3) < 0.0001
                ? '< 0.0001'
                : +(1 / price).toFixed(3)} ${buyAsset?.name}/${nftTokenId ? `NFT-${nftTokenId}` : sellAsset?.name}`
              : `${+price.toFixed(3) < 0.0001
                ? '< 0.0001'
                : +price.toFixed(3)} ${nftTokenId ? `NFT-${nftTokenId}` : sellAsset?.name}/${buyAsset?.name}`
            }
          </TYPE.white>
        </td>
        <td data-label={t('p2p.tableHead.limits')}>
          <TYPE.white fontSize="14px">
            {+minAmount} - {+maxAmount} {nftTokenId ? `NFT-${nftTokenId}` : sellAsset?.name}
          </TYPE.white>
        </td>
        <td data-label={t('p2p.tableHead.actions')}>
            <Route
              className={'at-click at-btn-all-listing'}
              path="/dapps/p2p/"
              render={() => (
                <>
                  {(() => {
                    if (localStorage.getItem('token') == 'null') {
                      return (
                        <DisabledLink className={'at-click at-link-chat'} onClick={modalHandler}
                                      style={{ marginRight: 16 }}>
                          {t('p2p.board.buttons.chat')}
                        </DisabledLink>
                      )
                    }
                    if (+idPerson === +userId) {
                      return (
                        <DisabledLink to={'#'} style={{ marginRight: 16 }}>
                          {t('p2p.board.buttons.chat')}
                        </DisabledLink>
                      )
                    } else {
                      return (
                        <GrayLink to={'#'} className={'at-click at-link-chat'} style={{ marginRight: 16 }}
                                  onClick={addChat}>
                          {t('p2p.board.buttons.chat')}
                        </GrayLink>
                      )
                    }
                  })()}

                  {(() => {
                    if (localStorage.getItem('token') == 'null')
                      return (
                        <DisabledLink to={'#'} className={'at-click at-link-acquire'} onClick={modalHandler}
                                      style={{ marginRight: 16 }}>
                          {t('p2p.board.buttons.acquire')}
                        </DisabledLink>
                      )
                    if (+idPerson === +userId) {
                      return <DisabledLink to={'#'}>{t('p2p.board.buttons.acquire')}</DisabledLink>
                    }
                    if (!isNftTradeCreationAllowed && existingNftId) {
                      return <DisabledLink to={'#'}>{t('p2p.board.buttons.acquire')}</DisabledLink>
                    }
                    else
                      return (
                        <OrangeLink className={'at-click at-link-acquire'} disabled={!account}
                                    to={`/dapps/p2p/my-trades/create-trade/${id}`}>
                          <span>{t('p2p.board.buttons.acquire')}</span>
                        </OrangeLink>
                      )
                  })()}
                </>
              )}
              exact
            />

            <Route
              path="/dapps/p2p/my-adverts"
              className={'at-click at-p2p-btn-my-listing'}
              render={() => (
                <>
                  {!isNftTradeCreationAllowed && existingNftId
                    ? <DisabledLink style={{ marginRight: '16px' }} to={'#'}>{t('p2p.board.buttons.createTrade')}</DisabledLink>
                    : <OrangeLink
                      className={'at-click at-p2p-link-create-trade'}
                      onClick={() => {
                        //@ts-ignore
                        window.dataLayer.push({
                          'event': `process_start`,
                          'process': `DApps P2p create trade`,
                          'step_name': `Create trade`
                        })
                      }}
                      to={{ pathname: `/dapps/p2p/my-trades/create-trade/${id}`, state: { prevPath: '/my-adverts' } }}
                      style={{ marginRight: 16 }}
                    >
                      {t('p2p.board.buttons.createTrade')}
                    </OrangeLink>
                  }

                  <WhiteLink className={'at-click at-p2p-link-edit'} to={`/dapps/p2p/my-adverts/edit-advert/${id}`}
                             style={{ marginRight: 16 }}>
                    {t('p2p.board.buttons.edit')}
                  </WhiteLink>
                  <GrayLink
                    className={'at-click at-p2p-link-delete'}
                    to={`/dapps/p2p/my-adverts/delete-advert/${id}`}
                    onClick={e => removeAdvert(e, item, true)}
                  >
                    {t('p2p.board.buttons.delete')}
                  </GrayLink>
                </>
              )}
              exact
            />
            <Route
              className={'at-click at-p2p-btn-archived'}
              path="/dapps/p2p/my-adverts/archived"
              render={() => (
                <>
                  {nftTokenId
                    ? <DisabledLink to={'#'} className={'at-click at-p2p-btn-restore'}>
                      {t('p2p.board.buttons.restore')}
                    </DisabledLink>
                    : <WhiteLink className={'at-click at-p2p-btn-restore'} onClick={e => removeAdvert(e, item, false)}>
                       {t('p2p.board.buttons.restore')}
                     </WhiteLink>
                  }
                </>
              )}
              exact
            />
        </td>
      </StyledTableRow>
      </tbody>
    </>
  )
}

export default TableRow