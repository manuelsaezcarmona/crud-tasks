import { createContext, useReducer } from "react";
import appReducer from "./Appreducer";

const initialState = {
  tasks: [
    {
      id: "1",
      title: "Gayolo",
      description: "Buscarlo en el diccionario",
      done: false,
    },
    {
      id: "2",
      title: "Anita",
      description: "La tentacion vive al lado",
      done: false,
    },
    {
      id: "3",
      title: "Asako",
      description: "Hay que ir a sako Pako",
      done: false,
    },
  ],
};
export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const deleteTask = (task) => {
    dispatch({ type: "DELETE_TASK" });
  };

  return (
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask }}>
      {children}
    </GlobalContext.Provider>
  );
};
