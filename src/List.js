import Item from "./Item";

const List = ({ tasks, deleteItem, updateItem }) => {

  return (
    <>
      <h2>These are your tasks</h2>
      <ul className="List" >
        
        {(tasks.length > 0) ? (  
        tasks.map(task =>  {
        return <Item key={task.id} task={task} deleteItem={deleteItem} updateItem={updateItem}/>})
        ) : (
          <li>No tasks</li>
        )
        }
      </ul>
    </>
    
  );
}

export default List;
