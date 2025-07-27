"use client"

import React from 'react'
import HomePage from './(pages)/home/page'
import LoginPage from './(pages)/login/page'
import { useAuth } from '@/context/AuthContext'

const Page = () => {

  const { isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn ? <HomePage /> : <LoginPage />}
    </div>
  )
}

export default Page
