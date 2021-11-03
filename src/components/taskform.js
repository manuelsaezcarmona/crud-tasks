import { useState } from "react";
export function TaskForm() {
  const [task, settask] = useState({
    title: "",
    description: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(task);
  }

  function handleChange(event) {
    settask({ ...task, [event.target.name]: event.target.value });
  }
  const template = (
    <div className="flex justify-center items-center h-3/4">
      <form action="" className="bg-900 p-10">
        <h2 className="mb-7 text-3x-1">Añadir Tarea</h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            placeholder="Escribe el titulo de la tarea"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            id=""
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <textarea
            name="description"
            rows="2"
            placeholder="Escribe la descripcion"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5"
          onClick={handleSubmit}
        >
          Crear Tareas
        </button>
      </form>
    </div>
  );

  return template;
}
