
export const returnStatus = (status: number) => {
  const statuses:{[key: number]: string} = {
    0: 'Active',
    1: 'Succeeded',
    2: 'Canceled',
    3: 'Withdrawn',
    4: 'Overdue'
  }
  return statuses[status]
};

export const shortName = (value: string) => (value?.length > 10 ? value?.slice(0, 10) + '...' : value)

// const checker = a => {
//   if (a.length > 10) return a.slice(0, 10) + '...'
//   else return a
// }
