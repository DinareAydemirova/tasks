import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import ToDo from './components/ToDo';


function App() {
  const [count, setCount] = useState(0)
  let [todos, setTodos] = useState([]);
  return (
    <>
     <Header todos={todos} setTodos={setTodos}/>
     <Footer todos={todos} setTodos={setTodos}/>
     <ToDo/>
    </>
  )
}

export default App
