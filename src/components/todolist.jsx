import "./todolist.css"
const Todolist = ({ todos, settodos, seteditTodo, editTodo }) => {
  const delUser = ({ id }) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };
  const editUser = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    seteditTodo(findTodo);
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="todo-list" key={todo.id}>
          <input
            type="text"
            className="list"
            value={todo.title}
            onChange={(e) => e.preventDefault()}
          />
          <button className="del-ed" onClick={() => delUser(todo)}>🪣</button>
          <button className="del-ed" onClick={() => editUser(todo)}>✏️</button>
        </li>
      ))}
    </div>
  );
};

export default Todolist;
