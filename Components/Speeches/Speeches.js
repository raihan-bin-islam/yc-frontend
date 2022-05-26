import React, { useState } from 'react';
import useFetch from '../Hooks/useFetch';
import HeroBanner from '../Shared/HeroBanner/HeroBanner';
import Pagination from '../Shared/Pagination/Pagination';
import SliderCard from '../Shared/SliderCard/SliderCard';
import styles from './speeches.module.scss'

const Speeches = () => {
    // classnames
    const { speechContainer, speechContainerHeader, speechContainerBody, speechContainerBodyRow, speechContainerFooter } = styles

    // fetch data
    const [videoIsLoading, videoData] = useFetch("/yunus-speech")

    // paginate
    const [startOffset, setStartOffset] = useState(1);
    const [endOffset, setEndOffset] = useState(3);
    const contentsPerPage = 16;

    const handlePageClick = (e) => {
        const currentPage = e.selected;
        setStartOffset(contentsPerPage * currentPage + 1);
        setEndOffset(contentsPerPage * currentPage + contentsPerPage);
    }; 

    return (
        <section className={speechContainer}>
            <div className={speechContainerHeader}>
                <HeroBanner/>
                <div>
                    <h2>speeches</h2>
                    <h3>By Professor Muhammad Yunus</h3>
                </div>
            </div>
            <div className={speechContainerBody}>
                <div className={speechContainerBodyRow}>
                    {videoData && videoData.slice(0,4).map(vdo => 
                        <SliderCard
                            key={vdo.id}
                            image={vdo.thumb_image}
                            title={vdo.title}
                            type="video"
                            onClick={() => handleOnClick(vdo.youtube_link)}
                        />    
                    )}
                </div>
                <div className={speechContainerBodyRow}>
                    {videoData && videoData.slice(4,8).map(vdo => 
                        <SliderCard
                            key={vdo.id}
                            image={vdo.thumb_image}
                            title={vdo.title}
                            type="video"
                            onClick={() => handleOnClick(vdo.youtube_link)}
                        />    
                    )}
                </div>
                <div className={speechContainerBodyRow}>
                    {videoData && videoData.slice(8,12).map(vdo => 
                        <SliderCard
                            key={vdo.id}
                            image={vdo.thumb_image}
                            title={vdo.title}
                            type="video"
                            onClick={() => handleOnClick(vdo.youtube_link)}
                        />    
                    )}
                </div>
                <div className={speechContainerBodyRow}>
                    {videoData && videoData.slice(12,16).map(vdo => 
                        <SliderCard
                            key={vdo.id}
                            image={vdo.thumb_image}
                            title={vdo.title}
                            type="video"
                            onClick={() => handleOnClick(vdo.youtube_link)}
                        />    
                    )}
                </div>
            </div>
            <div className={speechContainerFooter}>
                <Pagination
                    length={videoData.length}
                    contentsPerPage={contentsPerPage}
                    onPageChange={handlePageClick}
                />
            </div>
        </section>
    );
};

export default Speeches;