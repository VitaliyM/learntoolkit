import React from 'react';
import './users.css';

import { useDispatch } from 'react-redux';
import { setFirstname, setLastname } from '../../features/user/userSlice';

import Firstname from '../firstName/Firstname';
import Lastname from '../lastName/Lastname';


function Users() {

    const dispatch = useDispatch(); //Вызывает экшины, чтобы они отработали и изменили состояние

    return (
        <div className='usersBlock'>
            <h1>Redux Toolkit State Change</h1>
            <input type="text"
                placeholder='First name'
                className='usersFirstname'
                onChange={(e) => { dispatch(setFirstname(e.target.value)) }}
            />
            <input type="text"
                placeholder='Last name'
                className='usersLastname'
                onChange={(e) => { dispatch(setLastname(e.target.value)) }}
            />

            <div className='showUsersName'>

                <Firstname />
                <Lastname />

            </div>
        </div>
    )
}

export default Users