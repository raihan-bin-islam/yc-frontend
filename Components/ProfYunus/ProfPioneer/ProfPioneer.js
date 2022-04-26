import React from 'react';
import styles from './profpioneer.module.scss'
import pioneerImg from '../../../public/assets/images/prof_yunus/pioneer.jpg'

const ProfPioneer = () => {
    //styles
    const {pioneerSection, pioneerContainer, pioneerLeft, pioneerRight} = styles

    return (
        <section className={pioneerSection}>
            <div className='container-layout'>
                <div className={pioneerContainer}>
                    <div className={pioneerLeft}>
                        <div>
                            <h3>Pioneering<br/>the ground-breaking <br/>concept of</h3>
                            <h2>Social Business</h2>
                            <p>Nobel Peace Laureate Professor Muhammad Yunus defined the ground-breaking concept of Social Business. The journey started when he founded the Grameen Bank Project in the village of Jobra, Bangladesh, in 1976.</p>
                        </div>
                    </div>
                    <div className={pioneerRight}>
                        <img src={pioneerImg.src} alt='pioneer'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfPioneer;