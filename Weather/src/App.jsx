import { useState } from 'react'
import './App.css'
import Fetch from './componets/Fetch'

import SearchBar from './componets/SearchBar'

function App() {
  

  return (
    <div className='app'>
      <SearchBar/>
    <Fetch/>
    </div>
  )
}

export default App
