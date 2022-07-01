import React, { useState } from 'react';
import { Wrapper } from './styles';
import { io } from 'socket.io-client';
import { ModalProps } from '../../types';
import { ReactComponent as Cross } from '../../../assets/icons/cross.svg';
import { Content } from '../ListingModal/styles';
import { AdditionalText, Button, Input, Row, Title } from '../../theme';


const socket = io('http://localhost:3001');

const ChatModal: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const [username, setUsername] = useState('');
  const [roomNumber, setRoomNumber] = useState('');

  const joinChat = () => {
    if (username && roomNumber) {
      socket.emit('joinRoom', roomNumber);
    }
  };

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Content>
        <Cross onClick={() => setIsModalOpen(false)} />
        <Title margin={'16px 0'}>Fill the fields for join a chat</Title>
        <Row marginBottom={'16px'}>
          <AdditionalText>User name</AdditionalText>
          <Input placeholder='Enter username' onChange={e => setUsername(e.target.value)} />
        </Row>
        <Row marginBottom={'32px'}>
          <AdditionalText>Room number</AdditionalText>
          <Input placeholder='Enter room number' onChange={e => setRoomNumber(e.target.value)} />
        </Row>
        <Row align={'center'}>
          <Button onClick={joinChat} padding={'6px 50px'} background={'#793aff'} hoverColor={'#6831d6'}>
            Join a chat
          </Button>
        </Row>
      </Content>
    </Wrapper>
  );
};

export default ChatModal;