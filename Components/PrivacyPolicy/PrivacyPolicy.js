import React from 'react';
import HeroBanner from '../Shared/HeroBanner/HeroBanner';
import styles from './privacy.module.scss'

const PrivacyPolicy = () => {

    //styles
    const {mediaKitContainer, mediaKitContainerHeader, mediaKitContainerBody, mediaKitContainerBodyTitle, mediaKitContainerBodyContent, mediaKitContainerFooter} = styles 

    return (
        <section className={mediaKitContainer}>
            <div className={mediaKitContainerHeader}>
                <HeroBanner/>
                <div>
                    <h2>privacy policy</h2>
                </div>
            </div>
            <div className='container-layout'>
                <div className={mediaKitContainerBody}>
                    <div className={mediaKitContainerBodyTitle}>
                        <h1>Privacy Policy for Yunus Centre</h1>
                    </div>
                    <div className={mediaKitContainerBodyContent}>
                        <p>At Yunus Centre, accessible from www.yunuscentre.org, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Yunus Centre and how we use it. </p>
                        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. </p>
                        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collected in Yunus Centre. This policy is not applicable to any information collected offline or via channels other than this website. </p>
                    </div>
                </div>
            </div>
            <div className={mediaKitContainerFooter}>

            </div>
        </section>
    );
};

export default PrivacyPolicy;