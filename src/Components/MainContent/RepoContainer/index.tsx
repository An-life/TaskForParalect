import React from 'react';
import { RepoType } from '../types';

import style from './style.module.css';

export const RepoContainer =({name, description}:RepoType)=> {
   
    return(
        <div className={style.repoContainer}>
        <div className={style.title}>{name}</div>
        <div className={style.description}>{description?description:null}</div>
     </div>
    ) 
}