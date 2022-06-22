// @ts-nocheck
import React, { useState } from 'react'
import Header from './components/P2PHeader';
import CreateAdvert from './components/Forms/CreateAdvert';
import EditAdvert from './components/Forms/EditAdvert';
import { RedirectToMyAdverts } from './components/TableRow/redirects';
import CreateTrade from './components/Forms/CreateTrade';
import Chat from './components/Chat/Chat';
import Board from './components/Board/Board';
import { Route, Routes } from 'react-router-dom'
import GeneralTable from './components/GeneralTable/GeneralTable';
import styled from 'styled-components';
// import { RedirectToMyAdverts } from '../../components/P2P/TableRow/redirects'

const Wrapper = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: row
  justify-content: space-between;
  
`;

const App:React.FC = () => {
  const [sellFilter, setSellFilter] = useState<string>('')
  const [exchangeFilter, setExchangeFilter] = useState<string>('')

  return (
    <div>
      <Header
        setSellFilter={setSellFilter}
        setExchangeFilter={setExchangeFilter}
      />
      {/*<Routes>*/}
      {/*  <Route path="p2p/my-adverts/create-advert" element={CreateAdvert} />*/}
      {/*  <Route path="p2p/my-adverts/edit-advert/:id" element={EditAdvert} />*/}
      {/*  <Route path="p2p/my-adverts/delete-advert/:id" element={RedirectToMyAdverts} />*/}
      {/*  <Route path="p2p/my-trades/create-trade/:id" element={CreateTrade} />*/}
      {/*  <Route path="p2p/my-trades/create-trade" element={CreateTrade} />*/}
      {/*  <Route path="p2p/my-chats/chat/:id" element={Chat} />*/}
      {/*</Routes>*/}
      <Wrapper>
        <GeneralTable sellFilter={sellFilter} exchangeFilter={exchangeFilter}/>
      </Wrapper>
    </div>
  )
}

export default App
