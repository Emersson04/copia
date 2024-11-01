import React, { useEffect } from 'react'
import { AuthTemplate } from '../templates/AuthTemplate'
import { Login } from '../organisms/Login'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigate = useNavigate()
  useEffect(() => {

    let token = localStorage.getItem('token')
    if (token) {
      navigate("/")
  }
  })
  return (
    <AuthTemplate>
        <Login/>
    </AuthTemplate>
  )
}
