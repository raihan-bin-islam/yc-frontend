import React from 'react';
import styles from './AboutDoGrid.module.scss'
import weDoData from '../../../static/whatWeDo.json'
import weDoPath from '../../../public/assets/images/about_us/wedopath.png'
import yunusPart from '../../../public/assets/images/about_us/yc_part.png'

const AboutDoGrid = () => {
    // style
    const { aboutDoContainer, aboutDoGrid, aboutDoGridFooter, aboutDoBody, aboutDoImgPath, aboutDoFooter } = styles
    
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
            <div className={aboutDoFooter}>
                <img src={yunusPart.src} alt='yunus-part'/>
            </div>
        </section>
    );
};

export default AboutDoGrid;
