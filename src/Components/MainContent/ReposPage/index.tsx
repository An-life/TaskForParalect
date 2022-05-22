import React, {useEffect, useState} from "react";

import {RepoType} from "../../../types/common";
import style from "./style.module.css";
import {StartPage} from "../StartPage";
import {startPageOptions} from "../constants";
import {RepoContainer} from "../RepoContainer";
import ReactPaginate from "react-paginate";
import {ReposPagePropsType} from "./types";

export const ReposPage = ({repos}: ReposPagePropsType) => {

    const [currentItems, setCurrentItems] = useState<Array<RepoType>>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(repos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(repos.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, repos]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % repos.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
            {repos.length ? <div>
                    <div className={style.repoTitle}>Repositories ({repos.length})</div>
                    <div>
                        {currentItems.map(item => <RepoContainer name={item.name} description={item.description}/>)}
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
                            activeLinkClassName={style.active}/>
                    </div>
                </div> :
                <div className={style.emptyRepos}><StartPage text={startPageOptions.noRepos.text}>{startPageOptions.noRepos.icon}</StartPage></div>
            }
        </div>
    );
}