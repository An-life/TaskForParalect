import React from 'react';

import style from './style.module.css';
import {StartPage} from './StartPage';
import {UserPage} from './UserPage';
import {useGitHubData} from "../../hooks/useGitHubData";
import {startPageOptions} from "./constants";
import {MainContentPropsType} from "./types";

export const MainContent = ({userName}: MainContentPropsType) => {

    const {isLoaded, userData} = useGitHubData(userName);

    return (
        <div className={style.contentContainer}>
            {!userData && <div className={style.startPageWrapper}>
                {!userName &&
                <StartPage text={startPageOptions.startPage.text}>{startPageOptions.startPage.icon}</StartPage>}
                {userName && !userData && isLoaded &&
                <StartPage text={startPageOptions.userNotFound.text}>{startPageOptions.userNotFound.icon}</StartPage>}
                {userName && !isLoaded && <div className={style.loader}></div>}
            </div>}
            {userData && isLoaded && <UserPage userData={userData}/>}
        </div>
    )
}
