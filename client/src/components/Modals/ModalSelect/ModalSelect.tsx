import React from 'react';
import { Select } from './styles';
import { tokens } from '../../constants';


const ModalSelect = () => {
  return (
    <Select>
      {tokens.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </Select>
  );
};

export default ModalSelect;