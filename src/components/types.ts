
export interface PropsHeader {
  setTableType: (s: string) => void
}

export interface PropsTable {
  tableType: string
}

export interface PropsTableHeader {
  variant: string[]
}

export interface PropsTableRow {
  listingsData: {id: number, trader: string, assetToSwap: string, assetToReceive: string}[]
}