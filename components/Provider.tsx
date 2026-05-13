'use client'


import { store } from '@/src/store'
import React from 'react'
import { Provider } from 'react-redux'

const Provid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
    <Provider store={store}>
      {children}
    </Provider>,
    </div>
  )
}

export default Provid
