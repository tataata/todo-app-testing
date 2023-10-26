
const List = ({ tasks, removeFromList }) => {
  return (
    <div className="List" >
      <h2>These are your tasks</h2>
      {(tasks.length > 0) ? (
        tasks.map((item, index) => <li id={item.id} key={index}>{item.task} 
        <button onClick={() => {
          removeFromList(item.id)
        }}>Delete</button></li>)
      ) : (
        <p>No tasks</p>
      )
      }
    </div>
  );
}

export default List;
