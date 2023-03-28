import React from 'react';
import { useSelector } from 'react-redux';
import './lastname.css';


const Lastname = () => {

    const lastname = useSelector( (state)=>state.user.lastName );

    return (
        <div className='showLastname'>
            <h2>Last name:</h2>
            <span className='lastName'>{lastname}</span>
        </div>
    )
}

export default Lastname