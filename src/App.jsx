import { useRef } from 'react'
import './App.css'
import Form from './components/Form.jsx'
import ToDoList from './components/ToDoList'

function App() {
  const newTask = useRef();
  function addTask(event){
    event.preventDefault()
    console.log(`clicked, value = ${newTask.current.value}`)
  }
  return (
    <>
      <Form addTask={addTask} newTask={newTask} />
      <ToDoList />
    </>
  )
}

export default App