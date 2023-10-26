import { useState } from "react"

const AddItem = ({ addToList }) => {
  const [text, setText] = useState('')
  return(
    <div className="AddItem">
      <p>Please enter your task:</p>
        <label htmlFor="todo">Task</label>
        <input 
        type="text" 
        id="todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button
        onClick={() => {
          addToList(text)
          setText('') 
        }
        }>Add</button>
    </div>
  )
}

export default AddItem