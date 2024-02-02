import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
import CartContextProvider from './context/CartContextProvider'
import Navbar from './components/Navbar'
import Cart from './components/CartList'

function App() {
  

  return (
    <>
    <h1>Adopt a Cat!</h1>
    <CartContextProvider>
      <Navbar />
      <Cart/>
      <Cards />
      </CartContextProvider>
    </>
  )
}

export default App
