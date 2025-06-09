import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContext } from './Context/ThemeProvider';

function App() {
  const {Theme, changeTheme} = useContext(ThemeContext);
  return (
    <div className={`app ${Theme}`}>
      <button onClick={changeTheme}>Toggle Me!</button>
    </div>
  )
}
export default App
