import React, { useEffect } from "react";
import "./todo.css"
const Todo = ({ input, setinput, todos, settodos, editTodo, seteditTodo }) => {
  const updateTodo = (title, id) => {
    const newTodo = todos.map((todo) => {
      return todo.id === id ? { title, id } : todo;
    });
    settodos(newTodo);
    seteditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setinput(editTodo.title);
    } else {
      setinput("");
    }
  }, [setinput, editTodo]);

  const onInputChange = (e) => {
    setinput(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      settodos([
        ...todos,
        { id: todos.length + 1, title: input, completed: false },
      ]);
      setinput("");
    } else {
      updateTodo(input, editTodo.id);
    }
    setinput("");
  };
  return (
    <form onSubmit={onFormSubmit} className="form">
      <input
        autoComplete="off"
        type="text"
        className="input"
        name="todo"
        value={input}
        required
        onChange={onInputChange}
        id="todo"
        placeholder="Enter your Todo..."
      />
      <button className="btn" type="sumbit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Todo;
