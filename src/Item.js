import { useState } from "react";

const Item = ({ task, deleteItem, updateItem }) => {

  const [edit, setEdit] = useState(false)
  const [currentValue, setCurrentValue] = useState(false)

  return (
    <li className="Item" key={task.id} className="todo-item"> {edit ? (<input
      value={currentValue ? currentValue : task.task}
      onChange={
        (event) => {
          setCurrentValue(event.target.value)
        }}
    ></input>) : (<span> {task.task}</span>)
    }
      {edit ? (
        <button onClick={() => {
          // fix for no change:
          if(currentValue !== false) {
            updateItem({ ...task, task: currentValue })
          }
          
       
          setEdit(false)
        }}>Save</button>) :
        (<button onClick={() => {
          setEdit(true)
        }}>Edit</button>)}
      <button onClick={() => {
        deleteItem(task.id)
      }}>Delete</button></li>
  );
}

export default Item;
