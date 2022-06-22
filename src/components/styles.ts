//@ts-nocheck
import styled from 'styled-components'
// // import { TableRowLink } from '../../theme'
//
// export const GrayLink = styled(TableRowLink)`
//   background: rgba(97, 97, 97, 1);
//   color: #fff;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 20px;
//   border-radius: 6px;
//   padding: 6px 12px;
//
//   :hover {
//     background-color: rgba(142, 142, 142, 1);
//   }
// `
//
// export const OrangeLink = styled(TableRowLink)`
//   background: rgba(228, 75, 5, 1);
//   color: #fff;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 20px;
//   border-radius: 6px;
//   padding: 6px 12px;
//
//   :hover {
//     background-color: rgba(200, 66, 4, 1);
//   }
// `
//
// export const WhiteLink = styled(TableRowLink)`
//   background: #e3e6ec;
//   color: rgba(30, 30, 30, 1);
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 20px;
//   border-radius: 6px;
//   padding: 6px 12px;
//   :hover {
//     background-color: #d0d3d9;
//   }
// `
//
// export const DisabledLink = styled(TableRowLink)`
//   background: rgba(52, 63, 69, 0.7);
//   opacity: 0.7;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 20px;
//   border-radius: 6px;
//   padding: 6px 12px;
//   color: #888d9b;
//   cursor: default;
//   :hover {
//     background-color: rgba(52, 63, 69, 0.7);
//   }
// `

export const EmptyTableMessage = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  color: #8e8e8e;
`
export const SectionTitle = styled.div`
  margin-top: 32px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
`

export const StyledTable = styled.table`
  width: ${({ width }) => (width ? width : '70vw')};
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0 1em;
  padding: 0;

  th {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  td:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  td:last-child {
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
  }

  tr td:last-child {
    width: 1%;
    white-space: nowrap;
  }

  // change table to card
  @media screen and (max-width: 1400px) {
    max-width: 450px;
    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
    tr {
      display: block;
      margin-bottom: 16px;
      border-radius: 12px;
    }

    td {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #bbbbbb;
    }

    td::before {
      content: attr(data-label);
      float: left;
    }

    tr td:last-child::before {
      content: none;
    }

    tr td:last-child {
      width: 100%;
      white-space: nowrap;
      justify-content: center;
    }

    td a {
      flex: 1;
    }
    @media screen and (max-width: 420px) {
      width: 95vw;
    }
  }
`

export const StyledTableHead = styled.thead`
  color: white;

  th:first-child {
    text-align: ${({ textAlign }) => textAlign ?? 'left'};
  }

  th {
    padding: 0 15px;
    text-align: center;
    font-size: 13px;
    font-weight: normal;
    color: #8e8e8e;
    white-space: nowrap;
  }

  i {
    font-size: 14px;
    margin-left: 3px;
  }

  img {
    height: 20px;
    width: 20px;
    margin-left: 5px;
  }
`

export const StyledTableRow = styled.tr`
  background-color: #343434;
  color: #edeef2;
  font-size: 14px;
  width: 100%;

  a {
    text-decoration: none;
  }

  td {
    overflow: hidden;
    white-space: nowrap;
    //padding: 16px 20px;
    padding: ${({ padding }) => padding ?? '16px 20px'};
    text-align: center;
  }

  tr {
    border-radius: 12px;
  }

  @media screen and (max-width: 1400px) {
    td {
      width: 100%;
      padding: 8px 15px;
    }
  }
`

export const TableCellContent = styled.span`
  max-width: 250px;
  margin: auto;
  display: flex;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 1400px) {
    margin: 0;
  }
`

export const TableCellItem = styled.span`
  margin-right: 12px;
`

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

// export const StyledTableRowLink = styled(TableRowLink)`
//   font-size: 13px;
//   font-weight: 600;
//   border-radius: 4px;
//   padding: 7px 18px;
// `

export const AddressContainer = styled.span`
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 150px;
`
