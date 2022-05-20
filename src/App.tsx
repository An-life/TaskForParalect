import React from 'react';

import style from './App.module.css';
import {Header} from './Components/Header/'

function App() {
  return (
    <div className={style.appContainer}>
      <Header/>
    </div>
  );
}

export default App;
