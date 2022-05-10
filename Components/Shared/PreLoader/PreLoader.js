import React from "react";
import styles from "./preLoader.module.scss";
const PreLoader = () => {
  const { container, preLoader } = styles;
  return (
    <div className={container}>
      <div className={preLoader}></div>
    </div>
  );
};

export default PreLoader;
