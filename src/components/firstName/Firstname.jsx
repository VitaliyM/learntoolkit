import React from 'react';
import './firstname.css';
import { useSelector } from 'react-redux';


function Firstname() {

    const name = useSelector( (state) => {state.user.firstName} )

    return (
        <div className='showFirstname'>
            <h2>First name:</h2>
            <span className='firstName'>{name}</span>
        </div>
    )
}

export default Firstname