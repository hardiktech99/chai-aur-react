import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profie'
import Login from './components/Login'


function App() {

  

  return (
    <UserContextProvider>
      <h1>React with Chai</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
