import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos : [ //in the form of an array
        
        { id: 1, todo: "Learn React", completed: false },
        
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {}

})

export const useTodo  = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider