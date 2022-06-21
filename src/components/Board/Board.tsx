// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import GeneralTable from '../GeneralTable/GeneralTable'

const Wrapper = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: row;
  justify-content: space-between;
  
`;

const Board = ({sellFilter, exchangeFilter }) => {
  return (
    <Wrapper>
      <GeneralTable sellFilter={sellFilter} exchangeFilter={exchangeFilter}/>
    </Wrapper>
  )
}

export default Board
