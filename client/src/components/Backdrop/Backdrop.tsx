import React from 'react';
import { Wrapper } from './styles';
import { ModalProps } from '../types';


const Backdrop:React.FC<ModalProps> = ({children, setIsModalOpen}) => {
  return (
    <Wrapper onClick={() => setIsModalOpen(false)}>
      {children}
    </Wrapper>
  );
};

export default Backdrop