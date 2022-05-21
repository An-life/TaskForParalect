import React from 'react';

import style from './style.module.css';
import {StartPage} from './StartPage';
import SearchIcon from './../Icons/SearchIcon';
import UserIcon from './../Icons/UserIcon';



export const MainContent=({userName}:{userName:string|null})=> {
let startPageOptions=[
  {icon:<SearchIcon iconSize={64.17}/>,text:'Start with searching a GitHub user'},
  {icon:<UserIcon />,text:'User not found'},
]


  return (
    <div className={style.contentContainer}>
     {!userName?
   <StartPage text={startPageOptions[0].text}>{startPageOptions[0].icon}</StartPage>:null
     }
    </div>
  );
}
