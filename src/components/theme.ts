import styled from 'styled-components';

export const Button = styled.button<{padding?: string}>`
  background-color: #3b3854;
  color: #fff;
  border-radius: 5px;
  border: none;
  padding: ${({ padding }) => padding ?? '6px 12px'};
  cursor: pointer;
  
  &:focus {
    background-color: #793aff;
  }
  
  &:hover {
    background-color: #793aff;
  }
`