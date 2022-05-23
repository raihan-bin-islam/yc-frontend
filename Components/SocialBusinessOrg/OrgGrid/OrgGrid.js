import React from 'react';
import styles from './orgGrid.module.scss'

const OrgGrid = ({subHeadline, mainHeadline, orgData}) => {
    // styles
    const {orgGridContainer, orgGridHeader, orgGridBody, orgGridBodyCard} = styles 
    return (
        <section className={orgGridContainer}>
            {/*profit section */}
            <div className={orgGridHeader}>
                <h3>{subHeadline}</h3>
                <h2>{mainHeadline}</h2>
            </div>
            <div className={orgGridBody}>
                {orgData.map((org, index) => 
                    <div key={`org_${index}`} className={orgGridBodyCard}>
                        <img src={org.logo} alt="organizations"/>
                    </div>
                )}
            </div>
        </section>
    );
};

export default OrgGrid;