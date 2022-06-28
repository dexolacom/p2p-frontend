import React from 'react';
import { PropsTable } from '../types';
import { Wrapper } from './styles';
import TableHeader from '../TableHeader/TableHeader';
import { allListingsData, myListingsData, myTradesData, tableHeaderVariant } from '../constants';
import TableRow from '../TableRow/TableRow';


const Table: React.FC<PropsTable> = ({ tableType, setIsModalOpen }) => {

  return (
    <Wrapper>
      {tableType === 'allListings' &&
        <>
          <TableHeader variant={tableHeaderVariant['allListings']} />
          <TableRow listingsData={allListingsData} variant={'allListings'} setIsModalOpen={setIsModalOpen}/>
        </>
      }

      {tableType === 'myListings' &&
        <>
          <TableHeader variant={tableHeaderVariant['myListings']} />
          <TableRow listingsData={myListingsData} variant={'myListings'}/>
        </>
      }

      {tableType === 'myTrades' &&
      <>
        <TableHeader variant={tableHeaderVariant['myTrades']} />
        {/*@ts-ignore*/}
        <TableRow listingsData={myTradesData} variant={'myTrades'}/>
      </>
      }

      {/*{tableType === 'myChats' && <TableHeader variant={tableHeaderVariant['myChats']} />}*/}

    </Wrapper>
  );
};

export default Table;