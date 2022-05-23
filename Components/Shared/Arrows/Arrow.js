import React from "react";
import nextIcon from "../../../public/arrow_right.svg";
import styles from "./arrows.module.scss";

const Arrow = ({ onClick, type = "next", size, color }) => {
  return (
    <button
      type="button"
      className={`${type === "next" ? styles.card_next_arrow : styles.card_prev_arrow}`}
      onClick={onClick}
      style={size && { height: `${size}%`, color: color }}
    >
      <img src={nextIcon.src} />
    </button>
  );
};

export default Arrow;
