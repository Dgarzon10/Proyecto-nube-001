import { useState } from "react";
import ButtonDone from "./buttons/ButtonDone";
import ButtonRemove from "./buttons/ButtonRemove";
useState;
const Tasks = ({ children, done = false, id }) => {
  const taskDone = async (id) => {
    const response = await fetch(`http://localhost:3001/${id}`, {
      method: "PUT",
    });
    if (response.ok) {
      const data = await response.json();
    }
  };

  const removeTask = async (id) => {
    const response = await fetch(`http://localhost:3001/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const data = await response.json();
    }
  };
  return (
    <>
      <div className="flex w-full border-t-2 border-green-100 py-2  items-center">
        <p
          className={`w-full ${
            done ? "line-through text-gray-400 font-thin" : ""
          }`}
        >
          {children}
        </p>
        <ButtonDone done={done} id={id} onClick={taskDone} />
        <ButtonRemove id={id} onClick={removeTask} />
      </div>
    </>
  );
};

export default Tasks;
