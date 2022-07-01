import React, { useEffect, useRef, useState } from 'react';
import { Wrapper, Header, Body, Footer, Message, AdditionalText, AdditionalTextContainer, Content} from './styles';
import { MessengerProps } from '../types';
import { Button, Input, Title } from '../theme';


const Messenger:React.FC<MessengerProps> = ({socket, username, roomNumber}) => {
  const [currentMessage, setCurrentMessage] = useState('')
  const [messagesList, setMessagesList] = useState([])

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    // @ts-ignore
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

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
        time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
      }

     await socket.emit('sendMessage', messageData);
    // @ts-ignore
      setMessagesList(prevState => [...prevState, messageData])
    }
    setCurrentMessage('')
  };

  useEffect(() => {
    socket.off('receiveMessage').on('receiveMessage', (data: any) => {
      // @ts-ignore
      setMessagesList(prevState => [...prevState, data])
    })
  }, [socket]);

  useEffect(() => {
    scrollToBottom()
  }, [messagesList]);

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title fontSize={'18px'}>Live chat</Title>
        </Header>
        <Body>
          {messagesList.map(({ author, message, time }, index) => {
            return (
              <Message key={index} justify={author !== username ? 'flex-start' : 'flex-end'}>
                <Content background={author !== username ? '#eed5a5' : '#b5aef0'}>
                  <p>{message}</p>
                  <AdditionalTextContainer>
                    <AdditionalText>{author}</AdditionalText>
                    <AdditionalText>{time}</AdditionalText>
                  </AdditionalTextContainer>
                </Content>
              </Message>
            )
          })}
          <div ref={messagesEndRef} />
        </Body>
        <Footer>
          <Input
            placeholder={'Enter your message'}
            onChange={e => messageHandler(e)}
            value={currentMessage}
            onKeyPress={e => e.key === 'Enter' && sendMessage(e)}
          />
          <Button background={'#9994ba'} type='submit'>&#9658;</Button>
        </Footer>
    </Wrapper>
  );
};

export default Messenger;