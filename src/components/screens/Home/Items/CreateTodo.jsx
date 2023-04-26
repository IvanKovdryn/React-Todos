import { useState } from "react";

const CreateTodo = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle("");
  };

  return (
    <input
      onChange={(e) => setTitle(e.target.value)}
      value={title}
      onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
      placeholder='Add a task (Click "Enter" to add)'
      className="bg-zinc-900 p-4 border-2 border-zinc-700 rounded-2xl mt-20 outline-none text-lg"
    />
  );
};
export default CreateTodo;
