'use client'


import React from 'react'
import { Provider } from 'react-redux'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Providers
