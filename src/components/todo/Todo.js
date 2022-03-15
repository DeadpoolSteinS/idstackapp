import './Todo.css';
import { useState } from 'react';
import TodoList from "../todo-list/TodoList";
import TodoCreate from '../todo-create/TodoCreate';

const Todo = () => {
    const [getTodos, setTodos] = useState([
        {id: 1, title: 'Learn React JS'},
        {id: 2, title: 'Competitive Programming'},
        {id: 3, title: 'Play Apex Legend Mobile'}
    ])

    const eventCreateTodo = (todo) => {
        // merge old and new data
        setTodos(getTodos.concat(todo));
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList dataTodos={getTodos}/>
        </div>
    )
}

export default Todo;