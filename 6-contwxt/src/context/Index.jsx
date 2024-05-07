import React, { createContext, useContext, useState } from 'react'

const CreateContext=createContext()

export const ContextProvider = ({children}) => {
    const [data, setData] = useState([]);


  return (
   <CreateContext.Provider value={{data,setData}}>{children}</CreateContext.Provider>
  )

}

export const useList=()=>useContext(CreateContext)