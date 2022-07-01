import React from 'react';
import { Button } from '../theme';
import { ButtonsContainer, FilterContainer, Wrapper } from './styles';
import { PropsHeader } from '../types';


const Header:React.FC<PropsHeader> = ({setTableType, setIsListingModalOpen, setIsChatModalOpen}) => {
  return (
    <Wrapper>
      <ButtonsContainer>
        <Button onClick={() => setTableType('allListings')}>All listings</Button>
        <Button onClick={() => setTableType('myListings')}>My listings</Button>
        <Button onClick={() => setTableType('myTrades')}>My trades</Button>
        <Button onClick={() => setTableType('myChats')}>My chats</Button>
        <Button onClick={() => setIsListingModalOpen(true)}>Create listing</Button>
        <Button onClick={() => setIsChatModalOpen(true)}>Open chat</Button>
      </ButtonsContainer>
      <FilterContainer>Filter</FilterContainer>
    </Wrapper>
  );
};

export default Header;