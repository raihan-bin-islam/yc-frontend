import React from 'react';
import HeroBanner from '../Shared/HeroBanner/HeroBanner';
import styles from './mediakit.module.scss'
import mediaKitData from './mediakit.json'
import mediaKitPath from '../../public/assets/images/media-kit/media-kit-path.png'

const MediaKit = () => {
    //styles
    const {mediaKitContainer, mediaKitContainerHeader, mediaKitContainerBody, mediaKitContainerBodyGrid, mediaKitCard, mediaKitContainerFooter} = styles 

    //
    return (
        <section className={mediaKitContainer}>
            <div className={mediaKitContainerHeader}>
                <HeroBanner/>
                <div>
                    <h2>media kit</h2>
                </div>
            </div>
            <div className={mediaKitContainerBody}>
                <div className={mediaKitContainerBodyGrid}>
                    {mediaKitData.map((mediaKit, index) => 
                        <div key={`media_${index}`} className={mediaKitCard}>
                            <div>
                                <img src={mediaKit.photo} alt={mediaKit.title}/>
                            </div>
                            <div className='ml2 flex-col'>
                                <h3>{mediaKit.title}</h3>
                                <p>{mediaKit.sub_title}</p>
                                <a href='#'>download</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={mediaKitContainerFooter}>
                <img src={mediaKitPath.src} alt='media-kit-path'/>
            </div>
        </section>
    );
};

export default MediaKit;