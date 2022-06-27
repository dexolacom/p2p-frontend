import React from 'react';
import { Wrapper } from './styles';
import { ListingModalProps } from '../types';


const Backdrop:React.FC<ListingModalProps> = ({children, setIsListingModalOpen}) => {
  return (
    <Wrapper onClick={() => setIsListingModalOpen(false)}>
      {children}
    </Wrapper>
  );
};

export default Backdrop