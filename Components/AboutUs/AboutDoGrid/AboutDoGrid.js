import React from 'react';
import styles from './AboutDoGrid.module.scss'
import weDoData from '../../../static/whatWeDo.json'
import weDoPath from '../../../public/assets/images/about_us/wedopath.png'

const AboutDoGrid = () => {
    // style
    const { aboutDoContainer, aboutDoGrid, aboutDoGridFooter, aboutDoBody, aboutDoImgPath } = styles


    return (
        <section className={aboutDoContainer}>
            <div className={aboutDoImgPath}>
                <img src={weDoPath.src} alt='we-do-path'/>
            </div>
            <div className='container-layout'>
                <div className={aboutDoBody}>
                    {weDoData.map((weDo, index) => <div key={index} className={aboutDoGrid}>
                        <img src={weDo.image} alt={weDo.title} />
                        <div className={aboutDoGridFooter}>
                            <h3>{weDo.title}</h3>
                            <p>{weDo.paragraph}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    );
};

export default AboutDoGrid;
