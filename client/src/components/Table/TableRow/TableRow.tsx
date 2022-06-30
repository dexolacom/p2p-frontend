import React, { useEffect } from 'react';
import { Wrapper } from './styles';
import { PropsTableRow } from '../../types';
import { Button } from '../../theme';


const TableRow: React.FC<PropsTableRow> = ({ listingsData, variant, setIsModalOpen }) => {
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
                <span>
                  <Button
                    onClick={() => setIsModalOpen && setIsModalOpen(true)}
                    background={'#793aff'}
                    hoverColor={'#6831d6'}
                  >
                    Acquire
                  </Button>
                </span>
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