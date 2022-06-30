
export interface PropsHeader {
  setTableType: (s: string) => void
  setIsListingModalOpen: (b: boolean) => void
}

export interface PropsTable {
  tableType: string
  setIsModalOpen?: (b: boolean) => void
}

export interface PropsTableHeader {
  variant: string[]
}

export interface PropsTableRow {
  listingsData: {
    id: number
    trader: string
    assetToSwap: string
    assetToReceive: string
    tradeId?: number | string,
    yourCounterparty?: string,
    yourSend?: string,
    yourStatus?: string,
    yourReceive?: string,
    counterpartyStatus?: string,
    deadline?: string,
    tradeCreator?: string
  }[]
  variant: string
  setIsModalOpen?: (b: boolean) => void
}

export interface ListingModalProps {
  setIsModalOpen: (b: boolean) => void
  children?: JSX.Element[] | JSX.Element
}