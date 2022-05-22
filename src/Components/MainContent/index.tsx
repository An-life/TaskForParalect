import React, {useEffect, useState} from 'react';

import style from './style.module.css';
import {ReposType, UserDataType, UserType} from './types';
import {StartPage} from './StartPage';
import SearchIcon from './../Icons/SearchIcon';
import UserIcon from './../Icons/UserIcon';
import {UserPage} from './UserPage';

export const MainContent = ({userName}: { userName: string | null }) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [userData, setUserData] = useState<UserDataType | null>(null);

    useEffect(() => {
        let user: UserType;
        fetch(`https://api.github.com/users/${userName}`)
            .then(res => res.json())
            .then(
                (result) => {
                    user = {
                        avatar: result.avatar_url,
                        name: result.name,
                        login: result.login,
                        url: result.html_url,
                        followers: result.followers,
                        following: result.following
                    }

                    return result.login
                }).then(result => fetch(`https://api.github.com/users/${result}/repos`)).then(res => res.json())
            .then(
                (result: ReposType) => {
                    setIsLoaded(true);
                    setUserData({...user, repos: result.map(el => ({name: el.name, description: el.description}))});

                },
                (error) => {
                    setIsLoaded(true);
                    setUserData(null);
                    console.log(error);
                }
            )
    }, [userName]);

    let startPageOptions = [
        {icon: <SearchIcon iconSize={64.17}/>, text: 'Start with searching a GitHub user'},
        {icon: <UserIcon/>, text: 'User not found'},
    ];

    return (
        <div className={style.contentContainer}>
            {userName && userData !== null ? <UserPage userData={userData}/> :
                <StartPage text={startPageOptions[1].text}>{startPageOptions[1].icon}</StartPage>
            }
        </div>
    );
}
