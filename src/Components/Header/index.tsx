import React from 'react';
import style from './style.module.css';
import GitHubIcon from './../Icons/GitHubIcon';
import SearchIcon from './../Icons/SearchIcon';

export const Header=()=>{
    return(
<div className={style.headerContainer}>
    <div className={style.gitHubLogo}><GitHubIcon/></div>
    <div className={style.inputContainer}>
        <div className={style.searchIcon}><SearchIcon/></div>
        <input className={style.inputFill} placeholder='Enter GitHub username'/>
    </div>
</div>
    )
}