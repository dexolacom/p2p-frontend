import React from 'react';
import { ListingModalProps } from '../types';
import { Content, Form, Input, Wrapper } from './styles';
import { ReactComponent as Cross } from '../../assets/icons/cross.svg'
import { AdditionalText, Button, Row, Title } from '../theme';


const ListingModal:React.FC<ListingModalProps> = ({setIsListingModalOpen}) => {
  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Content>
        <Cross onClick={() => setIsListingModalOpen(false)}/>
        <Title margin={'1em 0'}>Create listing</Title>
        <Form>
          <Row>
            <AdditionalText>What do you swap?</AdditionalText>
            <Input/>
          </Row>
          <Row>
            <AdditionalText>What do you want to receive?</AdditionalText>
          </Row>
          <Row>
            <AdditionalText></AdditionalText>
          </Row>
          <Row>
            <AdditionalText>Define your offer</AdditionalText>
          </Row>
          <Row justify={'center'} gap={'20px'} flexDirection={'row'}>
            <Button background={'#9994ba'} hoverColor={'#7c728f'}>Cancel</Button>
            <Button background={'#793aff'} hoverColor={'#6831d6'}>Create</Button>
          </Row>

        </Form>
      </Content>
    </Wrapper>
  );
};

export default ListingModal;