import React from 'react';
import './todolist.css';


const Todolist = () => {
  return (
    <div className='todoBlock'>
        <h1 className='todoListHeader'>Toollkit Todo List</h1>
        <div className='todoInputBlock'>
            <input type="text" placeholder='Type something...' className='todoInput'/>
            <button type="submit" className='todoSubmit'>Submit</button>
        </div>
        <div className='todoListBlock'>
            <button className='todoComplete'>Complete</button>
            <div className='todoText'>Todo text</div>
            <button className='todoDelete'>Delete</button>
        </div>
    </div>
  )
}

export default Todolist