import { useState } from 'react'
import Fetch from './Components/Fetch'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Fetch/>
        </div>
    </>
  )
}

export default App
