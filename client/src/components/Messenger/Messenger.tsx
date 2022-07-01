import React, { useEffect, useState } from 'react';
import { Wrapper, Header, Body, Footer } from './styles';
import { MessengerProps } from '../types';
import { Button, Input } from '../theme';


const Messenger:React.FC<MessengerProps> = ({socket, username, roomNumber}) => {
  const [currentMessage, setCurrentMessage] = useState('')

  const messageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(e.target.value)
  };

  const sendMessage = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    if (currentMessage) {
      const messageData = {
        room: roomNumber,
        author: username,
        message: currentMessage,
        date: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
      }

     await socket.emit('sendMessage', messageData);
    }
  };

  useEffect(() => {
    socket.on('receiveMessage', (data: object) => {
      console.log(data)
    })
  }, [socket]);

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
        <Header>
          Live chat
        </Header>
        <Body>
          {currentMessage}
        </Body>
        <Footer>
          <form onSubmit={sendMessage}>
            <Input placeholder={'Enter your message'} onChange={e => messageHandler(e)}/>
            <Button type='submit'>&#9658;</Button>
          </form>
        </Footer>
    </Wrapper>
  );
};

export default Messenger;