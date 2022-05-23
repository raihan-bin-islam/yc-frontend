import React from 'react';
import OrgGrid from '../OrgGrid/OrgGrid';
import orgData from '../../../staticPageData/organizations.json'

const SocialBusinessOrgBody = () => {
    return (
        <section>
            <div className='container-layout'>
                <OrgGrid subHeadline='non-profit' mainHeadline='organisations' orgData={orgData}/>
                <OrgGrid subHeadline='profit' mainHeadline='organisations' orgData={orgData}/>
                <OrgGrid subHeadline='' mainHeadline='joint ventures' orgData={orgData}/>
            </div>
        </section>
    );
};

export default SocialBusinessOrgBody;