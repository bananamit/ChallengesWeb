//Challenge 9
import { TodoReducer } from "./TodoReducer";

export const useReducer = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  const addTodo = (todoText) => {
    dispatch({ type: "ADD_TODO", payload: todoText });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
};

