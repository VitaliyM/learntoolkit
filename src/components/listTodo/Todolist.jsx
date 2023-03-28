import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../features/todolist/todoSlice';
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
    }

    const todos = useSelector((state) => state.todo.todos);

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
                        <button className='todoComplete'>Complete</button>
                        <div className='todoText'>{todo.text}</div>
                        <button className='todoDelete'>Delete</button>
                    </div>
                ))
            }
            <div className='todoListBlock'>
                <button className='todoComplete'>Complete</button>
                <div className='todoText'>Todo text</div>
                <button className='todoDelete'>Delete</button>
            </div>
        </div>
    )
}

export default Todolist