import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #3b3854;
  border-radius: 5px;
  position: relative;
  width: clamp(300px, 450px, 50%);
`

export const Content = styled.div`
  padding: 1em;
  
  svg {
    width: 24px;
    height: 24px;
    color: #9994ba;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
  }
`