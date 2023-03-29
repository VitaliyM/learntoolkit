import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleCompletedTodo, removeTodo } from '../../features/todolist/todoSlice';
import './todolist.css';


const Todolist = () => {

    const dispatch = useDispatch();

    const [todoValue, setTodoValue] = useState(' ');
    const addTodoHandler = () => {
        const todo = {
            id: new Date(),
            text: todoValue,
            completed: false,
        }
        dispatch(addTodo(todo));
        setTodoValue('');
    };

    const todos = useSelector((state) => state.todo.todos);


    const toggleTodoHandler = (id) => {
        dispatch(toggleCompletedTodo(id));
        let crossText = document.getElementById(id);
        crossText.classList.contains('todoTextCompleted') ?
            crossText.classList.remove('todoTextCompleted') :
            crossText.classList.add('todoTextCompleted');
    }

    const removeTodoHandler = (id) => {
        dispatch(removeTodo(id));
    }

    return (
        <div className='todoBlock'>
            <h1 className='todoListHeader'>Toollkit Todo List</h1>
            <div className='todoInputBlock'>
                <input type="text"
                    value={todoValue}
                    placeholder='Type something...'
                    className='todoInput'
                    onChange={(e) => setTodoValue(e.target.value)}
                />
                <button type="submit"
                    className='todoSubmit'
                    onClick={() => { addTodoHandler() }}
                >Submit</button>
            </div>

            {
                todos?.map((todo) => (
                    <div className='todoListBlock' key={todo.id}>
                        <button
                            className='todoComplete'
                            onClick={() => toggleTodoHandler(todo.id)}
                        >Complete</button>

                        <div className='todoText' id={todo.id}>{todo.text}</div>

                        <button
                            className='todoDelete'
                            onClick={() => removeTodoHandler(todo.id)}
                        >Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Todolist