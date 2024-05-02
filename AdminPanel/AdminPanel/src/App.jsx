import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Layout from './layout/Navbar/Index'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './pages/admin/Index'
import Edit from './pages/Edit/Index'
import Post from './pages/Post/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Admin />} />
          <Route path="Edit" element={<Edit />} />
          <Route path="Post" element={<Post />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
