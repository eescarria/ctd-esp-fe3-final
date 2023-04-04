import { createContext, useContext, useEffect, useState } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [dentList, setDentList] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data => setDentList(data))
  },[])

  return (
    <ContextGlobal.Provider value={{dentList, setDentList}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
