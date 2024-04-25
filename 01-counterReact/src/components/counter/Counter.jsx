import { useState } from 'react'

import React from 'react'

const Counter = () => {
  let [count, setCount] = useState(0)

  return (
    <div>
        <button onClick={()=>{setCount(--count)}}>DEC</button>
        <div>{count}</div>
        <button onClick={()=>{setCount(++count)}}>INC</button>
    </div>
  )
}

export default Counter