import React, { useEffect, useState } from 'react';

import style from './style.module.css';
import { ReposType, UserDataType, UserType } from './types';
import {StartPage} from './StartPage';
import SearchIcon from './../Icons/SearchIcon';
import UserIcon from './../Icons/UserIcon';
import { RepoContainer } from './RepoContainer';
import EmptyIcon from '../Icons/EmptyIcon';


export const MainContent=({userName}:{userName:string|null})=> {

  const [isLoaded, setIsLoaded] = useState(false);
  const [userData, setUserData] = useState<UserDataType|null>(null);

  useEffect(() => {
    let user:UserType;
    fetch( `https://api.github.com/users/${userName}`)
      .then(res => res.json())
      .then(
        (result) => {
          user={avatar:result.avatar_url,
             name:result.name, 
             login: result.login,
             url:result.url,
             followers:result.followers,
             following:result.following }  
         
          return result.login
        }).then(result=> fetch ( `https://api.github.com/users/${result}/repos`)).then(res => res.json())
        .then(
          (result:ReposType) => {
            setIsLoaded(true);
            setUserData({...user, repos: result.map(el=>({name: el.name, description: el.description}))});

          },
        (error) => {
          setIsLoaded(true);
          setUserData(null);
          console.log(error);
        }
      )
  }, [userName]);

  console.log(userData);
  console.log(isLoaded);

  let startPageOptions=[
    {icon:<SearchIcon iconSize={64.17}/>, text:'Start with searching a GitHub user'},
    {icon:<UserIcon />, text:'User not found'},
    {icon:<EmptyIcon/>, text:'Repository list is empty'}

  ];

  return (
    <div className={style.contentContainer}>
     {!userName?
   <StartPage text={startPageOptions[2].text}>{startPageOptions[2].icon}</StartPage>:<RepoContainer name={userData?.repos[0].name} description={userData?.repos[0].description}/>
     }
    </div>
  );
}
