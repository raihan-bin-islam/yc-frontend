import React from 'react';
import styles from './aboutTeam.module.scss'
import teamData from './about_team.json'
import IconLinkedIn from '../../../public/linked_in.svg'
import halfwayPathBg from '../../../public/halfway_path.png'

const AboutTeam = () => {

    const {aboutTeamContainer, aboutTeamHeader, aboutTeamBody, aboutTeamBodyCard, aboutTeamBodyCardImg, aboutTeamBodyCardContent, aboutTeamBodyCardContentContainer, aboutTeamBodyCardLinkedIn, halfwayPath} = styles

    return (
        <section className={aboutTeamContainer}>
            <div className={aboutTeamHeader}>
                <h2>team</h2>
            </div>
            <div className={aboutTeamBody}>
                <div className={halfwayPath}>
                    <img src={halfwayPathBg.src} alt='half-way-path'/>
                </div>
                {teamData.map(((member, index) =>
                    <div className={aboutTeamBodyCard} key={`member_${index}`}>
                        <div className={aboutTeamBodyCardImg}>
                            <img src={member.profile_img} alt={member.title}/>
                        </div>
                        <div className={aboutTeamBodyCardContent}>
                            <div className={aboutTeamBodyCardContentContainer}>
                                <h2>{member.title}</h2>
                                <h5>{member.designation}</h5>
                            </div>
                        </div>
                        <div className={aboutTeamBodyCardLinkedIn}>
                            <a href={member.linked_in} target="_blank" rel="noreferrer"><img src={IconLinkedIn.src}/></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutTeam;