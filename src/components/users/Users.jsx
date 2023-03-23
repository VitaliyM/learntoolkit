import React from 'react';
import './users.css';

import { useDispatch } from 'react-redux';
import { setFirstname } from '../../features/user/userSlice';

import Firstname from '../firstName/Firstname';


function Users() {

    const dispatch = useDispatch(); //Вызывает экшины, чтобы они отработали и изменили состояние

    return (
        <div className='usersBlock'>
            <h1>Redux Toolkit State Change</h1>
            <input type="text"
                    placeholder='First name'
                    className='usersFirstname'
                    onChange={(e)=>{dispatch(setFirstname(e.target.value))}}
                    />
            <input type="text" placeholder='Second name' className='usersSecondname'/>

            <div className='showUsersName'>
                <Firstname />

                <div className='showLastname'>
                    <h2>Last name:</h2>
                    <span className='lastName'>Last name</span>
                </div>
                
            </div>
        </div>
    )
}

export default Users