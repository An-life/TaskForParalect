import React from 'react';

import style from './style.module.css';
import {HeaderPropsType} from './types';
import GitHubIcon from './../Icons/GitHubIcon';
import {SearchInput} from './SearchInput';

export const Header=({userNameHandler}:HeaderPropsType)=>{
    return(
<div className={style.headerContainer}>
    <div className={style.gitHubLogo}><GitHubIcon/></div>
    <SearchInput userNameHandler={userNameHandler}/>
</div>
    )
}