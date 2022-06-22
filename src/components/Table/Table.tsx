import React from 'react';
import { PropsTable } from '../types';
import { Wrapper } from './styles';
import TableHeader from '../TableHeader/TableHeader';
import { tableHeaderVariant } from '../constants';


const Table:React.FC<PropsTable> = ({tableType}) => {
  return (
    <Wrapper>
      {tableType === 'allListings' && <TableHeader variant={tableHeaderVariant['allListings']}/>}
      {tableType === 'myListings' && <TableHeader variant={tableHeaderVariant['myListings']}/>}
      {tableType === 'myTrades' && <TableHeader variant={tableHeaderVariant['myTrades']}/>}
      {tableType === 'myChats' && <TableHeader variant={tableHeaderVariant['myChats']}/>}
    </Wrapper>
  );
};

export default Table;