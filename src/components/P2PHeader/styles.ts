import styled from 'styled-components'
// import dropdown from '../../../assets/images/dropdown-white.svg'
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  width: 77vw;
  margin: 50px auto;
`

export const Title = styled.h3`
  font-size: 24px;
  font-family: IBM Plex Sans,serif;
  font-weight: 500;
  line-height: 31px;
`

export const TitleContainer = styled.span`
  width: 77vw;
  margin: 0 auto;
`

export const UserContainer = styled.span`
  display: grid;
  justify-content: end;
  align-content: center;
  color: #ffffff;
  font-size: 16px;
`

export const NavLinks = styled.div`
  justify-content: space-around;
  display: flex;
  margin-bottom: 15px;
`

export const StyledLink = styled(NavLink)`
  color: #fff;
  background-color: #616161;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 44px;
  padding: 12px 20px;
  margin-right: 15px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  :hover {
    background-color: #8e8e8e;
  }

  &.active {
    background-color: #e44b05;
  }

  &:last-child {
    background-color: #e44b05;
  }
`

export const Select = styled.select`
  background-color: #343434;
  border-radius: 12px;
  outline: none;
  border: none;
  width: 200px;
  height: 45px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
  padding-left: 23px;
  margin-right: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat;
  background-position-x: 85%;
  background-position-y: 19px;
  font-family: 'IBM Plex Sans', sans-serif;

  option {
    font-family: 'IBM Plex Sans', sans-serif;
  }
  
`

export const SelectsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 15px 0;
`

export const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  background-color: rgba(127, 130, 133, 0.25);
  border-radius: 5px;
  width: 320px;
  border: none;
  outline: none;
  height: 44px;
  margin-left: 15px;
  padding-left: 10px;
  color: #bbbbbb;
  font-size: 16px;
  border: ${(props: { error: boolean }) => (props.error ? '1px solid #F20D19' : '1px solid transparent')};

  &:focus {
    border: ${(props: { error: boolean }) =>
      props.error ? '1px solid #F20D19' : '1px solid rgba(196, 201, 210, 0.35)'};
  }

  &:hover {
    border: ${(props: { error: boolean }) =>
      props.error ? '1px solid #F20D19' : '1px solid rgba(196, 201, 210, 0.35)'};
  }
`

export const ErrorContainer = styled.div`
  margin-left: 15px;
  position: absolute;
  color: #f20d19;
  margin-top: 47px;
  font-family: IBM Plex Sans;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`

export const StyledMenuButton = styled.button`
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  background-color: #722ed1;
  border-radius: 8px;
  width: 44px;
  height: 44px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  /* text-align: center; */
  /* margin-right: 20px; */
  display:flex;
  justify-content:center;

  :hover {
    background-color: #6b2cc7;
  }

  @media screen and (max-width: 720px) {
    position: absolute;
    right: 0;
  }
  
`

export const StyledTextButton = styled.button`
  color: #fff;
  opacity: ${(props: { error: boolean }) => (props.error ? '0.7' : '1')};
  text-decoration: none;
  white-space: nowrap;
  background-color: ${(props: { error: boolean }) => (props.error ? '#616161' : '#722ED1')};
  border-radius: 8px;
  margin-left: 20px;
  padding: 10px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  height: 44px;
  cursor: ${(props: { error: boolean }) => (props.error ? '' : 'pointer')};

  :hover {
    background-color: ${(props: { error: boolean }) => (props.error ? '#616161' : '#6b2cc7')};
  }
`

export const SwiperNavLinksMobile = styled.div`
  display: none;
`

export const SwiperContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 80px;
  justify-content: space-between;
  align-items: center;
  padding-top: 60px;
`
