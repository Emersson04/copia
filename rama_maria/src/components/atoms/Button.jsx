import React from 'react'

export const Button = ({ children, onClick}) => {
  return (
    <>
    <button
    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rouded w-full'
    onClick={onClick}>
    {children}</button>
    </>
  )
}
