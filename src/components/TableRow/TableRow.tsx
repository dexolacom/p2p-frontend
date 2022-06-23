import React from 'react';
import { Wrapper } from './styles';
import { PropsTableRow } from '../types';


const TableRow: React.FC<PropsTableRow> = ({ listingsData }) => {
  return (
    <>
      {listingsData.map((listing, index) => {
        const { id, trader, assetToSwap, assetToReceive } = listing;
        return (
          <Wrapper key={index}>
            <span>{id}</span>
            <span>{trader}</span>
            <span>{assetToSwap}</span>
            <span>{assetToReceive}</span>
            {/*<span>Rate</span>*/}
            {/*<span>Limits</span>*/}
            {/*<span></span>*/}
          </Wrapper>
        );
      })}
    </>
  )
}

export default TableRow