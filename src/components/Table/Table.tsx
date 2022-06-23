import React from 'react';
import { PropsTable } from '../types';
import { Wrapper } from './styles';
import TableHeader from '../TableHeader/TableHeader';
import { allListingsData, myListingsData, tableHeaderVariant } from '../constants';
import TableRow from '../TableRow/TableRow';


const Table: React.FC<PropsTable> = ({ tableType }) => {

  return (
    <Wrapper>
      {tableType === 'allListings' &&
        <>
          <TableHeader variant={tableHeaderVariant['allListings']} />
          <TableRow listingsData={allListingsData} />
        </>
      }

      {tableType === 'myListings' &&
        <>
          <TableHeader variant={tableHeaderVariant['myListings']} />
          <TableRow listingsData={myListingsData} />
        </>
      }

      {tableType === 'myTrades' && <TableHeader variant={tableHeaderVariant['myTrades']} />}
      {tableType === 'myChats' && <TableHeader variant={tableHeaderVariant['myChats']} />}

    </Wrapper>
  );
};

export default Table;