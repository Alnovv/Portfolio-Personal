"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";

const transitionVariants = {
  initial: {
    y: "100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "0%",
  },
  exit: {
    y: ["0%", "100%"],
    height: ["0%", "100%", "0%"],
  },
};

const Transition = () => {
  return (
    <div>
      <motion.div
        className="absolute top-0 left-0 w-full h-screen bg-black origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full h-screen bg-black origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      ></motion.div>
      {/* <motion.div
        className="fixed right-0 h-screen w-full z-30 bg-[#0f0f10]"
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay:0.2,duration: 0.6,ease:'easeInOut' }}
      />
        <motion.div
        className="fixed right-0 h-screen w-full z-30 bg-[#1F1F1F]"
        variants={transitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay:0.4,duration: 0.6,ease:'easeInOut' }}
      />
        <motion.div
        className="fixed right-0 h-screen w-full z-20 bg-[#2B2B2B]"
        variants={transitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay:0.6,duration: 0.6,ease:'easeInOut' }}
      />
      <motion.div
        className="fixed right-0 h-screen w-full z-20 bg-[#303030]"
        variants={transitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay:0.7,duration: 0.6,ease:'easeInOut' }}
      /> */}
    </div>
  );
};

export default Transition;
