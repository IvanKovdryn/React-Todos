import Check from "./Check";
import { BsDashCircleFill } from "react-icons/bs";

const TodoItem = ({ todo, changeTodo, isCompleted, removeTodo }) => {
  return (
    <div
      className={`flex items-center w-full justify-between gap-5 mb-3 bg-zinc-800 p-5 rounded-2xl ${
        isCompleted ? "line-through" : ""
      }`}
    >
      <button
        onClick={() => changeTodo(todo.id)}
        className="flex items-center gap-5"
      >
        <Check isCompleted={todo.isCompleted} />
        {todo.title}
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <BsDashCircleFill
          size={28}
          className="text-gray-600 transition-colors hover:text-red-500"
        />
      </button>
    </div>
  );
};
export default TodoItem;
