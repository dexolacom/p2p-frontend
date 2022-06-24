export const tableHeaderVariant = {
  // allListings: ['#', 'Trader', 'Asset to swap', 'Asset to receive', 'Rate', 'Limits', 'Actions'],
  // myListings: ['#', 'Trader', 'Asset to swap', 'Asset to receive', 'Rate', 'Limits', 'Actions'],
  allListings: ['#', 'Trader', 'Asset to swap', 'Asset to receive'],
  myListings: ['#', 'Trader', 'Asset to swap', 'Asset to receive'],
  myTrades: ['Trade id', 'Your counterparty', 'Your send', 'Your status', 'Your receive', 'Counterparty status', 'Rate', 'Deadline', 'Trade creator', 'Actions'],
  myChats: ['#', 'Your counterparty', 'Advert', 'Last message preview', 'Last date', 'Actions'],
};

export const allListingsData = [
  {
    id: 1,
    trader: 'dada',
    assetToSwap: 'BNB',
    assetToReceive: 'BTC',
  },
  {
    id: 2,
    trader: 'hello-world',
    assetToSwap: 'BNB',
    assetToReceive: 'ETH',
  },
  {
    id: 3,
    trader: 'neo',
    assetToSwap: 'DAI',
    assetToReceive: 'SIB',
  },
];

export const myListingsData = [
  {
    id: 1,
    trader: 'niko',
    assetToSwap: 'BNB',
    assetToReceive: 'USDT',
  },
  {
    id: 2,
    trader: 'hell',
    assetToSwap: 'BUSD',
    assetToReceive: 'SOL',
  },
]

export const myTradesData = [
  {
    tradeId: 1,
    yourCounterparty: 'niko',
    yourSend: '22 BNB',
    yourStatus: 'pending',
    yourReceive: '3 USDT',
    counterpartyStatus: 'sent',
    deadline: '2021-11-22 13:44',
    tradeCreator: 'hello'
  },
  {
    tradeId: 2,
    yourCounterparty: 'bad',
    yourSend: '22 BTC',
    yourStatus: 'pending',
    yourReceive: '3888 USDT',
    counterpartyStatus: 'sent',
    deadline: '2021-11-22 12:44',
    tradeCreator: 'hay'
  },
  {
    tradeId: 3,
    yourCounterparty: 'boob',
    yourSend: '22 USDT',
    yourStatus: 'pending',
    yourReceive: '3 USDC',
    counterpartyStatus: 'sent',
    deadline: '2021-11-24 13:44',
    tradeCreator: 'hello'
  },
]
// export const myChatsData = {}
