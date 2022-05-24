import React from 'react';
import OrgGrid from '../OrgGrid/OrgGrid';
import orgData from '../../../staticPageData/organizations.json'
import styles from './socialbusinessorgbody.module.scss'
import sbOrgPath from '../../../public/assets/images/social_business/sb_org_path.png'

const SocialBusinessOrgBody = () => {
    const { socialBusinessOrgBodyContainer, sb_org_path } = styles
    return (
        <section className={socialBusinessOrgBodyContainer}>
            <div className={sb_org_path}>
                <img src={sbOrgPath.src} alt='sb-org-path'/>
            </div>
            <div className='container-layout'>
                <OrgGrid 
                    subHeadline='non-profit' 
                    mainHeadline='organisations' 
                    orgData={orgData}
                    countPerPage={8}
                />
                <OrgGrid 
                    subHeadline='profit' 
                    mainHeadline='organisations' 
                    orgData={orgData}
                    countPerPage={8}
                />
                <OrgGrid 
                    subHeadline='profit' 
                    mainHeadline='organisations' 
                    orgData={orgData}
                    countPerPage={8}
                />
            </div>
        </section>
    );
};

export default SocialBusinessOrgBody;