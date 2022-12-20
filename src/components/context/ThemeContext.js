import { createContext } from "react";
import { useReducer } from "react";
export const ThemeContext = createContext()
//here we create custom theme provider and then import to index  
// and wrap app in ThemeProvider  
                    //themereducer=(prevstate,action)
const themereducer =(state,action) => {
    switch(action.type){
        case 'CHANGE_COLOR':
            return {...state,color:action.payload}
        case 'CHANGE_MODE':
            return {...state,mode:action.payload}
            default :
                return state   
    }
    
     
}

export function ThemeProvider({children}){
  //custom logic 
//   const [state, dispatch] = useReducer(themereducer, initialState) 
const [state, dispatch] = useReducer(themereducer, {
    color:'#58249c',
    mode:'dark'
})

const changecolor = (color) =>{
    dispatch({type : 'CHANGE_COLOR',payload : color})
}
const changemode = (mode) =>{
    dispatch({type : 'CHANGE_MODE',payload : mode})
}

return( 
                                //{color,changecolor}
    <ThemeContext.Provider value ={{...state,changecolor,changemode}}> 
    {children}
    </ThemeContext.Provider>
)

}


//React context API allows you to easily access data at different levels
//of the componenet tree ,without passing prop to every level 
