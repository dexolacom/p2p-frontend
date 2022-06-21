// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
// import { useQuery, useMutation } from '@apollo/client'
// import settings from '../../../assets/images/cog.png'
import Modal from 'components/Modal'
import ConnectWalletWarning from '../Modals/ConnectWalletWarning'
// import { useCheckWallet } from '../../../hooks/useCheckWallet'
import {
  HeaderWrapper,
  StyledLink,
  NavLinks,
  UserContainer,
  UserNameContainer,
  Input,
  StyledMenuButton,
  Select,
  SelectsWrapper,
  StyledTextButton,
  ErrorContainer,
  SwiperNavLinksMobile,
  SwiperContainer,
  Title,
  TitleContainer
} from './styles'

// import { GET_ID_USER } from '../../../queries/GetIdUser'
// import { User } from '../../../generated/graphql'
// import { UPDATE_USERNAME } from '../../../queries/UpdateUsername'
// import { useTranslation } from 'react-i18next'
import { Route, useLocation} from 'react-router-dom'
// import { GET_MY_ADVERTS } from '../../../queries/GetAdverts'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/swiper.min.css'
// import 'swiper/components/pagination/pagination.min.css'
// import { GET_ASSETS } from '../../../queries/GetAssets'
// import Stats from '../Stats/'

interface Props {
  setSellFilter: (a: string) => void
  setExchangeFilter: (a: string) => void
}

interface UserData {
  getIdUser: User
}

const menuItems: object[] = [
  {
    // name: 'MyAdverts',
    // name: t('p2p.header.myListings'),
    name: 'My listings',
    endpoint: 'my-adverts/'
  },
  {
    name: 'My trades',
    endpoint: 'my-trades/open'
  },
  {
    name: 'My chats',
    endpoint: 'my-chats/about-all-ads'
  },
  {
    // name: 'Create Advert',
    name: 'Create listing',
    endpoint: 'my-adverts/create-advert'
  }
]

const Header: React.FC<Props> = ({ setSellFilter, setExchangeFilter }) => {
  // const { modalOpen, checkWallet, modalHandler } = useCheckWallet()
  const { account, chainId } = useWeb3React()
  // const history = useHistory()
  const location = useLocation()
  // const { data } = useQuery<UserData>(GET_ID_USER, {
  //   variables: { publicAddress: account },
  //   fetchPolicy: 'network-only'
  // })
  // const { data: assets, loading } = useQuery(GET_ASSETS, { variables: { chainId: chainId } })
  // const [loading, setLoading] = useState()
  // const [userName, setUserName] = useState<string>('')
  // const [idUser, setIdUse] = useState<number | undefined>()
  // const [isInputVisible, setIsInputVisible] = useState<boolean>(false)
  // const [isUserNameError, setIsUsernameError] = useState<boolean>(false)
  // const [selling, setSelling] = useState<string>('')
  // const [exchange, setExchange] = useState<string>('')
  // const [newAssets, setNewAssets] = useState([])
  //
  // const tokens = !loading && assets?.assets
  // const sortedByAlphabet = !loading && tokens?.slice()?.sort((a, b) => a?.name?.localeCompare(b.name))
  // const id: any = localStorage.getItem('id')
  //
  // const [updateName] = useMutation(UPDATE_USERNAME, {
  //   variables: { id: idUser, name: userName },
  //   onError: err => {
  //     setIsUsernameError(true)
  //   },
  //   onCompleted: err => {
  //     setIsInputVisible(false)
  //   },
  //   refetchQueries: [
  //     {
  //       query: GET_MY_ADVERTS,
  //       variables: {
  //         idUser: parseInt(id),
  //         chainId: chainId
  //       }
  //     }
  //   ]
  // })
  //
  // const getNewAssets = () => {
  //   const temp = []
  //   let filtered
  //
  //   if (chainId === 97 || chainId === 56) {
  //     filtered = sortedByAlphabet.filter(function(el) {
  //       return el?.name !== 'BNB' && el?.name !== 'NBU' && el?.name !== 'GNBU'
  //     })
  //     sortedByAlphabet.forEach(item => {
  //       if (item?.name === 'BNB' || item?.name === 'NBU' || item?.name === 'GNBU') {
  //         temp.push(item)
  //       }
  //     })
  //   } else {
  //     filtered = sortedByAlphabet.filter(function(el) {
  //       return el?.name !== 'ETH' && el?.name !== 'NBU' && el?.name !== 'GNBU'
  //     })
  //     sortedByAlphabet.forEach(item => {
  //       if (item?.name === 'ETH' || item?.name === 'NBU' || item?.name === 'GNBU') {
  //         temp.push(item)
  //       }
  //     })
  //   }
  //
  //   return setNewAssets([...temp, ...filtered])
  // }
  //
  // const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (/^\s+$/.test(e.target.value)) {
  //     return
  //   } else {
  //     setUserName(e.target.value)
  //   }
  // }
  //
  // const setInputVisible = () => {
  //   setIsInputVisible(prev => !prev)
  // }
  //
  // const formSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault()
  //   updateName({
  //     variables: {
  //       id: idUser,
  //       name: userName
  //     }
  //   })
  // }
  //
  // const setSellingOption = (e: any) => {
  //   if (e?.target?.value === 'all') {
  //     setSellFilter('')
  //     return
  //   }
  //   if (e?.target?.value === 'NFT') {
  //     setSellFilter('NFT')
  //     return
  //   }
  //   if (e?.target?.value === selling || e === selling) {
  //     setSelling('')
  //     setSellFilter('')
  //     return
  //   }
  //   if (e?.target?.value) {
  //     setSelling(e.target.value)
  //     setSellFilter(e.target.value)
  //   } else {
  //     setSelling(e)
  //     setSellFilter(e)
  //   }
  // }
  //
  // const setExchangeOption = (e: any) => {
  //   if (e?.target?.value === 'all') {
  //     setExchangeFilter('')
  //     return
  //   }
  //   if (e?.target?.value === 'NFT') {
  //     setExchangeFilter('NFT')
  //     return
  //   }
  //   if (e?.target?.value === exchange || e === exchange) {
  //     setExchange('')
  //     setExchangeFilter('')
  //     return
  //   }
  //   if (e?.target?.value) {
  //     setExchange(e.target.value)
  //     setExchangeFilter(e.target.value)
  //   } else {
  //     setExchange(e)
  //     setExchangeFilter(e)
  //   }
  // }
  //
  // const onPathChange = e => {
  //   history.push(`${e.target.value}`)
  // }
  //
  // useEffect(() => {
  //   if (sortedByAlphabet) {
  //     getNewAssets()
  //   }
  // }, [tokens])
  //
  // // useEffect(() => {
  // //   if (data?.getIdUser?.id) {
  // //     const { id, name } = data?.getIdUser
  // //     localStorage.getItem('token') !== null && setUserName(name || '')
  // //     setIdUse(id)
  // //   }
  // // }, [data])
  //
  // useEffect(() => {
  //   if (isUserNameError) {
  //     setIsUsernameError(false)
  //   }
  // }, [userName])

  return (
    <>
      <TitleContainer>
        <Title>f</Title>
      </TitleContainer>

      <HeaderWrapper>
        {/*<Modal isOpen={modalOpen} onDismiss={modalHandler} maxWidth={356}>*/}
        {/*  <ConnectWalletWarning text={t('modalWarning.subHeader.variants.p2p')}></ConnectWalletWarning>*/}
        {/*</Modal>*/}
        {/*<SwiperContainer>*/}
        {/*  <NavLinks>*/}
        {/*    <StyledLink className={'at-click at-p2p-all-listing'} exact to="/dapps/p2p">*/}
        {/*      /!* AdBoard *!/*/}
        {/*      {t('p2p.header.allListing')}*/}
        {/*    </StyledLink>*/}
        {/*    {menuItems.map(({ name, endpoint }) => {*/}
        {/*      if (name === 'My trades') {*/}
        {/*        location.pathname === '/dapps/p2p/my-trades/closed'*/}
        {/*          ? (endpoint = 'my-trades/closed')*/}
        {/*          : (endpoint = 'my-trades/open')*/}
        {/*      }*/}
        {/*      if (name === 'My chats') {*/}
        {/*        location.pathname === '/dapps/p2p/my-chats/about-my-ads'*/}
        {/*          ? (endpoint = 'my-chats/about-my-ads')*/}
        {/*          : location.pathname === '/dapps/p2p/my-chats/about-other-ads'*/}
        {/*          ? (endpoint = 'my-chats/about-other-ads')*/}
        {/*          : (endpoint = 'my-chats/about-all-ads')*/}
        {/*      }*/}

        {/*      if (name === 'My listings') {*/}
        {/*        location.pathname === '/dapps/p2p/my-adverts/archived'*/}
        {/*          ? (endpoint = 'my-adverts/archived')*/}
        {/*          : (endpoint = 'my-adverts/')*/}
        {/*      }*/}

        {/*      return (*/}
        {/*        <StyledLink*/}
        {/*          className={`at-click at-p2p-${endpoint.replace('/', '-').toLowerCase()}`}*/}
        {/*          key={name}*/}
        {/*          onClick={e => {*/}
        {/*            checkWallet(e, account, `/dapps/p2p/${endpoint}`, true)*/}
        {/*            //@ts-ignore*/}
        {/*            window.dataLayer.push({*/}
        {/*              event: `process_start`,*/}
        {/*              process: `dApps P2P create listing`,*/}
        {/*              step_name: `Create listing`*/}
        {/*            })*/}
        {/*          }}*/}
        {/*          exact*/}
        {/*          to={`/dapps/p2p/${endpoint}`}*/}
        {/*          style={localStorage.getItem('token') == 'null' ? blockedButton : {}}*/}
        {/*        >*/}
        {/*          {name}*/}
        {/*        </StyledLink>*/}
        {/*      )*/}
        {/*    })}*/}
        {/*  </NavLinks>*/}

        {/*  <SwiperNavLinksMobile>*/}
        {/*    <Swiper*/}
        {/*      slidesPerView={0.65}*/}
        {/*      spaceBetween={10}*/}
        {/*      slideToClickedSlide={true}*/}
        {/*      freeMode={false}*/}
        {/*      className="mySwiper"*/}
        {/*      style={{ height: '40px', padding: '8px 0' }}*/}
        {/*    >*/}
        {/*      <SwiperSlide style={{maxWidth: '500px'}}>*/}
        {/*        <StyledLink className={'at-click at-p2p-all-listing'} exact to="/dapps/p2p">*/}
        {/*          {t('p2p.header.allListing')}*/}
        {/*        </StyledLink>*/}
        {/*        {menuItems.map(({ name, endpoint }) => {*/}
        {/*          if (name === 'My trades') {*/}
        {/*            location.pathname === '/dapps/p2p/my-trades/closed'*/}
        {/*              ? (endpoint = 'my-trades/closed')*/}
        {/*              : (endpoint = 'my-trades/open')*/}
        {/*          }*/}
        {/*          if (name === 'My chats') {*/}
        {/*            location.pathname === '/dapps/p2p/my-chats/about-my-ads'*/}
        {/*              ? (endpoint = 'my-chats/about-my-ads')*/}
        {/*              : location.pathname === '/dapps/p2p/my-chats/about-other-ads'*/}
        {/*              ? (endpoint = 'my-chats/about-other-ads')*/}
        {/*              : (endpoint = 'my-chats/about-all-ads')*/}
        {/*          }*/}

        {/*          if (name === 'My listings') {*/}
        {/*            location.pathname === '/dapps/p2p/my-adverts/archived'*/}
        {/*              ? (endpoint = 'my-adverts/archived')*/}
        {/*              : (endpoint = 'my-adverts/')*/}
        {/*          }*/}

        {/*          return (*/}
        {/*            <StyledLink*/}
        {/*              className={'at-click at-p2p-all-listing'}*/}
        {/*              key={name}*/}
        {/*              onClick={e => checkWallet(e, account, `/dapps/p2p/${endpoint}`, true)}*/}
        {/*              exact*/}
        {/*              to={`/dapps/p2p/${endpoint}`}*/}
        {/*              style={localStorage.getItem('token') == 'null' ? blockedButton : {}}*/}
        {/*            >*/}
        {/*              {name}*/}
        {/*            </StyledLink>*/}
        {/*          )*/}
        {/*        })}*/}
        {/*      </SwiperSlide>*/}
        {/*    </Swiper>*/}
        {/*  </SwiperNavLinksMobile>*/}

        {/*  <SelectsWrapper>*/}
        {/*    {isInputVisible ? (*/}
        {/*      <></>*/}
        {/*    ) : (*/}
        {/*      <>*/}
        {/*        <Route*/}
        {/*          className={'at-click at-p2p-all-listing'}*/}
        {/*          exact*/}
        {/*          strict*/}
        {/*          path="/dapps/p2p"*/}
        {/*          render={() => (*/}
        {/*            <>*/}
        {/*              <form id="selects-form" style={{ display: 'flex' }}>*/}
        {/*                <Select className={'at-click at-p2p-slc-swap-tkn'} onChange={e => setSellingOption(e)}>*/}
        {/*                  <option value="" hidden>*/}
        {/*                    /!* Selling asset *!/*/}
        {/*                    {t('p2p.header.assetToSwap')}*/}
        {/*                  </option>*/}
        {/*                  {newAssets.map(el => {*/}
        {/*                    return (*/}
        {/*                      <>*/}
        {/*                        <option*/}
        {/*                          className={`at-click at-p2p-slc-${el?.name.toLowerCase()}-swap`}*/}
        {/*                          key={el?.id}*/}
        {/*                          value={el?.name}*/}
        {/*                        >*/}
        {/*                          {el?.name}*/}
        {/*                        </option>*/}
        {/*                      </>*/}
        {/*                    )*/}
        {/*                  })}*/}
        {/*                  <option className={'at-click at-p2p-slc-all-swap'} value="all">*/}
        {/*                    {t('p2p.header.all')}*/}
        {/*                  </option>*/}
        {/*                  <option className={'at-click at-p2p-slc-nft-swap'} value="NFT">*/}
        {/*                    {t('p2p.header.nftTokens')}*/}
        {/*                  </option>*/}
        {/*                </Select>*/}
        {/*                <Select className={'at-click at-p2p-slc-receive-tkn'} onChange={e => setExchangeOption(e)}>*/}
        {/*                  <option value="" hidden>*/}
        {/*                    {t('p2p.header.assetToReceive')}*/}
        {/*                  </option>*/}
        {/*                  {newAssets.map(el => {*/}
        {/*                    return (*/}
        {/*                      <>*/}
        {/*                        <option*/}
        {/*                          className={`at-click at-p2p-slc-${el?.name.toLowerCase()}-receive`}*/}
        {/*                          key={el?.id}*/}
        {/*                          value={el?.name}*/}
        {/*                        >*/}
        {/*                          {el?.name}*/}
        {/*                        </option>*/}
        {/*                      </>*/}
        {/*                    )*/}
        {/*                  })}*/}
        {/*                  <option className={'at-click at-p2p-slc-all-receive'} value="all">*/}
        {/*                    {t('p2p.header.all')}*/}
        {/*                  </option>*/}
        {/*                  <option className={'at-click at-p2p-slc-all-swap'} value="NFT">*/}
        {/*                    {t('p2p.header.nftTokens')}*/}
        {/*                  </option>*/}
        {/*                </Select>*/}
        {/*                /!*<button type="reset" from="selects-form" onClick={() =>  { setSellFilter(''); setExchangeFilter('');}}>*!/*/}
        {/*                /!*  reset*!/*/}
        {/*                /!*</button>*!/*/}
        {/*              </form>*/}
        {/*            </>*/}
        {/*          )}*/}
        {/*        />*/}

        {/*        <Route*/}
        {/*          className={'at-click at-p2p-my-trades'}*/}
        {/*          exact*/}
        {/*          strict*/}
        {/*          path={['/dapps/p2p/my-trades/open', '/dapps/p2p/my-trades/closed']}*/}
        {/*          render={() => {*/}
        {/*            return (*/}
        {/*              <>*/}
        {/*                <Select className={'at-click at-p2p-all-slc-trades'} onChange={onPathChange}>*/}
        {/*                  <option className={'at-click at-p2p-my-trades-open'} value="open">*/}
        {/*                    {t('p2p.header.open')}*/}
        {/*                  </option>*/}
        {/*                  <option className={'at-click at-p2p-my-trades-closed'} value="closed">*/}
        {/*                    {t('p2p.header.closed')}*/}
        {/*                  </option>*/}
        {/*                </Select>*/}
        {/*              </>*/}
        {/*            )*/}
        {/*          }}*/}
        {/*        />*/}

        {/*        <Route*/}
        {/*          exact*/}
        {/*          strict*/}
        {/*          path={[*/}
        {/*            '/dapps/p2p/my-chats/about-all-ads',*/}
        {/*            '/dapps/p2p/my-chats/about-my-ads',*/}
        {/*            '/dapps/p2p/my-chats/about-other-ads'*/}
        {/*          ]}*/}
        {/*          render={() => {*/}
        {/*            return (*/}
        {/*              <>*/}
        {/*                <Select className={'at-click at-p2p-slc-ads'} onChange={onPathChange} style={{ width: '175px' }}>*/}
        {/*                  <option className={'at-click at-p2p-all-ads'} value="about-all-ads">*/}
        {/*                    {t('p2p.header.allAds')}*/}
        {/*                  </option>*/}
        {/*                  <option className={'at-click at-p2p-my-ads'} value="about-my-ads">*/}
        {/*                    {t('p2p.header.myAds')}*/}
        {/*                  </option>*/}
        {/*                  <option className={'at-click at-p2p-other-ads'} value="about-other-ads">*/}
        {/*                    {t('p2p.header.otherAds')}*/}
        {/*                  </option>*/}
        {/*                </Select>*/}
        {/*              </>*/}
        {/*            )*/}
        {/*          }}*/}
        {/*        />*/}

        {/*        <Route*/}
        {/*          exact*/}
        {/*          strict*/}
        {/*          path={['/dapps/p2p/my-adverts/', '/dapps/p2p/my-adverts/archived', '/dapps/p2p/my-adverts']}*/}
        {/*          render={() => (*/}
        {/*            <>*/}
        {/*              <Select className={'at-click at-p2p-slc-type'} onChange={onPathChange} style={{ width: '175px' }}>*/}
        {/*                <option className={'at-click at-p2p-actual'} value="/dapps/p2p/my-adverts/">*/}
        {/*                  {t('p2p.header.actual')}*/}
        {/*                </option>*/}
        {/*                <option className={'at-click at-p2p-all-archived'} value="/dapps/p2p/my-adverts/archived">*/}
        {/*                  {t('p2p.header.archived')}*/}
        {/*                </option>*/}
        {/*              </Select>*/}
        {/*            </>*/}
        {/*          )}*/}
        {/*        />*/}
        {/*      </>*/}
        {/*    )}*/}


        {/*    /!* End cap for right-aligning a StyledMenuButton *!/*/}
        {/*    <UserContainer>*/}
        {/*      <UserNameContainer>*/}
        {/*        <form style={{ display: 'flex' }}>*/}
        {/*          {isInputVisible && (*/}
        {/*            <>*/}
        {/*              <Input*/}
        {/*                error={isUserNameError}*/}
        {/*                type="text"*/}
        {/*                value={userName}*/}
        {/*                placeholder={t('p2p.header.username')}*/}
        {/*                onChange={inputHandler}*/}
        {/*                maxLength={20}*/}
        {/*              />*/}
        {/*              <StyledTextButton*/}
        {/*                className={'at-click at-p2p-btn-cnf'}*/}
        {/*                error={isUserNameError}*/}
        {/*                onClick={formSubmit}*/}
        {/*              >*/}
        {/*                {t('p2p.header.confirm')}*/}
        {/*              </StyledTextButton>*/}
        {/*            </>*/}
        {/*          )}*/}
        {/*          {isUserNameError && isInputVisible && (*/}
        {/*            <ErrorContainer>{t('p2p.header.thisUsernameIsAlreadyTaken')}</ErrorContainer>*/}
        {/*          )}*/}
        {/*        </form>*/}
        {/*        {account && !isInputVisible && (*/}
        {/*          <StyledMenuButton className={'at-click at-p2p-btn-show-input'} onClick={setInputVisible}>*/}
        {/*            <img src={settings} style={{ height: 24, width: 24, marginTop: 9 }} />*/}
        {/*          </StyledMenuButton>*/}
        {/*        )}*/}
        {/*      </UserNameContainer>*/}
        {/*    </UserContainer>*/}
        {/*  </SelectsWrapper>*/}
        {/*</SwiperContainer>*/}
      </HeaderWrapper>
    </>
  )
}

export default Header

const blockedButton: React.CSSProperties = {
  // pointerEvents: 'none',
  cursor: 'pointer',
  color: '#809098',
  background: 'rgba(52,63,69,0.7)'
}
