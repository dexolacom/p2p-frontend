import React from 'react';
import { PropsTableHeader } from '../../types';
import { Wrapper } from './styles';


const TableHeader:React.FC<PropsTableHeader> = ({variant}) => {
  return (
    <Wrapper>
      {variant.map((string, index) => (
        <span key={index}>{string}</span>
      ))}
    </Wrapper>
  );
};

export default TableHeader;