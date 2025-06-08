import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContext } from './Context/ThemeProvider';

function App() {
  const [count, setCount] = useState(0)
  const {Theme, changeTheme} = useContext(ThemeContext);
  return (
    <>
      <button onClick={changeTheme}>Toggle Me!</button>
    </>
  )
}

export default App
