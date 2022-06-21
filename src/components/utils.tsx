// @ts-ignore
console.log('')
// import { MAX_VALUE, ZERO_ADDRESS } from '../../constants'
// import tikTokenAbi from '../../constants/abis/tikTokenAbi.json'
// import ERC20 from '../../constants/abis/erc20.json'
// import Web3 from 'web3'
// import P2PNftAbi from '../../constants/abis/p2pNFT_Abi.json'
// import P2PAbi from '../../constants/abis/eth-P2PContract.json'
// import { AbiItem } from 'web3-utils'
//
// const web3 = new Web3(Web3.givenProvider || process.env.REACT_APP_NETWORK_URL)
// export const nftP2PContractAddress = '0xbE3B867578e5355a7ce7953e350B466fDE7Fa5c1'
// export const nftTokenAddress = '0x4032E41eAbe002f5e4b28d3B47A8E23660b09e6D'
//
// export const NFT_TOKEN_CONTRACT = new web3.eth.Contract(tikTokenAbi as AbiItem[], nftTokenAddress)
//
// // export const P2P_NFT_TOKEN_CONTRACT = new web3.eth.Contract(
// //   P2PNftAbi as AbiItem[], nftP2PContractAddress
// // )
//
// export let P2P_NFT_TOKEN_CONTRACT: any
//
// web3.eth.getChainId().then(number => {
//   number === 97 || number === 56
//     ? (P2P_NFT_TOKEN_CONTRACT = new web3.eth.Contract(P2PNftAbi as AbiItem[], nftP2PContractAddress))
//     : (P2P_NFT_TOKEN_CONTRACT = new web3.eth.Contract(P2PAbi as AbiItem[], process.env.REACT_APP_P2P_TOKEN_CONTRACT))
//   return P2P_NFT_TOKEN_CONTRACT
// })
//
// interface CreateTrade {
//   (
//     p2pContract: object,
//     setIsLoad: (b: boolean) => void,
//     setIsApprovedPending: (b: boolean) => void,
//     validate: () => void,
//     deadline: string,
//     sellAssetAddress: string,
//     buyAssetAddress: string,
//     personAddress: string,
//     account: string,
//     sendAmount: string,
//     receiveAmount: string,
//     setIsSuccessModal: (b: boolean) => void,
//     handleSubmit: (a: number | null, b?: boolean) => void,
//     chainId: number,
//     nftTokenId?: number | string
//   ): any
// }
//
// export const getUserNftTokens = async (
//   contract: any,
//   account: string,
//   setNftTokenIds: ([]) => void,
//   setNftTokenInfo: ([]) => void
// ) => {
//   try {
//     return await contract.methods
//       .getUserTokens(account)
//       .call()
//       .then((tokens: []) => {
//         setNftTokenIds(tokens)
//         const arrayNftTokenIdsPromises = tokens.map(
//           async (tokenId: number) => await contract.methods.tikSupplies(tokenId).call()
//         )
//         Promise.allSettled(arrayNftTokenIdsPromises).then((results: any) => {
//           const arrayNftTokenInfo = results?.map((item: any) => item.value)
//           setNftTokenInfo(arrayNftTokenInfo)
//         })
//       })
//   } catch (e) {
//     console.log(e.message)
//   }
// }
//
// export const onCreateTrade: CreateTrade = async (
//   p2pContract,
//   setIsLoad,
//   setIsApprovedPending,
//   validate,
//   deadline,
//   sellAssetAddress,
//   buyAssetAddress,
//   sendAmount,
//   receiveAmount,
//   personAddress,
//   account,
//   setIsSuccessModal,
//   handleSubmit,
//   chainId
// ) => {
//   const saveToDb = (hash?: string) => {
//     handleSubmit(null, false)
//     setIsSuccessModal(true)
//     // console.log('.on - hash:', hash)
//   }
//
//   // --- Don't delete this temporary code:
//   const logReceipt = (receipt: any) => {
//     // const tradeId = receipt?.events?.NewTrade?.returnValues.tradeId
//     // console.log(`*** receipt: (${tradeId})`, receipt)
//   }
//   const logTokenPairs = (confirmTokens?: string, failTokens?: string) => {
//     // confirmTokens && console.log(777, confirmTokens)
//     // failTokens && console.log(777, failTokens)
//   }
//   // ---
//
//   const isValid = validate()
//   // @ts-ignore
//   if (!isValid) {
//     return
//   }
//   setIsLoad(true)
//   setIsApprovedPending(false)
//   const time = new Date(deadline).valueOf() / 1000
//
//   if (sellAssetAddress === ZERO_ADDRESS) {
//     if (chainId === 56 || chainId === 97) {
//       if (account === personAddress) {
//         // @ts-ignore
//         return await p2pContract.methods
//           .createTradeBNBtoEIP20(buyAssetAddress, (+receiveAmount * 10 ** 18).toString(), time)
//           .send({
//             from: account,
//             value: +sendAmount * 10 ** 18
//           })
//           .on('transactionHash', function(hash: string) {
//             //@ts-ignore
//             window.dataLayer.push({
//               event: `process_complete`,
//               process: `DApps P2p create trade`,
//               step_name: `Transaction pending`,
//               tx_hash: `${hash}`
//             })
//           })
//           .on('receipt', function(receipt: any) {
//             const tradeId = receipt?.events?.NewTradeSingle?.returnValues?.tradeId
//             handleSubmit(+tradeId, true)
//             setIsSuccessModal(true)
//           })
//           .on('error', function(error: any) {
//             console.error('error: ', error)
//             setIsLoad(false)
//           })
//       }
//
//       if (account !== personAddress) {
//         //@ts-ignore
//         return await p2pContract.methods
//           .createTradeEIP20ToEIP20(
//             buyAssetAddress,
//             (+sendAmount * 10 ** 18).toString(),
//             // --- for WBNB
//             '0xA2CA18FC541B7B101c64E64bBc2834B05066248b',
//             (+receiveAmount * 10 ** 18).toString(),
//             time
//           )
//           .send({ from: account })
//           .on('transactionHash', function(hash: string) {
//             //@ts-ignore
//             window.dataLayer.push({
//               event: `process_complete`,
//               process: `DApps P2p create trade`,
//               step_name: `Transaction pending`,
//               tx_hash: `${hash}`
//             })
//           })
//           .on('receipt', function(receipt: any) {
//             const tradeId = receipt?.events?.NewTradeSingle?.returnValues?.tradeId
//             handleSubmit(+tradeId, true)
//             setIsSuccessModal(true)
//           })
//           .on('error', function(error: any) {
//             console.error('error', error)
//             setIsLoad(false)
//           })
//       }
//     }
//     if (chainId === 1 || chainId === 3) {
//       if (account === personAddress) {
//         logTokenPairs('ETH-NBU ETH-USDT ETH-GNBU - need to confirm')
//
//         // @ts-ignore
//         await p2pContract.methods
//           .createTradeETH(buyAssetAddress, (+receiveAmount * 10 ** 18).toString(), time) // parseInt(receiveAmount)
//           .send({
//             from: account,
//             value: +sendAmount * 10 ** 18
//           })
//           .on('transactionHash', function(hash: string) {
//             saveToDb(hash)
//
//             //@ts-ignore
//             window.dataLayer.push({
//               event: `process_complete`,
//               process: `DApps P2p create trade`,
//               step_name: `Transaction pending`,
//               tx_hash: `${hash}`
//             })
//           })
//           .on('receipt', function(receipt: any) {
//             logReceipt(receipt)
//
//             // @ts-ignore
//             // getTradeFetchedData()
//             // @ts-ignore
//             // setForTradeFetchedData(1)
//           })
//           .on('error', function(error: any) {
//             console.error('error', error)
//             setIsLoad(false)
//           })
//       }
//       if (account !== personAddress) {
//         logTokenPairs('need to confirm')
//
//         //@ts-ignore
//         await p2pContract.methods
//           .createTrade(
//             buyAssetAddress,
//             (+sendAmount * 10 ** 18).toString(),
//             '0x0BCd83DF58a1BfD25b1347F9c9dA1b7118b648a6',
//             (+receiveAmount * 10 ** 18).toString(),
//             time
//           )
//           .send({
//             from: account
//           })
//           .on('transactionHash', function(hash: string) {
//             saveToDb(hash)
//
//             //@ts-ignore
//             window.dataLayer.push({
//               event: `process_complete`,
//               process: `DApps P2p create trade`,
//               step_name: `Transaction pending`,
//               tx_hash: `${hash}`
//             })
//           })
//           .on('receipt', function(receipt: any) {
//             logReceipt(receipt)
//           })
//           .on('error', function(error: any) {
//             console.error('error', error)
//             setIsLoad(false)
//           })
//       }
//     }
//   } else {
//     if (buyAssetAddress === ZERO_ADDRESS) {
//       if (chainId === 56 || chainId === 97) {
//         // 0xA2CA18FC541B7B101c64E64bBc2834B05066248b // WBNB
//         // 0x0BCd83DF58a1BfD25b1347F9c9dA1b7118b648a6 // WETH
//         if (account === personAddress) {
//           // @ts-ignore
//           return await p2pContract.methods
//             .createTradeEIP20ToEIP20(
//               sellAssetAddress,
//               (+sendAmount * 10 ** 18).toString(),
//               // --- for WBNB
//               '0xA2CA18FC541B7B101c64E64bBc2834B05066248b',
//               (+receiveAmount * 10 ** 18).toString(),
//               time
//             )
//             .send({
//               from: account
//               // value: +sendAmount * 10 ** 18
//             })
//             .on('transactionHash', function(hash: any) {
//               //@ts-ignore
//               window.dataLayer.push({
//                 event: `process_complete`,
//                 process: `DApps P2p create trade`,
//                 step_name: `Transaction pending`,
//                 tx_hash: `${hash}`
//               })
//             })
//             .on('receipt', function(receipt: any) {
//               const tradeId = receipt?.events?.NewTradeSingle?.returnValues?.tradeId
//               handleSubmit(+tradeId, true)
//               setIsSuccessModal(true)
//             })
//             .on('error', function(error: any) {
//               console.error('error', error)
//               setIsLoad(false)
//             })
//         }
//         if (account !== personAddress) {
//           // @ts-ignore
//           return await p2pContract.methods
//             .createTradeBNBtoEIP20(sellAssetAddress, (+sendAmount * 10 ** 18).toString(), time)
//             .send({
//               from: account,
//               value: +sendAmount * 10 ** 18
//             })
//             .on('transactionHash', function(hash: any) {
//               //@ts-ignore
//               window.dataLayer.push({
//                 event: `process_complete`,
//                 process: `DApps P2p create trade`,
//                 step_name: `Transaction pending`,
//                 tx_hash: `${hash}`
//               })
//             })
//             .on('receipt', function(receipt: any) {
//               const tradeId = receipt?.events?.NewTradeSingle?.returnValues?.tradeId
//               handleSubmit(+tradeId, true)
//               setIsSuccessModal(true)
//             })
//             .on('error', function(error: any) {
//               console.error('error', error)
//               setIsLoad(false)
//             })
//         }
//       }
//       if (chainId === 1 || chainId === 3) {
//         if (account === personAddress) {
//           logTokenPairs('GNBU-ETH NBU-ETH - need to confirm', 'USDT-ETH NBU-ETH - expected to fail')
//
//           //@ts-ignore
//           await p2pContract.methods
//             .createTrade(
//               sellAssetAddress,
//               (+sendAmount * 10 ** 18).toString(),
//               '0x0BCd83DF58a1BfD25b1347F9c9dA1b7118b648a6',
//               (+receiveAmount * 10 ** 18).toString(),
//               time
//             )
//             .send({
//               from: account
//             })
//             .on('transactionHash', function(hash: string) {
//               saveToDb(hash)
//
//               //@ts-ignore
//               window.dataLayer.push({
//                 event: `process_complete`,
//                 process: `DApps P2p create trade`,
//                 step_name: `Transaction pending`,
//                 tx_hash: `${hash}`
//               })
//             })
//             .on('receipt', function(receipt: any) {
//               logReceipt(receipt)
//             })
//             .on('error', function(error: any) {
//               console.error('error', error)
//               setIsLoad(false)
//             })
//         }
//         if (account !== personAddress) {
//           // @ts-ignore
//           await p2pContract.methods
//             .createTradeETH(sellAssetAddress, (+receiveAmount * 10 ** 18).toString(), time) // parseInt(receiveAmount)
//             .send({
//               from: account,
//               value: +sendAmount * 10 ** 18
//             })
//             .on('transactionHash', function(hash: any) {
//               //@ts-ignore
//               window.dataLayer.push({
//                 event: `process_complete`,
//                 process: `DApps P2p create trade`,
//                 step_name: `Transaction pending`,
//                 tx_hash: `${hash}`
//               })
//             })
//             .on('receipt', function(receipt: any) {
//               const tradeId = receipt?.events?.NewTrade?.returnValues?.tradeId
//               handleSubmit(+tradeId, true)
//               setIsSuccessModal(true)
//             })
//             .on('error', function(error: any) {
//               console.error('error', error)
//               setIsLoad(false)
//             })
//         }
//       }
//     } else {
//       if (chainId === 56 || chainId === 97) {
//         if (account === personAddress) {
//           //@ts-ignore
//           return await p2pContract.methods
//             .createTradeEIP20ToEIP20(
//               sellAssetAddress,
//               (+sendAmount * 10 ** 18).toString(),
//               buyAssetAddress,
//               (+receiveAmount * 10 ** 18).toString(),
//               time
//             )
//             .send({ from: account })
//             .on('transactionHash', function(hash: string) {
//               //@ts-ignore
//               window.dataLayer.push({
//                 event: `process_complete`,
//                 process: `DApps P2p create trade`,
//                 step_name: `Transaction pending`,
//                 tx_hash: `${hash}`
//               })
//             })
//             .on('receipt', function(receipt: any) {
//               const tradeId = receipt?.events?.NewTradeSingle?.returnValues?.tradeId
//               handleSubmit(+tradeId, true)
//               setIsSuccessModal(true)
//             })
//             .on('error', function(error: any) {
//               console.error('error', error)
//               setIsLoad(false)
//             })
//         }
//         if (account !== personAddress) {
//           // @ts-ignore
//           return await p2pContract.methods
//             .createTradeEIP20ToEIP20(
//               buyAssetAddress,
//               (+sendAmount * 10 ** 18).toString(),
//               sellAssetAddress,
//               (+receiveAmount * 10 ** 18).toString(),
//               time
//             )
//             .send({ from: account })
//             .on('transactionHash', function(hash: string) {
//               saveToDb(hash)
//
//               //@ts-ignore
//               window.dataLayer.push({
//                 event: `process_complete`,
//                 process: `DApps P2p create trade`,
//                 step_name: `Transaction pending`,
//                 tx_hash: `${hash}`
//               })
//             })
//             .on('receipt', function(receipt: any) {
//               logReceipt(receipt)
//             })
//             .on('error', function(error: any) {
//               console.error('error', error)
//               setIsLoad(false)
//             })
//         }
//       }
//       if (chainId === 1 || chainId === 3) {
//         if (account === personAddress) {
//           logTokenPairs(
//             'GNBU-USDT GNBU-NBU NBU-USDT NBU-GNBU - need to confirm',
//             'NBU-GNBU USDT-GNBU USDT-NBU - Ropsten expected to fail'
//           )
//
//           //@ts-ignore
//           await p2pContract.methods
//             .createTrade(
//               sellAssetAddress,
//               (+sendAmount * 10 ** 18).toString(),
//               buyAssetAddress,
//               (+receiveAmount * 10 ** 18).toString(),
//               time
//             )
//             .send({
//               from: account
//             })
//             .on('transactionHash', function(hash: string) {
//               saveToDb(hash)
//
//               //@ts-ignore
//               window.dataLayer.push({
//                 event: `process_complete`,
//                 process: `DApps P2p create trade`,
//                 step_name: `Transaction pending`,
//                 tx_hash: `${hash}`
//               })
//             })
//             .on('receipt', function(receipt: any) {
//               logReceipt(receipt)
//             })
//             .on('error', function(error: any) {
//               console.error('error', error)
//               setIsLoad(false)
//             })
//         }
//         if (account !== personAddress) {
//           logTokenPairs('NBU-GNBU - need to confirm')
//
//           //@ts-ignore
//           await p2pContract.methods
//             .createTrade(
//               buyAssetAddress,
//               (+sendAmount * 10 ** 18).toString(),
//               sellAssetAddress,
//               (+receiveAmount * 10 ** 18).toString(),
//               time
//             )
//             .send({
//               from: account
//             })
//             .on('transactionHash', function(hash: string) {
//               saveToDb(hash)
//
//               //@ts-ignore
//               window.dataLayer.push({
//                 event: `process_complete`,
//                 process: `DApps P2p create trade`,
//                 step_name: `Transaction pending`,
//                 tx_hash: `${hash}`
//               })
//             })
//             .on('receipt', function(receipt: any) {
//               logReceipt(receipt)
//             })
//             .on('error', function(error: any) {
//               console.error('error', error)
//               setIsLoad(false)
//             })
//         }
//       }
//     }
//   }
//   setIsLoad(false)
// }
//
// export const onCreateTradeNft: CreateTrade = async (
//   p2pContractNft,
//   setIsLoad,
//   setIsApprovedPending,
//   validate,
//   deadline,
//   sellAssetAddress,
//   buyAssetAddress,
//   sendAmount,
//   receiveAmount,
//   personAddress,
//   account,
//   setIsSuccessModal,
//   handleSubmit,
//   chainId,
//   nftTokenId
// ) => {
//   const isValid = validate()
//   // @ts-ignore
//   if (!isValid) {
//     return
//   }
//   setIsLoad(true)
//   setIsApprovedPending(false)
//   const time = new Date(deadline).valueOf() / 1000
//   if (buyAssetAddress === ZERO_ADDRESS) {
//     if (account === personAddress) {
//       // @ts-ignore
//       return await p2pContractNft.methods
//         .createTradeNFTtoEIP20(
//           sellAssetAddress,
//           nftTokenId,
//           // --- for WBNB
//           '0xA2CA18FC541B7B101c64E64bBc2834B05066248b',
//           (+receiveAmount * 10 ** 18).toString(),
//           time
//         )
//         .send({
//           from: account
//         })
//         .on('transactionHash', function(hash: string) {
//           //@ts-ignore
//           window.dataLayer.push({
//             event: `process_complete`,
//             process: `DApps P2p create trade`,
//             step_name: `Transaction pending`,
//             tx_hash: `${hash}`
//           })
//         })
//         .on('receipt', function(receipt: any) {
//           const tradeId = receipt?.events?.NewTradeSingle?.returnValues?.tradeId
//           handleSubmit(+tradeId, true)
//           setIsSuccessModal(true)
//         })
//         .on('error', function(error: any) {
//           console.error('error', error)
//           setIsLoad(false)
//         })
//     }
//
//     if (account !== personAddress) {
//       // @ts-ignore
//       return await p2pContractNft.methods
//         .createTradeBNBtoNFT(sellAssetAddress, nftTokenId, time)
//         .send({
//           from: account,
//           value: (+sendAmount * 10 ** 18).toString()
//         })
//         .on('transactionHash', function(hash: string) {
//           //@ts-ignore
//           window.dataLayer.push({
//             event: `process_complete`,
//             process: `DApps P2p create trade`,
//             step_name: `Transaction pending`,
//             tx_hash: `${hash}`
//           })
//         })
//         .on('receipt', function(receipt: any) {
//           const tradeId = receipt?.events?.NewTradeSingle?.returnValues?.tradeId
//           handleSubmit(+tradeId, true)
//           setIsSuccessModal(true)
//         })
//         .on('error', function(error: any) {
//           console.error('error', error)
//           setIsLoad(false)
//         })
//     }
//   }
//
//   // создатель трейда
//   if (account === personAddress) {
//     // @ts-ignore
//     return await p2pContractNft.methods
//       .createTradeNFTtoEIP20(
//         sellAssetAddress,
//         nftTokenId,
//         buyAssetAddress,
//         (+receiveAmount * 10 ** 18).toString(),
//         time
//       )
//       .send({
//         from: account
//       })
//       .on('transactionHash', function(hash: string) {
//         //@ts-ignore
//         window.dataLayer.push({
//           event: `process_complete`,
//           process: `DApps P2p create trade`,
//           step_name: `Transaction pending`,
//           tx_hash: `${hash}`
//         })
//       })
//       .on('receipt', function(receipt: any) {
//         const tradeId = receipt?.events?.NewTradeSingle?.returnValues?.tradeId
//         handleSubmit(+tradeId, true)
//         setIsSuccessModal(true)
//       })
//       .on('error', function(error: any) {
//         console.error('error', error)
//         setIsLoad(false)
//       })
//   }
//
//   // участник трейда
//   if (account !== personAddress) {
//     // @ts-ignore
//     return await p2pContractNft.methods
//       .createTradeEIP20ToNFT(buyAssetAddress, (+sendAmount * 10 ** 18).toString(), sellAssetAddress, nftTokenId, time)
//       .send({
//         from: account
//       })
//       .on('transactionHash', function(hash: string) {
//         //@ts-ignore
//         window.dataLayer.push({
//           event: `process_complete`,
//           process: `DApps P2p create trade`,
//           step_name: `Transaction pending`,
//           tx_hash: `${hash}`
//         })
//       })
//       .on('receipt', function(receipt: any) {
//         const tradeId = receipt?.events?.NewTradeSingle?.returnValues?.tradeId
//         handleSubmit(+tradeId, true)
//         setIsSuccessModal(true)
//       })
//       .on('error', function(error: any) {
//         console.error('error', error)
//         setIsLoad(false)
//       })
//   }
// }
//
// export const checkAllowance = async (contract: object, account: string, spender: string, nftTokenId: number) => {
//   if (nftTokenId) {
//     // @ts-ignore
//     return contract.methods.isApprovedForAll(account, spender).call()
//   } else {
//     // @ts-ignore
//     return await contract.methods.allowance(account, spender).call()
//   }
// }
//
// export const approve = async (
//   account: string,
//   userId: number,
//   idPerson: number,
//   sellAssetAddress: string,
//   buyAssetAddress: string,
//   nftTokenId: number | null,
//   setIsApprovedPending: (b: boolean) => void | null,
//   chainId: number
// ) => {
//   if (userId === idPerson && nftTokenId) {
//     if (sellAssetAddress === nftTokenAddress) {
//       const tokenNftContract = new web3.eth.Contract(tikTokenAbi as AbiItem[], sellAssetAddress)
//       return await tokenNftContract.methods
//         .setApprovalForAll(nftP2PContractAddress, true)
//         .send({ from: account })
//         .on('receipt', function(receipt: any) {
//           setIsApprovedPending(false)
//         })
//         .on('error', function(error: any) {
//           setIsApprovedPending(false)
//         })
//     }
//   }
//
//   if (userId !== idPerson && nftTokenId) {
//     if (buyAssetAddress === nftTokenAddress) {
//       const tokenNftContract = new web3.eth.Contract(tikTokenAbi as AbiItem[], buyAssetAddress)
//       return await tokenNftContract.methods
//         .setApprovalForAll(nftP2PContractAddress, true)
//         .send({ from: account })
//         .on('receipt', function(receipt: any) {
//           setIsApprovedPending(false)
//         })
//         .on('error', function(error: any) {
//           setIsApprovedPending(false)
//         })
//     }
//   }
//
//   const tokenContract =
//     userId !== idPerson
//       ? new web3.eth.Contract(ERC20 as AbiItem[], buyAssetAddress)
//       : new web3.eth.Contract(ERC20 as AbiItem[], sellAssetAddress)
//
//   if (
//     chainId === 56 ||
//     (chainId === 97 && buyAssetAddress !== nftTokenAddress) ||
//     sellAssetAddress !== nftTokenAddress
//   ) {
//     // ordinary token
//     return await tokenContract.methods
//       .approve(nftP2PContractAddress, MAX_VALUE)
//       .send({ from: account })
//       .on('receipt', function(receipt: any) {
//         setIsApprovedPending(false)
//       })
//       .on('error', function(error: any) {
//         setIsApprovedPending(false)
//       })
//   } else {
//     // eth ordinary token
//     return await tokenContract.methods
//       .approve(process.env.REACT_APP_P2P_TOKEN_CONTRACT, MAX_VALUE)
//       .send({ from: account })
//       .on('receipt', function(receipt: any) {
//         setIsApprovedPending(false)
//       })
//       .on('error', function(error: any) {
//         setIsApprovedPending(false)
//       })
//   }
// }
//
// export const checkIsTradeCreationAllowed = (
//   statusTrade: string,
//   setIsNftTradeCreationAllowed: (b: boolean) => void
// ) => {
//   statusTrade === 'Canceled' || statusTrade === 'Withdrawn' || statusTrade === 'Overdue' || !statusTrade
//     ? setIsNftTradeCreationAllowed(true)
//     : setIsNftTradeCreationAllowed(false)
// }
