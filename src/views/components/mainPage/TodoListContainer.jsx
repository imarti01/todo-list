import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { RiSendPlaneFill } from "react-icons/ri";
import { ModalAddTodo } from "./ModalAddTodo";
import { useAuthContext } from "../../../hooks";

export const TodoListContainer = () => {
  const { authState } = useAuthContext();
  const { todos } = authState;

  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);

  const showInputToAddTodo = () => {
    setIsOpenModalAdd(true);
  };

  return (
    <div className="flex flex-col items-center justify-start">
      <h2 className="text-2xl py-1">TO-DO LIST</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <button
        className="absolute bottom-4 right-4 flex items-center justify-center w-9 h-9 text-3xl z-1 rounded-full bg-name text-white"
        onClick={showInputToAddTodo}
      >
        +
      </button>
      {isOpenModalAdd && <ModalAddTodo setIsOpenModalAdd={setIsOpenModalAdd} />}
    </div>
  );
};
