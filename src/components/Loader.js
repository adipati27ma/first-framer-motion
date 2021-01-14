import React from 'react';

import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div style={{ display: 'inline-block' }} onClick={() => cycleAnimation()}>
        <motion.p
          style={{
            cursor: 'pointer',
          }}
          whileHover={{
            textShadow: '0px 0px 8px rgb(255,255,255)',
          }}
        >
          Cycle Loader
        </motion.p>
      </div>
    </>
  );
};

export default Loader;
