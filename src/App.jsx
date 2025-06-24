import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    //todo is a string a single todo
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]); //spread operator to add a new todo to the existing todos REMEMBER THIS!
  };

  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id)); //we usually use filter in case of deletion
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
   const todos = JSON.parse(localStorage.getItem("todos"))
   if(todos && todos.length > 0){
    setTodos(todos)
   } 
  }, []);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updatedTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
