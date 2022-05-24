import React, { useState } from 'react';
import Pagination from '../../Shared/Pagination/Pagination';
import styles from './orgGrid.module.scss'

const OrgGrid = ({subHeadline, mainHeadline, orgData, countPerPage}) => {
    // styles
    const {orgGridContainer, orgGridHeader, orgGridBody, orgGridBodyCard, paginateContainer} = styles 

    // paginate
    const [startOffset, setStartOffset] = useState(1);
    const [endOffset, setEndOffset] = useState(3);
    const contentsPerPage = countPerPage;

    const handlePageClick = (e) => {
        const currentPage = e.selected;
        setStartOffset(contentsPerPage * currentPage + 1);
        setEndOffset(contentsPerPage * currentPage + contentsPerPage);
    }; 

    return (
        <section className={orgGridContainer}>
            {/*profit section */}
            <div className={orgGridHeader}>
                <h3>{!subHeadline ? '' : subHeadline}</h3>
                <h2>{!mainHeadline ? '' : mainHeadline}</h2>
            </div>
            <div className={orgGridBody}>
                {orgData && orgData.map((org, index) => 
                    <div key={`org_${index}`} className={orgGridBodyCard}>
                        <img src={org.logo} alt="organizations"/>
                    </div>
                )}
            </div>
            <div className={paginateContainer}>
                <Pagination 
                    length={orgData.length} 
                    contentsPerPage={contentsPerPage} 
                    onPageChange={handlePageClick} 
                />
            </div>
        </section>
    );
};

export default OrgGrid;