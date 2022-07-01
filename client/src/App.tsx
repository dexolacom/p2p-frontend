import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Backdrop from './components/Backdrop/Backdrop';
import ListingModal from './components/Modals/ListingModal/ListingModal';
import TradeModal from './components/Modals/TradeModal/TradeModal';
import ChatModal from './components/Modals/ChatModal/ChatModal';


function App() {
  const [tableType, setTableType] = useState('allListings')
  const [isListingModalOpen, setIsListingModalOpen] = useState(false)
  const [isTradeModalOpen, setIsTradeModalOpen] = useState(false)
  const [isChatModalOpen, setIsChatModalOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = (isListingModalOpen || isTradeModalOpen || isChatModalOpen) ? "hidden" : "unset"
    console.log(document.body.style.overflow);
  }, [isListingModalOpen, isTradeModalOpen, isChatModalOpen]);


  return (
    <div className="app">
      <div className="app-content">
        <Header setTableType={setTableType} setIsListingModalOpen={setIsListingModalOpen} setIsChatModalOpen={setIsChatModalOpen}/>
        <Table tableType={tableType} setIsModalOpen={setIsTradeModalOpen}/>
        {isListingModalOpen &&
          <Backdrop setIsModalOpen={setIsListingModalOpen}>
            <ListingModal setIsModalOpen={setIsListingModalOpen}/>
          </Backdrop>
        }
        {isTradeModalOpen &&
          <Backdrop setIsModalOpen={setIsTradeModalOpen}>
            <TradeModal setIsModalOpen={setIsTradeModalOpen}/>
          </Backdrop>
        }
        {isChatModalOpen &&
          <Backdrop setIsModalOpen={setIsChatModalOpen}>
            <ChatModal setIsModalOpen={setIsChatModalOpen}/>
          </Backdrop>
        }
      </div>
    </div>
  )
}

export default App
