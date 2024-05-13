import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './routes/routes'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter(routes);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
