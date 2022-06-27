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
            <AdditionalText >What do you swap?</AdditionalText>
            <Input/>
          </Row>
          <Row>
            <AdditionalText >What do you want to receive?</AdditionalText>
            <Input/>
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
          <Row marginBottom={'32px'}>
            <AdditionalText >Define your offer</AdditionalText>
            <Input/>
          </Row>
          <Row justify={'center'} gap={'20px'} flexDirection={'row'}>
            <Button padding={'6px 50px'} background={'#9994ba'} hoverColor={'#7c728f'} onClick={() => setIsListingModalOpen(false)}>
              Cancel
            </Button>
            <Button padding={'6px 50px'} background={'#793aff'} hoverColor={'#6831d6'}>
              Create
            </Button>
          </Row>
        </Form>
      </Content>
    </Wrapper>
  );
};

export default ListingModal;