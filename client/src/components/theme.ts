import styled from 'styled-components';

const buttonBackground = '#3b3854'
const buttonHoverColor = '#793aff'


export const Button = styled.button<{padding?: string, background?: string, color?: string, hoverColor?: string}>`
  background-color: ${({ background }) => background ?? buttonBackground};
  color: ${({ color }) => color ?? '#fff'};;
  border-radius: 5px;
  border: none;
  padding: ${({ padding }) => padding ?? '6px 12px'};
  cursor: pointer;
  
  &:focus {
    background-color: ${({ hoverColor }) => hoverColor ?? buttonHoverColor};
  }
  
  &:hover {
    background-color: ${({ hoverColor }) => hoverColor ?? buttonHoverColor};
  }
`

export const AdditionalText = styled.span<{fontSize?: string, marginBottom?: string}>`
  margin-bottom: ${({marginBottom}) => marginBottom ?? '8px'};
  font-size: ${({fontSize}) => fontSize ?? '14px'};
  color: #9994ba;
`

export const Title = styled.h4<{fontSize?: string, margin?: string}>`
  margin: ${({margin}) => margin ?? '0'};
  font-size: ${({fontSize}) => fontSize ?? '22px'};
  color: #fff;
`

export const Row = styled.div<{marginBottom?: string | number, align?: string, justify?: string, gap?: string, flexDirection?: string}>`
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection ?? 'column'};
  align-items: ${({align}) => align ?? 'start'};
  justify-content: ${({justify}) => justify ?? 'start'};
  margin-bottom: ${({marginBottom}) => marginBottom ?? '16px'};
  gap: ${({gap}) => gap ?? '0'};
`

export const Input = styled.input<{background?: string}>`
  border: none;
  outline: none;
  background-color: ${({background}) => background ?? '#9994ba'};
  color: #fff;
  border-radius: 5px;
  padding: 5px 12px;
  width: 100%;

  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
  }
`