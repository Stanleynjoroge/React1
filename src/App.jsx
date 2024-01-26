import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './Components/ProgressFillBar' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3 className="heading">Progress Bar</h3>
      <ProgressBar/>
    </>
  )
}

export default App
