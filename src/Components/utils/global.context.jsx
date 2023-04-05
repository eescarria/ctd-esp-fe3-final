import { createContext, useContext, useEffect, useReducer } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

const initialStateFav = JSON.parse(localStorage.getItem('favs')) || []


export const apiReducer = (state, action) => {
  switch(action.type){
    case 'GET_DENTISTS':
      return action.payload
    default:
      throw new Error()
  }
}

export const themeReducer = (state, action) => {
  switch(action.type){
    case 'SWITCH_DARK':
      return "dark"
    case 'SWITCH_LIGHT':
      return ""
    default:
      throw new Error()
  }
}

export const favReducer = (state, action) =>{
  switch(action.type){
    case 'ADD_FAV':
        return [...state, action.payload]
    default:
        throw new Error()
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [dentList, apiDispatch] = useReducer(apiReducer, initialState.data)
  const [themeState, themeDispatch] = useReducer(themeReducer, initialState.theme)
  const [favState, favDispatch] = useReducer(favReducer, initialStateFav)
  

  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data => apiDispatch({type: 'GET_DENTISTS', payload: data}))
  },[])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState))
  }, [favState])


  return (
    <ContextGlobal.Provider value={{dentList, themeState, themeDispatch, favState, favDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
