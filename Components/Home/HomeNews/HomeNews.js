import React from 'react';
import Highlight from '../../Shared/Highlight/Highlight';
import NewsCard from '../../Shared/NewsCard/NewsCard';
import styles from './homenews.module.scss'

const HomeNews = () => {
    const { homeNewsContainer, homeNewsContainerBody } = styles
    return (
        <section className={homeNewsContainer}>
            <div className={`container-layout ${homeNewsContainerBody}`}>
                <main>
                    <NewsCard/>
                    <NewsCard/>
                </main>
                <aside>
                    <Highlight/>
                    <Highlight/>
                    <Highlight/>
                    <Highlight/>
                    <Highlight/>
                </aside>
            </div>
        </section>
    );
};

export default HomeNews;