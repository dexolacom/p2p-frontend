import React from 'react';
import { ModalProps } from '../../types';
import { Content, Form, Wrapper } from './styles';
import { ReactComponent as Cross } from '../../../assets/icons/cross.svg'
import { AdditionalText, Button, Input, Row, Title } from '../../theme';
import ModalSelect from '../ModalSelect/ModalSelect';


const ListingModal:React.FC<ModalProps> = ({setIsModalOpen}) => {
  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Content>
        <Cross onClick={() => setIsModalOpen(false)}/>
        <Title margin={'1em 0'}>Create listing</Title>
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
          <Row marginBottom={'32px'}>
            <AdditionalText >Define your offer</AdditionalText>
            <Input/>
          </Row>
          <Row justify={'center'} gap={'20px'} flexDirection={'row'}>
            <Button padding={'6px 50px'} background={'#9994ba'} hoverColor={'#7c728f'} onClick={() => setIsModalOpen(false)}>
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