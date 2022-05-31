import { useSpring, animated, config, easings } from "@react-spring/web";
import React from "react";
import {
  reviewContainer,
  flipLeft,
  reviewTextContainer,
  reviewParagraph,
  authorText,
  leftAlign,
} from "./reviewComponent.module.scss";

const ReviewComponent = ({ review, author, left, i }) => {
  // animate from left
  const animationStyleLeft = useSpring({
    from: { left: -2000, opacity: 0 },
    to: { left: 0, opacity: 1 },
    delay: i * 500,
    config: { ...config, easing: config.wobbly },
  });
  // animate from right
  const animationStyleRight = useSpring({
    from: { right: -2000, opacity: 0 },
    to: { right: 0, opacity: 1 },
    delay: i * 500,
    config: { ...config, easing: config.wobbly },
  });

  return (
    <animated.div
      style={left ? animationStyleLeft : animationStyleRight}
      className={`${reviewContainer} ${left && leftAlign}`}
    >
      <div className={`${reviewTextContainer} ${left && flipLeft}`}>
        <p className={reviewParagraph}>{review}</p>
      </div>
      <h4 className={authorText}>- {author}</h4>
    </animated.div>
  );
};

export default ReviewComponent;
