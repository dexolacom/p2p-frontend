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
  padding: 8px 16px;
`

export const Body = styled.div`
  padding: 16px;
  height: 450px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Message = styled.div<{justify?: any}>`
  display: flex;
  justify-content: ${({justify}) => justify ?? 'start'};
`

export const Content = styled.div<{background?: any}>`
  background-color: ${({ background }) => background ?? '#f38e80'};
  border-radius: 5px;
  max-width: 200px;
  margin-bottom: 16px;
  padding: 8px;
  color: #161621;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  white-space: normal;
`

export const AdditionalTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  gap: 20px;
`

export const AdditionalText = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: #2e2762;
`

export const Footer = styled.div`
  display: flex;

  input {
    border-radius: 0 0 0 5px;
  }

  button {
    border-radius: 0 0 5px 0;
  }
`;