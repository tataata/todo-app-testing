const List = ({ tasks }) => {
  return (
    <>
      <h2>These are your tasks</h2>
      {(tasks.length > 0) ? (
        tasks.map((item, index) => <li id={item.id} key={index}>{item.task}</li>)
      ) : (
        <h2>No tasks</h2>
      )
      }
    </>
  );
};

export default List;
