import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Backdrop from './components/Backdrop/Backdrop';
import ListingModal from './components/ListingModal/ListingModal';
import TradeModal from './components/TradeModal/TradeModal';


function App() {
  const [tableType, setTableType] = useState('allListings')
  const [isListingModalOpen, setIsListingModalOpen] = useState(false)
  const [isTradeModalOpen, setIsTradeModalOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = (isListingModalOpen || isTradeModalOpen) ? "hidden" : "unset"
  }, [isListingModalOpen, isTradeModalOpen]);

  return (
    <div className="app">
      <div className="app-content">
        <Header setTableType={setTableType} setIsListingModalOpen={setIsListingModalOpen}/>
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
      </div>
    </div>
  )
}

export default App
