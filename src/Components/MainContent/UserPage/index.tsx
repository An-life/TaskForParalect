import React from 'react';

import style from './style.module.css';
import {SmallUserIcon} from '../../Icons/SmallUserIcon';
import {UsersGroupIcon} from "../../Icons/UsersGroupIcon";
import {UserPageType} from "./types";
import {ReposPage} from "../ReposPage";

export const UserPage = ({userData}: UserPageType) => {

    return (
        <div className={style.userPageContainer}>
            <div className={style.userDataContainer}>
                <div><img src={userData.avatar} alt='avatar' className={style.userAvatar}/></div>
                <div className={style.userName}>{userData.name}</div>
                <div className={style.userLogo}>< a href={userData.url} className={style.userLink} target='_blank'
                                                    rel='noreferrer'
                >{userData.login}</a>
                </div>
                <div className={style.userFollows}>
                    <div><UsersGroupIcon/> {userData.followers} followers</div>
                    <div className={style.followers}><SmallUserIcon/> {userData.following} following</div>
                </div>
            </div>
            <div className={style.repos}>
                <ReposPage repos={userData.repos}/>
            </div>
        </div>
    );
}
