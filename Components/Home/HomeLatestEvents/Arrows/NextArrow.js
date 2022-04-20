import React from 'react';
import nextIcon from '../../../../public/arrow_right.svg'
import styles from '../homelatestevents.module.scss'

const NextArrow = ({onClick}) => {
    return (
        <button type="button" className={styles.card_next_arrow} onClick={onClick}><img src={nextIcon.src} /></button>
    );
};

export default NextArrow;