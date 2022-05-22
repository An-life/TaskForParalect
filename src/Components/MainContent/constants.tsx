import React from "react";

import {SearchIcon} from "../Icons/SearchIcon";
import {UserIcon} from "../Icons/UserIcon";


const searchIconSize=64.17;

export const startPageOptions = {
    startPage: {icon: <SearchIcon iconSize={searchIconSize}/>, text: 'Start with searching a GitHub user'},
    userNotFound: {icon: <UserIcon/>, text: 'User not found'},
};