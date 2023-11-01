import Item from "./Item";

const List = ({ tasks, deleteItem, updateItem }) => {

  return (
    <div className="List" >
      <h2>These are your tasks</h2>
      {(tasks.length > 0) ? (  
      tasks.map(task =>  {
      return <Item key={task.id} task={task} deleteItem={deleteItem} updateItem={updateItem}/>})
      ) : (
        <p>No tasks</p>
      )
      }
    </div>
  );
}

export default List;