import { createContext } from "react";

export const GlobalContext = createContext({
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
});

export const ContextProvider = () => {
  <div></div>;
};
