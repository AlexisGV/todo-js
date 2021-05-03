import './styles.css';

import { crearTodoHtml } from './js/componentes';
import { Todo, TodoList } from './classes';

export const todoList = new TodoList();
todoList.todos.forEach( crearTodoHtml );
// todoList.todos.forEach( todo => crearTodoHtml(todo) );

// console.log( todoList );
// console.log( todoList.todos[0].imprimirClase() );