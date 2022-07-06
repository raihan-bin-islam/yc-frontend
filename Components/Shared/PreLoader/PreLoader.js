import React from "react";
import styles from "./preLoader.module.scss";
const PreLoader = ({ size }) => {
  const { container, preLoader } = styles;
  return (
    <div className={container} style={size && { height: `${size}vh` }}>
      <div className={preLoader}></div>
    </div>
  );
};

export default PreLoader;
