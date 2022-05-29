import React, { useState, useEffect } from "react";
import { animated, useTransition, config, Transition } from "@react-spring/web";
const TestAnimation = () => {
  const NUM_TRANS = [
    {
      op: 1,
      trans: 20,
      fig: 1,
    },
    {
      op: 1,
      trans: 40,
      fig: 2,
    },
    ,
    {
      op: 1,
      trans: 60,
      fig: 3,
    },
    ,
    {
      op: 1,
      trans: 80,
      fig: 4,
    },
  ];
  const [items, setItems] = useState(NUM_TRANS);

  const transitions = useTransition(items, {
    keys: items,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: config.molasses,
    onRest: () => setItems([]),
  });

  useEffect(() => {
    setInterval(() => {
      setItems(NUM_TRANS);
    }, 2000);
  }, [items]);

  return (
    <div style={{ display: "flex", margin: 100, fontSize: 20 }}>
      <Transition
        items={items}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
        delay={200}
        config={config.molasses}
        onRest={() => setItems({ items: [] })}
      >
        {({ opacity }, item) => {
          // console.log(opacity);
          <animated.div
            style={{
              opacity: opacity.to(item.op),
            }}
          >
            {item.fig}
          </animated.div>;
        }}
      </Transition>
    </div>
  );
};

export default TestAnimation;
