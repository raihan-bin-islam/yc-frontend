import React from 'react';
import styles from './aboutTrustees.module.scss';
import trusteeData from './trustees.json'
import trusteeBg from '../../../public/assets/images/about_us/trustee_path.png'

const AboutTrustees = () => {
    const { aboutTrusteesContainer, aboutTrusteesHeader, aboutTrusteesBody, aboutTrusteesCard, aboutTrusteesCardBack, aboutTrusteesCardFront, aboutTrusteesCardFrontTop, aboutTrusteesCardFrontBottom, aboutTrusteesCardFrontBottomContainer, aboutTrusteesPath } = styles

    return (
        <section className={aboutTrusteesContainer}>
            <div className={aboutTrusteesPath}>
                <img src={trusteeBg.src} alt='paths'/>
            </div>
            <div className='container-layout'>
                <div className={aboutTrusteesHeader}>
                    <h2>board of trustees</h2>
                </div>
                <div className={aboutTrusteesBody}>
                    {trusteeData.map((trustee, index) =>
                        <div className={aboutTrusteesCard} key={`card_${index}`}>
                            <div className={aboutTrusteesCardBack}>
                                <img src={trustee.profile_image} alt={trustee.title}/>
                            </div>
                            <div className={aboutTrusteesCardFront}>
                                <div className={aboutTrusteesCardFrontTop}>
                                    <p>{trustee.desc_1}</p>
                                    <p>{trustee.desc_2}</p>
                                </div>
                                <div className={aboutTrusteesCardFrontBottom}>
                                    <div className={aboutTrusteesCardFrontBottomContainer}>
                                        <h5>{trustee.designation}</h5>
                                        <h3>{trustee.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutTrustees;