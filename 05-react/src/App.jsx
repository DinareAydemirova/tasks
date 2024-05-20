import { useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import reducer from './reducer'

function App() {
  const [state, dispatch]=useReducer(reducer,{
   value:""
  })

  return (
    <>
   <div className='inp'>
   <input type="text" name="" id="" onChange={(e)=>{
    dispatch({
      type:"SetData",
value:e.target.value
    })
   }}/>
    <input type="text" name="" id="" />

    <input type="text" name="" id="" />

   </div>
    </>
  )
}

export default App
