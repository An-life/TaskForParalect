import React from 'react';

import style from './style.module.css';
import {UserDataType} from '../types';

type UserPageType = {
    userData: UserDataType;
}


export const UserPage = ({userData}: UserPageType) => {

    return (
        <div className={style.userPageContainer}>
            <div>
                <div><img src={userData.avatar} alt='avatar' className={style.userAvatar}/></div>
                <div className={style.userName}>{userData.name}</div>
                <div><a href={userData.url} target='_blank' rel='noreferrer'
                        className={style.userLogo}>{userData.login}</a></div>
                <div className={style.userFollows}>
                    <div>{userData.followers}</div>
                    <div>{userData.following}</div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}