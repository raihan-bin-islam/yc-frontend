import React from 'react';
import styles from './homeheader.module.scss'

const HomeHeader = () => {
    const { headerHero } = styles
    return (
        <section className={headerHero}>
            <h1>Hello</h1>
        </section>
    );
};

export default HomeHeader;