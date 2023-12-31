import axios from "axios";
import { createContext, useContext, useState,useReducer,useEffect } from "react";

export const initialState = {
  theme:false,
  data: {},
  favs: JSON.parse(localStorage.getItem('favs')) || []
}
export const ContextGlobal = createContext(undefined);


const dentistReducer = (state, action)=>{
   switch (action.type) {
    case 'GET_DATA':
      return{...state, data: action.payload}
    case 'ADD_favs':
      return{...state, favs:[...state.favs, action.payload]}
      case 'CHANGE_THEME':
      return{...state, theme: state.theme}
    default:
      return state;
   }

}
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer( dentistReducer, initialState);

   const URL = 'https://jsonplaceholder.typicode.com/users'
// Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
   useEffect(() =>{
      axios(URL).then(res => 
      dispatch({ type: 'GET_DATA', payload:res.data}))
   },[])

   useEffect(()=>{
       localStorage.setItem('favs' , JSON.stringify(state.favs))
   },[state.favs])
  
 console.log(URL)
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

//  https://github.com/camilita19/ParcialFinalFrontIII.git
