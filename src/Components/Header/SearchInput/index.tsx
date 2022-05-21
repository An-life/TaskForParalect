import React,{ ChangeEvent, KeyboardEvent, useState }  from 'react';
import style from './style.module.css';
import {InputPropsType} from './types';

import SearchIcon from '../../Icons/SearchIcon';

export const SearchInput =({userNameHandler}:InputPropsType)=> {
     const [user, setUser]=useState('');

     let inputOnChangeHandler=(e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
      };

    let inputOnKeyPressHandler=(event:KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            userNameHandler(user);
          }
    };
    
    return(
         <div className={style.inputContainer}>
        <div className={style.searchIcon}> <SearchIcon iconSize={14}/> </div>
        <input className={style.inputFill} placeholder='Enter GitHub username' 
        onChange={inputOnChangeHandler}
        onKeyPress={inputOnKeyPressHandler}/>
     </div>
    ) 
}