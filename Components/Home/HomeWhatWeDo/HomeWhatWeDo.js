import React from 'react';
import Heading from '../../Shared/Heading/Heading';
import WhatWeDoCard from '../../Shared/WhatWeDoCard/WhatWeDoCard';
import styles from './homewhatwedo.module.scss'
import whatWeDoData from '../../../static/whatWeDo.json'
import weDoBackSvg from '../../../public/assets/images/landing_page/we_do_back.svg'

const HomeWhatWeDo = () => {
    const { heroWhatWeDoContainer, whatWeDoMain, whatWeDoHeader, whatWeDoBody, backgroundPath } = styles

    return (
        <section className={heroWhatWeDoContainer}>
            <div className={backgroundPath}>
                <img src={weDoBackSvg.src} alt="what-we-do"/>
            </div>
            <div className={`container-layout ${whatWeDoMain}`}>
                <div className={whatWeDoHeader}>
                    <Heading text='what we do' />
                </div>
                <div className={whatWeDoBody}>
                    {whatWeDoData.map((data, index) => 
                        <WhatWeDoCard 
                            key={index} 
                            title={data.title}
                            desc={data.paragraph}
                            photo={data.image}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default HomeWhatWeDo;