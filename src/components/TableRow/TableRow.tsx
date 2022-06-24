import React, { useEffect } from 'react';
import { Wrapper } from './styles';
import { PropsTableRow } from '../types';


const TableRow: React.FC<PropsTableRow> = ({ listingsData, variant }) => {
  return (
    <>
      {listingsData.map((listing, index) => {
        return (
          <Wrapper key={index}>
            {(variant === 'allListings' || variant === 'myListings') &&
              <>
                <span>{listing?.id}</span>
                <span>{listing?.trader}</span>
                <span>{listing?.assetToSwap}</span>
                <span>{listing?.assetToReceive}</span>
              </>
            }
            {variant === 'myTrades' &&
              <>
                <span>{listing?.tradeId}</span>
                <span>{listing?.yourCounterparty}</span>
                <span>{listing?.yourSend}</span>
                <span>{listing?.yourStatus}</span>
                <span>{listing?.yourReceive}</span>
                <span>{listing?.counterpartyStatus}</span>
                <span>{listing?.yourReceive}</span>
                <span>{listing?.deadline}</span>
                <span>{listing?.tradeCreator}</span>
              </>
            }
          </Wrapper>
        );
      })}
    </>
  )
}

export default TableRow