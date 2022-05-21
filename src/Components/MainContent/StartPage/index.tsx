import React from 'react';

import style from './style.module.css';
import {StartPagePropsType} from './types';

export const StartPage=({text,children}:StartPagePropsType)=> {
  return (
    <div className={style.contentContainer}>
      <div className={style.searchIcon}>{children}</div>
      <p>{text}</p>
    </div>
  );
}