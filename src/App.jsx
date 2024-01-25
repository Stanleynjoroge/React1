import { useState } from 'react'
import AddDo from './Components/AddDo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>My to do List</h1>
        <AddDo/>
        </div>
    </>
  )
}

export default App
