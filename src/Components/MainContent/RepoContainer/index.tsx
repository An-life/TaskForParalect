import React from 'react';

import style from './style.module.css';
import {RepoType} from "../../../types/common";

export const RepoContainer = ({name, description}: RepoType) => {

    return (
        <div className={style.repoContainer}>
            <div className={style.title}>{name}</div>
            {description && <div className={style.description}>{description}</div>}
        </div>
    )
}
