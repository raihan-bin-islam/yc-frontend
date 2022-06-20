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
  //-------------- options ----------------------//

  // class names to reveal from
  const revealFromTop = "scroll-reveal__reveal__from-top" + uniqueId;
  const revealFromRight = "scroll-reveal__reveal__from-right" + uniqueId;
  const revealFromBottom = "scroll-reveal__reveal__from-bottom" + uniqueId;
  const revealFromLeft = "scroll-reveal__reveal__from-left" + uniqueId;
  // class names to reveal from

  const revealFrom = {
    revealFromTop,
    revealFromRight,
    revealFromBottom,
    revealFromLeft,
  };

  // dynamic import
  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default;
      sr().reveal(`.${revealFromTop}`, top);
      sr().reveal(`.${revealFromRight}`, right);
      sr().reveal(`.${revealFromBottom}`, bottom);
      sr().reveal(`.${revealFromLeft}`, left);
    }
    animate();
  }, []);

  return revealFrom;
};

export default useScrollReveal;
