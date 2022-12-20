import { useContext } from "react";
import { ThemeContext } from "../components/context/ThemeContext";

export const useTheme =()=>{
    const context =useContext(ThemeContext)
  if(context===undefined){ //we did it if we use outside theme provider then it will throw an error 
    throw new Error('useTheme() must be used inside a ThemeProvider')
  }
  return context ;
};