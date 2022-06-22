import React, { useState } from 'react';
import Header from './components/Header/Header';
import Table from './components/Table/Table';


function App() {
  const [tableType, setTableType] = useState('allListings')
  return (
    <div className="app">
      <div className="app-content">
        <Header setTableType={setTableType}/>
        <Table tableType={tableType}/>
      </div>
    </div>
  )
}

export default App
