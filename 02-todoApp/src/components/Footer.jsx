import React from 'react'
import ToDo  from './ToDo';

const Footer = ({todos ,setTodos}) => {
  return (
    <ul>
    {todos.map((elem, i) => {
      return <ToDo key={i} todo={elem} todos={todos} setTodos={setTodos}/>;
    })}
  </ul>
  )
}               

export default Footer