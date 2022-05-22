import React, {useEffect, useState} from 'react';

import style from './style.module.css';
import {RepoType, UserDataType} from '../types';
import {SmallUserIcon} from '../../Icons/SmallUserIcon';
import {UsersGroupIcon} from "../../Icons/UsersGroupIcon";
import {RepoContainer} from "../RepoContainer";
import ReactPaginate from "react-paginate";

type UserPageType = {
    userData: UserDataType;
}


export const UserPage = ({userData}: UserPageType) => {

    const [currentItems, setCurrentItems] = useState<Array<RepoType>>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage=4;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(userData.repos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(userData.repos.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, userData]);

    const handlePageClick = (event:any) => {
        const newOffset = (event.selected * itemsPerPage) % userData.repos.length;
        setItemOffset(newOffset);
    };


    return (
        <div className={style.userPageContainer}>
            <div className={style.userDataContainer}>
                <div><img src={userData.avatar} alt='avatar' className={style.userAvatar}/></div>
                <div className={style.userName}>{userData.name}</div>
                <div className={style.userLogo}>< a href={userData.url} target='_blank' rel='noreferrer'
                >{userData.login}</a>
                </div>
                <div className={style.userFollows}>
                    <div><UsersGroupIcon/> {userData.followers} followers</div>
                    <div className={style.followers}><SmallUserIcon/> {userData.following} following </div>
                </div>
            </div>
            <div>
                <div className={style.repoTitle}>Repositories ({userData.repos.length})</div>
                <div>
                    <div>
                        {currentItems.map(item=><RepoContainer name={item.name} description={item.description}/>)}

                            <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={1}
                            pageCount={pageCount}
                            previousLabel="<"
                            containerClassName={style.pagination}
                            pageClassName={style.pageNum}
                            previousLinkClassName={style.nextPage}
                            nextLinkClassName={style.nextPage}
                            activeLinkClassName={style.active}
                            />
                    </div>

                </div>
            </div>
        </div>
    );
}