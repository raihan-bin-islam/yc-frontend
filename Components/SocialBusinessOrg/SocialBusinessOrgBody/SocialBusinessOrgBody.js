import React from "react";
import OrgGrid from "../OrgGrid/OrgGrid";
// import orgData from "../../../staticPageData/organizations.json";
import styles from "./socialbusinessorgbody.module.scss";
import sbOrgPath from "../../../public/assets/images/social_business/sb_org_path.png";
import useFetch from "../../Hooks/useFetch";

const SocialBusinessOrgBody = () => {
  const { socialBusinessOrgBodyContainer, sb_org_path } = styles;
  const [isLoading, orgData] = useFetch("/organizations");
  console.log(orgData);
  return (
    <section className={socialBusinessOrgBodyContainer}>
      <div className={sb_org_path}>
        <img src={sbOrgPath.src} alt="sb-org-path" />
      </div>
      <div className="container-layout">
        <OrgGrid
          subHeadline="non-profit"
          mainHeadline="organisations"
          orgData={orgData.filter(({ category }) => category === "non_profit")}
          countPerPage={8}
        />
        <OrgGrid
          subHeadline="profit"
          mainHeadline="organisations"
          orgData={orgData.filter(({ category }) => category === "profit")}
          countPerPage={8}
        />
        <OrgGrid
          subHeadline=""
          mainHeadline="joint ventures"
          orgData={orgData.filter(({ category }) => category === "joint_ventures")}
          countPerPage={8}
        />
      </div>
    </section>
  );
};

export default SocialBusinessOrgBody;
