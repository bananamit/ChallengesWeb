import { useReducer } from 'react';
import { TodoReducer } from './TodoReducer';

export const useTodo = (initialState = []) => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const addTodo = (todo) => dispatch({ type: 'ADD_TODO', payload: todo });
  const deleteTodo = (id) => dispatch({ type: 'DELETE_TODO', payload: id });
  const toggleTodo = (id) => dispatch({ type: 'TOGGLE_TODO', payload: id });

  const countTodos = () => todos.length;
  const countPendingTodos = () => todos.filter(todo => !todo.done).length;

  return { todos, addTodo, deleteTodo, toggleTodo, countTodos, countPendingTodos };
};