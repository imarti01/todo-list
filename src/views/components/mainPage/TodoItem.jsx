import { useRef, useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { useAuthContext } from "../../../hooks";

export const TodoItem = ({ todo }) => {
  const { editTodo, deleteTodo } = useAuthContext();

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(todo);

  const inputToEdit = useRef(null);

  const handleIsChecked = () => {
    editTodo({ ...currentTodo, isChecked: !currentTodo.isChecked });
    setCurrentTodo({ ...currentTodo, isChecked: !currentTodo.isChecked });
  };

  const handleIsEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputToEdit.current.focus();
    }, 1);
  };

  const handleEditTodo = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  };

  const saveChangesEdit = () => {
    setIsEditing(false);
    editTodo(currentTodo);
  };

  const handleDeleteTodo = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        deleteTodo(todo);
      }
    });
  };

  return (
    <li className="flex">
      <input
        type="checkbox"
        checked={currentTodo.isChecked}
        onChange={handleIsChecked}
      />
      <input
        type="text"
        value={currentTodo.text}
        className={currentTodo.isChecked ? "line-through" : ""}
        ref={inputToEdit}
        disabled={!isEditing}
        onChange={handleEditTodo}
        onBlur={saveChangesEdit}
        onKeyDown={(e) => e.key === "Enter" && saveChangesEdit()}
      />
      <FiEdit2 onClick={handleIsEditing} />
      <FiTrash2 onClick={handleDeleteTodo} />
    </li>
  );
};
