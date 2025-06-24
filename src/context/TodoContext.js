import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos : [
        
        { id: 1, todo: "Learn React", completed: false },
    ]
})

export const useTodo  = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider