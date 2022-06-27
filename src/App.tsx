import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Backdrop from './components/Backdrop/Backdrop';
import ListingModal from './components/ListingModal/ListingModal';


function App() {
  const [tableType, setTableType] = useState('allListings')
  const [isListingModalOpen, setIsListingModalOpen] = useState(true)
  // const [isTradeModalOpen, setIsTradeModalOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isListingModalOpen ? "hidden" : "unset"
  }, [isListingModalOpen]);

  return (
    <div className="app">
      <div className="app-content">
        <Header setTableType={setTableType} setIsListingModalOpen={setIsListingModalOpen}/>
        <Table tableType={tableType}/>
        {isListingModalOpen &&
          <Backdrop setIsListingModalOpen={setIsListingModalOpen}>
            <ListingModal setIsListingModalOpen={setIsListingModalOpen}/>
          </Backdrop>
        }
      </div>
    </div>
  )
}

export default App
