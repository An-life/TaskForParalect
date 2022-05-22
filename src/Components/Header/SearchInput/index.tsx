import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

import style from './style.module.css';
import {InputPropsType} from './types';
import {SearchIcon} from '../../Icons/SearchIcon';
import {searchIconSize} from "./constants";

export const SearchInput = ({userNameHandler}: InputPropsType) => {
    const [user, setUser] = useState('');

    const inputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    };

    const inputOnKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            userNameHandler(user);
            setUser('');
        }
    };

    return (
        <div className={style.inputContainer}>
            <div className={style.searchIcon}><SearchIcon iconSize={searchIconSize}/></div>
            <input className={style.inputFill} placeholder='Enter GitHub username'
                   onChange={inputOnChangeHandler}
                   onKeyPress={inputOnKeyPressHandler}/>
        </div>
    )
}
