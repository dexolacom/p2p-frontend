import styled from 'styled-components';

export const Button = styled.button<{padding?: string, background?: string, color?: string, hoverColor?: string}>`
  background-color: ${({ background }) => background ?? '#3b3854'};
  color: ${({ color }) => color ?? '#fff'};;
  border-radius: 5px;
  border: none;
  padding: ${({ padding }) => padding ?? '6px 12px'};
  cursor: pointer;
  
  &:focus {
    background-color: ${({ hoverColor }) => hoverColor ?? '#793aff'};
  }
  
  &:hover {
    background-color: ${({ hoverColor }) => hoverColor ?? '#793aff'};;
  }
`

export const AdditionalText = styled.span<{fontSize?: string}>`
  font-size: ${({fontSize}) => fontSize ?? '14px'};
  color: #9994ba;
`

export const Title = styled.h4<{fontSize?: string, margin?: string}>`
  margin: ${({margin}) => margin ?? '0'};
  font-size: ${({fontSize}) => fontSize ?? '22px'};
  color: #fff;
`

export const Row = styled.div<{marginBottom?: string, align?: string, justify?: string, gap?: string, flexDirection?: string}>`
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection ?? 'column'};
  align-items: ${({align}) => align ?? 'center'};
  justify-content: ${({justify}) => justify ?? 'start'};
  margin-bottom: ${({marginBottom}) => marginBottom ?? '16px'};
  gap: ${({gap}) => gap ?? '0'};
`