import React from 'react'
import { Route, Routes } from 'react-router-dom';
import BoardTable from '../Board/Table'

interface Props {
  sellFilter?: string;
  exchangeFilter?: string;
}

const GeneralTable: React.FC<Props> = ({ sellFilter, exchangeFilter }) => {
  return (
    <div style={{ margin: '0 auto' }}>
      <Routes>
        <Route
          path={'/dapps/p2p'}
          element={<BoardTable sellFilter={sellFilter} exchangeFilter={exchangeFilter}/>}
        />
        {/*<Route path={['/dapps/p2p/my-adverts/', '/dapps/p2p/my-adverts/archived']} element={MyAdvertsTable}/>*/}
        {/*<Route path={['/dapps/p2p/my-trades/open', '/dapps/p2p/my-trades/closed']} element={MyTradesTable}/>*/}
        {/*<Route*/}
        {/*  path={['/dapps/p2p/my-chats/about-my-ads', '/dapps/p2p/my-chats/about-other-ads', '/dapps/p2p/my-chats/about-all-ads']}*/}
        {/*  element={MyChatsTable}*/}
        {/*/>*/}
      </Routes>
    </div>
  )
}

export default GeneralTable
