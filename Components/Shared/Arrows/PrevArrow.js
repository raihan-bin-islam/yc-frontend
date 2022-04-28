import React from "react";
import prevIcon from "../../../public/arrow_left.svg";
import styles from "./arrows.module.scss";

const PrevArrow = ({ onClick }) => {
  return (
    <button type="button" className={styles.card_prev_arrow} onClick={onClick}>
      <img src={prevIcon.src} />
    </button>
  );
};

export default PrevArrow;
