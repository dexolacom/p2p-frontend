import React from 'react';
import { Wrapper } from './styles';
import { ListingModalProps } from '../types';


const Backdrop:React.FC<ListingModalProps> = ({children, setIsModalOpen}) => {
  return (
    <Wrapper onClick={() => setIsModalOpen(false)}>
      {children}
    </Wrapper>
  );
};

export default Backdrop