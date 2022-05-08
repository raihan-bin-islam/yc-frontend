import React from 'react';
import HomeVideoSlide from '../../Home/HomeVideoSlide/HomeVideoSlide';
import styles from './profvideoslider.module.scss';

const ProfVideoSlider = () => {
    const { profVideoContainer, profVideoHeader } = styles
    return (
        <section className={profVideoContainer}>
            <div className={profVideoHeader}>
                <h2>Speeches</h2>
            </div>
            <HomeVideoSlide />
        </section>
    );
};

export default ProfVideoSlider;