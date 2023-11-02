import { useState } from "react";

const Item = ({ task, deleteItem, updateItem }) => {

  const [edit, setEdit] = useState(false)
  const [currentValue, setCurrentValue] = useState(false)

  return (
    <li className="Item todo-item" key={task.id}> {edit ? (<input
      value={currentValue ? currentValue : task.task}
      onChange={
        (event) => {
          setCurrentValue(event.target.value)
        }}
    ></input>) : (task.task)
    }
      {edit ? (
        <button onClick={() => {
            updateItem({ ...task, task: currentValue })
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