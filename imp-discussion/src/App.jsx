import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  const multipliedValue = value * 5

  const handleMultiply = () => {
    setValue(value + 1)
  }

  return (
    <div className="app-container">
      <h1 className="main-heading">
        Main Value: {value}
      </h1>
      <button className="multiply-button" onClick={handleMultiply}>
        Click to Increase Value
      </button>
      <h2 className="multiplied-heading">
        Multiplied Value: {multipliedValue}
      </h2>
    </div>
  )
}

export default App
