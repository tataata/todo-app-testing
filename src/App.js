import { useState } from 'react';
import './App.css';
import List from './List'
import AddItem from './AddItem';

function App() {
  const [ tasks, setTasks ] = useState([])

  const addNewTask = (text) => {
    setTasks([...tasks, { task: text, id: (tasks.length + 1) }])
  }

  const deleteTask = (id) => {
    let remainingTasks = tasks.filter(item => item.id !== id)
    setTasks(remainingTasks)
  }

  const updateTask = (updatedTask) => {
    let updatedList = tasks.map(item => item.id === updatedTask.id ? {...item, task: updatedTask.task } : item)
    setTasks(updatedList)
  }

  return (
    <div className="App">
      <h1>My To Do List</h1>
      {/* Pass the new props */}
      <AddItem addToList = {addNewTask} />
      <List tasks = {tasks} deleteItem = {deleteTask} updateItem = {updateTask}  />
    </div>
  );
}

export default App;