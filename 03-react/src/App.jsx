import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './components/Index'
import Reducer from './components/reducer/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index/>
      <Reducer/>
    </>
  )
}

export default App
