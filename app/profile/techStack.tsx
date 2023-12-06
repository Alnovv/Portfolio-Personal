"use client";
import StackLogo from "./stackLogo";
import Image from "next/image";
Image;
import { motion } from "framer-motion";

function TechStack() {
  return (
    <section className="h-[20vh] mt-36 ">
      <motion.div className="flex justify-evenly"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      viewport={{
        once:true
      }}
      >
        <h1 className="text-5xl font-extrabold leading-normal text-white mb-5 max-2xl:text-3xl max-sm:mt-36 max-sm:text-align">TECH STACK</h1>
        <p className="text-[#010611]">wkwkwk</p>
      </motion.div>
      <StackLogo />
    </section>
  );
}

export default TechStack;
