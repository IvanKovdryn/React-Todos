import React, { useState } from "react";
import TodoItem from "./Items/TodoItem";
import data from "./Items/Data";
import CreateTodo from "./Items/CreateTodo";

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };
  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t.id !== id));
  };

  return (
    <div className="mx-auto flex flex-col px-5 md:px-10 md:py-5 py-2.5">
      <h1 className="text-2xl font-bold text-center mt-5 mb-10">Todos</h1>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeTodo={changeTodo}
            removeTodo={removeTodo}
            isCompleted={todo.isCompleted}
          />
        ))}
      </div>
      <CreateTodo setTodos={setTodos} />
    </div>
  );
};
export default Home;
