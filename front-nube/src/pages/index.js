import React, { useState } from "react";
import Tasks from "./components/Tasks";
import ButtonAdd from "./components/buttons/ButtonAdd";
import { useEffect } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch("http://localhost:3001/");
      if (response.ok) {
        setTasks(await response.json());
      }
    };
    getTasks().catch(console.error);
  }, [tasks]);

  return (
    <div className=" w-full flex justify-center font-sans">
      <div className="bg-white h-full rounded-lg shadow-lg p-6 m-4 w-full md:w-1/2 lg:w-2/5">
        <div className="">
          <h1 className="font-bold mb-5 text-4xl text-center">Todo List</h1>
          <div className="flex">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4"
              placeholder="Ex: Do the dishes..."
              onChange={(e) => setContent(e.target.value)}
            />
            <ButtonAdd content={content} />
            {/* <button
              className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-500"
              onClick={handleSubmit}
            >
              Add
            </button> */}
          </div>
        </div>
        <div className="flex flex-col overflow-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 mt-5 h-72">
          {tasks.map((task) => (
            <Tasks key={task.id} done={task.done} id={task.id}>
              {task.content}
            </Tasks>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
