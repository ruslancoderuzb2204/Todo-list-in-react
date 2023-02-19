import "./App.css";
import Todo from "./components/todo";
import React from "react";
import Todolist from "./components/todolist";

function App() {
  const [input, setinput] = React.useState("");
  const [todos, settodos] = React.useState([]);
  const [editTodo, seteditTodo] = React.useState(null);

  return (
    <div className="container d-none">
      <div className="wrapper">
      <div>
        <Todo
          input={input}
          setinput={setinput}
          todos={todos}
          settodos={settodos}
          editTodo={editTodo}
          seteditTodo={seteditTodo}
        />
      </div>
      <div>
        <Todolist todos={todos} settodos={settodos} seteditTodo={seteditTodo} />
      </div>
      </div>
    </div>
  );
}

export default App;
