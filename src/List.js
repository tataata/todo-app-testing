
const List = ({ tasks }) => {
  return (
    <div className="List" >
      <h2>These are your tasks</h2>
      {(tasks.length > 0) ? (
        tasks.map((item, index) => <li id={item.id} key={index} className="todo-item">{item.task}</li>)
      ) : (
        <p>No tasks</p>
      )
      }
    </div>
  );
}

export default List;
