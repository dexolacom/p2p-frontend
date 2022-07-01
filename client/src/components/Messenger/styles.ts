import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #3b3854;
  border-radius: 5px;
  position: relative;
  width: clamp(300px, 500px, 50%);
`

export const Header = styled.div`
  background-color: #9994ba;
  border-radius: 5px 5px 0 0;
  width: 100%;
  padding: 16px;
`

export const Body = styled.div`
  padding: 0 16px;
`

export const Footer = styled.div`
  form {
    display: flex;
  }

  input {
    border-radius: 0 0 0 5px;
  }

  button {
    border-radius: 0 0 5px 0;
  }
`;