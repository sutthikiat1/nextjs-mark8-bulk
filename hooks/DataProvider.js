import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  let [file, setFile] = useState({ name: "", data: [] });
  return (
    <Context.Provider value={{ file, setFile }}>{children}</Context.Provider>
  );
};
