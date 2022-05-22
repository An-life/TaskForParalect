import React, {useEffect, useState} from "react";

import {baseURL} from "./constants";
import {ReposType, UserDataType, UserType} from "../../types/common";

export const useGitHubData = (userName: string) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [userData, setUserData] = useState<UserDataType | null>(null);

    useEffect(() => {
        if (userName) {
            let user: UserType;
            fetch(`${baseURL}${userName}`)
                .then(res => res.json())
                .then(
                    ({
                         avatar_url,
                         name,
                         login,
                         html_url,
                         followers,
                         following
                     }) => {
                        user = {
                            avatar: avatar_url,
                            name,
                            login,
                            url: html_url,
                            followers,
                            following,
                        }

                        return login;
                    }).then(result => fetch(`${baseURL}${result}/repos`)).then(res => res.json())
                .then(
                    (result: ReposType) => {
                        setIsLoaded(true);
                        if (user.login === undefined) {
                            setIsLoaded(true);
                            setUserData(null);
                        } else {
                            setUserData({
                                ...user,
                                repos: result.map(el => ({name: el.name, description: el.description}))
                            })
                        }
                        ;
                    },
                    (error) => {
                        setIsLoaded(true);
                        setUserData(null);
                        console.log(error);
                    }
                )
        }

    }, [userName]);

    return {isLoaded, userData}
}
