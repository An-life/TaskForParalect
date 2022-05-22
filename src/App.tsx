import React, {useState} from 'react';

import style from './App.module.css';
import {Header} from './Components/Header/';
import {MainContent} from './Components/MainContent/'

const App = () => {
    const [userName, setUserName] = useState<string>('');

    let userNameHandler = (user: string) => {
        setUserName(user)
    };

    return (
        <div className={style.appContainer}>
            <Header userNameHandler={userNameHandler}/>
            <MainContent userName={userName}/>
        </div>
    );
}

export default App;
