import React from 'react'
import { Redirect } from 'react-router-dom'

export const RedirectToMyAdverts = () => {
  return <Redirect to={`/dapps/p2p/my-adverts`} />
}
