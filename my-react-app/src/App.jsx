import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BottomMainRight from './components/BottomMainRight'

function App() {
  const [name, setName] = useState("Tushar")

  return (
    <>
      <BottomMainRight name={name}/>
    </>
  )
}

export default App
