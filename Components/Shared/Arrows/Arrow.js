import React from "react";
import nextIcon from "../../../public/arrow_right.svg";
import styles from "./arrows.module.scss";

const Arrow = ({ onClick, type = "next", size, color, recentNews }) => {
  return (
    <button
      type="button"
      className={`${type === "next" ? styles.card_next_arrow : styles.card_prev_arrow} ${
        recentNews && styles.recentNewsCardButton
      }`}
      onClick={onClick}
      style={size && { height: `${size}%`, color: color }}
    >
      <img
        className={`${type === "next" ? styles.card_next_arrow_img : styles.card_prev_arrow_img}`}
        src={nextIcon.src}
        alt=""
      />
    </button>
  );
};

export default Arrow;
