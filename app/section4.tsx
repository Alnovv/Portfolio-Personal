"use client";
import Link from "next/link";
import React from "react";
Link;
import { motion } from "framer-motion";

const hidden = {
  initial: {
    opacity: -100,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const section4 = () => {
  return (
    <section className="flex justify-center items-center h-[50vh] max-sm:h-0 max-sm:mt-40 text-white">
      <div className="flex flex-col justify-center items-center">
        <motion.div
          className="flex justify-center items-center text-4xl max-2xl:text-2xl "
          variants={hidden}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.5 }}
          viewport={{
            once: true,
          }}
        >
          <h1 className="mr-1 max-sm:text-2xl max-[414px]:text-xl">BERMINAT </h1>
          <div>
            <div className="mt-[8px] max-sm:mt-[4px] max-sm:text-2xl max-[414px]:text-xl">
              <h1>UNTUK BEKERJA SAMA?</h1>
            </div>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                loop: Infinity,
              }}
              className="h-[8px] bg-[#FD9A3E] animate-marquee max-sm:h-[4px]"
            ></motion.div>
          </div>
        </motion.div>
        <motion.div
          className="text-2xl font-extrabold leading-normal bg-[#FD9A3E] py-[15px] px-[30px] rounded-2xl mt-9  
          hover:bg-[#FDB13E] transition-all duration-300 max-sm:text-[10px] max-sm:py-[10px] max-sm:px-[25px] max-sm:rounded-xl
          max-2xl:text-xl max-sm:text-xs max-[414px]:text-xl"
          whileFocus={{ backgroundColor: "#FD9A3E" }}
          whileHover={{ backgroundColor: "#FDB13E" }}
          whileTap={{ backgroundColor: "#FFE8C5" }}
          initial={{ opacity: -100 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{
            once: true,
          }}
        >
          <Link href="/contact">Hubungi Saya</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default section4;
