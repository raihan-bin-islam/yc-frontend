import React from 'react';
import styles from './aboutTrustees.module.scss';

const AboutTrustees = () => {
    const { aboutTrusteesContainer, aboutTrusteesHeader } = styles
    return (
        <section className={aboutTrusteesContainer}>
            <div className='container-layout'>
                <div className={aboutTrusteesHeader}>
                    <h2>board of trustees</h2>
                </div>
            </div>
        </section>
    );
};

export default AboutTrustees;