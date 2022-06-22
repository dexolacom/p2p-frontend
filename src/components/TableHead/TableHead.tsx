import React from 'react'
import { Route, Routes } from 'react-router';
import styled from 'styled-components'
import { StyledTableHead } from '../styles'
import { Select } from '../P2PHeader/styles';

const TableHead = ({ changeRate }: { changeRate: (prevState: any) => void }) => {
  return (
    // @ts-ignore
    <StyledTableHead textAlign={'center'}>
      <Routes>
        {['/', 'my-adverts', 'trader', 'my-adverts/archived'].map((path, index) => {
          return (
            <Route path={path} key={index} element={
              <tr>
                <th>&#8470;</th>
                <th>Your counterparty</th>
                <th>Advert</th>
                <th>Last message preview</th>
                <th>Last date</th>
                <th>Actions</th>
              </tr>
            }
            />
          );
        })}

        {['my-trades/open', 'my-trades/closed'].map((path, index) => {
          return (
            <Route path={path} key={index} element={
              <tr>
                {/*<th>Contract</th>*/}
                <th>Trade id</th>
                <th>Your counterparty</th>
                <th>Your send</th>
                <th>Your status </th>
                <th>Your receive</th>
                <th>
                  Counterparty <br /> status
                </th>
                <th>
                  <RateContainer
                    className={'at-click at-p2p-change-rate'}
                    onClick={() => changeRate((prevState: any) => !prevState)}
                  >
                    <span style={{ color: '#fff' }}>Rate</span>
                    {/*<img src={exchange} alt="" />*/}
                  </RateContainer>
                </th>
                <th>Deadline</th>
                <th>Trade creator</th>
                <Routes>
                  <Route
                    path={'my-trades/closed'}
                    element={<th>Status</th>}
                  />
                  <Route
                    path={'my-trades/open'}
                    element={<th>Actions</th>}
                  />
                </Routes>
              </tr>}
            />
          );
        })}

        {['my-chats/about-my-ads', 'my-chats/about-other-ads', 'my-chats/about-all-ads'].map((path, index) => {
          return (
            <Route path={path} key={index} element={
              <tr>
                <th>&#8470;</th>
                <th>Your counterparty</th>
                <th>Advert</th>
                <th>Last message preview</th>
                <th>Last date</th>
                <th>Actions</th>
              </tr>
            }
            />
          );
        })}
      </Routes>
    </StyledTableHead>
  )
}

export default TableHead

const RateContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    height: 15px;
    width: 15px;
  }
`
