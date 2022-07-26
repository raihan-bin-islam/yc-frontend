/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const useScrollReveal = (uniqueId = "", offset = 100) => {
  //-------------- options ----------------------//
  const bottom = {
    delay: 100,
    // reset: true, // this option determines if we should animate every time the element enters the viewport or not
    distance: "800px",
    interval: 150,
    viewOffset: {
      top: offset,
      bottom: offset,
    },
    viewFactor: 0.5,
  };

  const right = { ...bottom, origin: "right" };
  const left = { ...bottom, origin: "left" };
  const top = { ...bottom, origin: "top" };

  const scaleUpProps = {
    delay: 100,
    scale: 0.5,
    interval: 150,
    viewOffset: {
      top: offset,
      bottom: offset,
    },
    viewFactor: 0.5,
  };
  //-------------- options ----------------------//

  // class names to reveal from
  const revealFromTop = "scroll-reveal__reveal__from-top" + uniqueId;
  const revealFromRight = "scroll-reveal__reveal__from-right" + uniqueId;
  const revealFromBottom = "scroll-reveal__reveal__from-bottom" + uniqueId;
  const revealFromLeft = "scroll-reveal__reveal__from-left" + uniqueId;
  const scaleUp = "scroll-reveal__reveal__scale-up" + uniqueId;
  // class names to reveal from

  const revealFrom = {
    revealFromTop,
    revealFromRight,
    revealFromBottom,
    revealFromLeft,
    scaleUp,
  };

  // dynamic import
  useEffect(() => {
    const animate = async () => {
      const sr = (await import("scrollreveal")).default;
      sr().reveal(`.${revealFromTop}`, top);
      sr().reveal(`.${revealFromRight}`, right);
      sr().reveal(`.${revealFromBottom}`, bottom);
      sr().reveal(`.${revealFromLeft}`, left);
      sr().reveal(`.${scaleUp}`, scaleUpProps);
    };
    animate();
  }, []);

  return revealFrom;
};

export default useScrollReveal;
