import { useState } from 'react';
import './App.css';
import List from './List'
import AddItem from './AddItem';

function App() {
  const [ tasks, setTasks ] = useState([])
  const addNewTask = (text) => {
    setTasks([...tasks, { task: text }])
  }
  return (
    <div className="App">
      <h1>My To Do List</h1>
      <AddItem addToList = {addNewTask} />
      <List tasks = {tasks} />
    </div>
  );
}

export default App;