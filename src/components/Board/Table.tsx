// @ts-nocheck
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
// import { useQuery, useMutation } from '@apollo/client'
import { useLocation } from 'react-router-dom'

// import { PaginateContainer } from '../../../theme'

// import TableHead from '../TableHead/TableHead'
// import TableRow from '../TableRow/TableRow'

// import { GET_MY_ADVERTS } from '../../../queries/GetAdverts'
// import { DELETE_ADVERT } from '../../../queries/DeleteAdvert'
// import { GET_ADVERTS } from '../../../queries/GetAdverts'
// import { useActiveWeb3React } from '../../../hooks'
// import { StyledTable } from '../../Borrow/tableStyles'

interface TableRowProps {
  item: {
    trader: string
    sellingAsset: string
    exchangeAsset: string
    rate: string
    limits: string
  }
}

interface Props {
  sellFilter?: string
  exchangeFilter?: string
}

const Table: React.FC<Props> = ({sellFilter, exchangeFilter}) => {
  const id: any = localStorage.getItem('id')
  const { chainId } = useActiveWeb3React()
  const location = useLocation()
  useEffect(() => {
    localStorage.setItem('location', location.pathname)
  }, [location])

  const { data: adverts, loading: loadAdverts } = useQuery(GET_ADVERTS, {
    variables: {
      chainId: chainId
    },
    fetchPolicy: 'cache-and-network'
  })
  const [deleteAdvert, { error }] = useMutation(DELETE_ADVERT, { errorPolicy: 'all' })

  const [pageNumber, setPageNumber] = useState(0)
  const [changeRate, setChangeRate] = useState<boolean>(false)
  const [filterAdverts, setFilterAdvert] = useState(null)

  const itemsPerPage = 8
  const pagesVisited = pageNumber * itemsPerPage

  useEffect(() => {
    if (error) alert('Unable to delete because you have an active trade or chat')
  }, [error])

  const getPagesCount = (data: any) => {
    return Math.ceil(data?.length / itemsPerPage)
  }

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const removeAdvert = (e: React.ChangeEvent<HTMLInputElement>, item: { id: number }) => {
    e.preventDefault()
    deleteAdvert({
      variables: { id: item.id },
      update: cache => {
        const existingAdvert: any = cache.readQuery({
          query: GET_MY_ADVERTS,
          variables: { idUser: parseInt(id), chainId: chainId }
        })
        const newList = existingAdvert?.myAdverts?.filter((el: any) => el.id !== item.id)
        cache.writeQuery({
          query: GET_MY_ADVERTS,
          data: { myAdverts: newList }
        })
      }
    })
  }

  useEffect(() => {
    !loadAdverts && setFilterAdvert(adverts?.listAdverts)
  }, [loadAdverts])

  useEffect(() => {
    if (sellFilter !== '' || null) {
      let data
      if (sellFilter === 'NFT') {
        const nftAdverts = []
        adverts?.listAdverts.filter(el => {
          el?.nftTokenId && nftAdverts.push(el)
        })
        setFilterAdvert(nftAdverts)
        data = nftAdverts
      } else {
        data = adverts?.listAdverts.filter(el =>
          el?.sellAsset?.name.toLowerCase().includes(sellFilter?.toLowerCase())
        )
        setFilterAdvert(data)
      }

      if (exchangeFilter) {
        const secondFilterData = data?.filter(el =>
          el?.buyAsset?.name.toLowerCase().includes(exchangeFilter?.toLowerCase())
        )
        setFilterAdvert(secondFilterData)
      }
    } else {
      setFilterAdvert(adverts?.listAdverts)
    }
  }, [sellFilter])

  useEffect(() => {
    if (exchangeFilter !== '' || null) {
      let data
      if (exchangeFilter === 'NFT') {
        const nftAdverts = []
        adverts?.listAdverts.filter(el => {
          el?.nftTokenId && nftAdverts.push(el)
        })
        setFilterAdvert(nftAdverts)
        data = nftAdverts
      } else {
        data = adverts?.listAdverts.filter(el =>
          el?.buyAsset?.name.toLowerCase().includes(exchangeFilter?.toLowerCase())
        )
        setFilterAdvert(data)
      }

      if (sellFilter) {
        const secondFilterData = data.filter(el => el?.sellAsset?.name.toLowerCase().includes(sellFilter?.toLowerCase()))
        setFilterAdvert(secondFilterData)
      }
    } else {
      setFilterAdvert(adverts?.listAdverts)
    }
  }, [exchangeFilter])

  const advertsWithoutArchived = (!loadAdverts && filterAdverts) && filterAdverts.filter(item => !item?.isArchived);

  const renderBoard =
    (!loadAdverts && filterAdverts) &&
    advertsWithoutArchived
      .slice(pagesVisited, pagesVisited + itemsPerPage)
      .map((item: TableRowProps, index: number) => {
          return (
            <TableRow
              key={index}
              item={item}
              removeAdvert={removeAdvert}
              changeRate={changeRate}
              setChangeRate={setChangeRate}/>
            )
      })

  return (
    <>
      <StyledTable width={'77vw'}>
        <TableHead changeRate={setChangeRate} />
        {renderBoard}
      </StyledTable>
      <PaginateContainer>
        <ReactPaginate
          pageCount={getPagesCount(advertsWithoutArchived)}
          previousLabel={'Prev'}
          nextLabel={'Next'}
          onPageChange={changePage}
          containerClassName={advertsWithoutArchived?.length <= 8 ? 'pagination-none' : 'pagination'}
          previousLinkClassName={'prevBtn'}
          nextLinkClassName={'nextBtn'}
          disabledClassName={'disabledBtn'}
          activeClassName='paginationActive'
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
        />
      </PaginateContainer>
    </>
  )
}

export default Table
