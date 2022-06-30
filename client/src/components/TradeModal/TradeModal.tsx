import React from 'react';
import { ListingModalProps } from '../types';
import { Content, Form, Wrapper } from './styles';
import { ReactComponent as Cross } from '../../assets/icons/cross.svg'
import { AdditionalText, Button, Input, Row, Title } from '../theme';
import ModalSelect from '../ModalSelect/ModalSelect';


const TradeModal:React.FC<ListingModalProps> = ({setIsModalOpen}) => {
  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Content>
        <Cross onClick={() => setIsModalOpen(false)}/>
        <Title margin={'1em 0'}>Create Trade</Title>
        <Form>
          <Row>
            <AdditionalText >What do you swap?</AdditionalText>
            <ModalSelect/>
          </Row>
          <Row>
            <AdditionalText >What do you want to receive?</AdditionalText>
            <ModalSelect/>
          </Row>
          <Row flexDirection={'row'} gap={'30px'}>
            <Row marginBottom={0}>
              <AdditionalText>Min amount</AdditionalText>
              <Input/>
            </Row>
            <Row marginBottom={0}>
              <AdditionalText>Max amount</AdditionalText>
              <Input/>
            </Row>
          </Row>
          <Row>
            <AdditionalText>Exchanging rates: </AdditionalText>
          </Row>
          <Row>
            <AdditionalText>DeadLine</AdditionalText>
            <Input type='date'/>
          </Row>
          <Row marginBottom={'32px'}>
            <AdditionalText>Notify user</AdditionalText>
            <Input disabled background={'#757280'}/>
          </Row>
          <Row justify={'center'} gap={'20px'} flexDirection={'row'}>
            <Button padding={'6px 50px'} background={'#9994ba'} hoverColor={'#7c728f'} onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button padding={'6px 50px'} background={'#793aff'} hoverColor={'#6831d6'}>
              Create Trade
            </Button>
          </Row>
        </Form>
      </Content>
    </Wrapper>
  );
};

export default TradeModal;