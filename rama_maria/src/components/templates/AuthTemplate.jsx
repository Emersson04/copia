import React from 'react'

export const AuthTemplate = ({ children }) => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        {children}
    </div>
  )
}
