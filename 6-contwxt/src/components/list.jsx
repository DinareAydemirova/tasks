import React from 'react'
import { useList } from '../context/Index'

const List = () => {

    const {data}=useList()
// console.log(data);
  return (
    <ul>
{data.map((elem)=>{

return <li>
    {elem.title}
</li>
})}
    </ul>
  )
}

export default List