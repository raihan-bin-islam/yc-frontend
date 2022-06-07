import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { breadCrumbContainer, linkBlue, spanBlue } from "./breadCrumbs.module.scss";

const BreadCrumb = ({ blue }) => {
  const router = useRouter();
  const pathName = router.asPath;
  const listOfRoutes = pathName.split("/").filter((data) => data !== "");
  let root = "/";

  return (
    <div className={`${breadCrumbContainer} container-layout`}>
      {listOfRoutes.map((data, index, row) => {
        root += data + "/";

        return (
          <React.Fragment key={index}>
            <Link href={root}>
              <a className={blue && linkBlue}>
                <h2>{data.replace("-", " ").replace("-", " ")}</h2>
              </a>
            </Link>
            {index < row.length - 1 && <span className={blue && spanBlue}>&#62;</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
