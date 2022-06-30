import React from 'react';
import { Wrapper } from './styles';
import { io } from 'socket.io-client'

const socket = io('http://localhost:3001')

const Chat = () => {
  return (
    <Wrapper>
      <h1>This is chat</h1>
    </Wrapper>
  );
};

export default Chat;