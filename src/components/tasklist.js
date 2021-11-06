import { useContext } from "react";
import { GlobalContext } from "../context/global-context";

export function TaskList() {
  // Podria sacar los datos en el return pero puedo utilizar destructuracion para sacar los datos del objeto que me trae context.
  const { tasks, deleteTask } = useContext(GlobalContext);

  return (
    <div className="flex justify-center">
      <button onClick={() => deleteTask()}> delete All </button>
      <div className="w-6/12" />
      {tasks.map((task) => (
        <div
          className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between"
          key={task.id}
        >
          <div>
            <h1>{task.title}</h1>
            <h5>{task.id}</h5>
          </div>
          <div>
            <button>edit</button>
            <button>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
