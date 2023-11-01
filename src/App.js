import { useState } from 'react';
import './App.css';
import List from './List'
import AddItem from './AddItem';

function App() {
  const [ tasks, setTasks ] = useState([])
  // add id for removal of the items
  const addNewTask = (text) => {
    setTasks([...tasks, { task: text, id: (tasks.length + 1)  }])
  }
  const deleteTask = (id) => {
    let remainingTasks = tasks.filter(item => item.id !== id)
    setTasks(remainingTasks)
  }
  return (
    <div className="App">
      <h1>My To Do List</h1>
      <AddItem addToList = {addNewTask} />
      {/* Pass new props */}
      <List tasks = {tasks} removeFromList = {deleteTask}  />
    </div>
  );
}

export default App;