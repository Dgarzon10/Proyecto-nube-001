import { useState } from "react";
import ButtonDone from "./buttons/ButtonDone";
import ButtonRemove from "./buttons/ButtonRemove";
useState;
const Tasks = ({ children, done = false, id }) => {
  function taskDone(id) {}

  function removeTask(id) {}
  const onClick = "";
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
        <ButtonDone done={done} onClick={taskDone} />
        <ButtonRemove onClick={removeTask} />
      </div>
    </>
  );
};

export default Tasks;
