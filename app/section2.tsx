"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
Image;
Link;
import { motion } from "framer-motion";

const hidden ={
  initial:{ 
    opacity:-100,
  },
  animate:{
    opacity:1,
  }
}

const Section2 = () => {
  return (
    <section className="text-white flex  items-center justify-around">
      <motion.div
        className="flex justify-start items-start"
        variants={hidden}
        initial='initial'
        whileInView='animate'
        transition={{ duration: 0.5 }}
        viewport={{
        once:true
        }}
      >
        <div>
          <h1 className="text-5xl font-extrabold leading-normal max-2xl:text-4xl max-sm:text-2xl">
            {" "}
            Membuat website modern <br /> dan interaktif
          </h1>
          <p className="text-base font-normal text-gray-600 mb-6 mt-6 max-sm:mb-3 max-sm:mt-3">
            Membuat bisnis web Anda lebih fungsional
          </p>
          <motion.div
          className="text-2xl font-extrabold leading-normal bg-[#FD9A3E] py-[15px] px-[30px] rounded-2xl mt-9  
          hover:bg-[#FDB13E] transition-all duration-300 w-60 max-sm:text-[10px] max-sm:py-[10px] max-sm:px-[35px] max-sm:rounded-lg
          max-2xl:text-xs max-2xl:w-36 max-2xl:rounded-xl"
          whileFocus={{ backgroundColor: "#FD9A3E" }}
          whileHover={{ backgroundColor: "#FDB13E" }}
          whileTap={{ backgroundColor: "#FFE8C5" }}
          initial={{ opacity: -100 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{
            once: true,
          }}
        ><button><Link href="/profile">Tentang Saya</Link></button>
          
        </motion.div>
        </div>
      </motion.div>
      <div className="flex flex-col gap-10 justify-center items-center"></div>
    </section>
  );
};

export default Section2;
