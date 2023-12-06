"use client";
import React, { useState } from "react";
import Image from "next/image";
import DisneyClone from "./assets/images/DisneyClone.png";
import WebShop from "./assets/images/WebShop.png";
import todolist from "./assets/images/Todolist.png";



import Link from "next/link";
Link;
import { motion } from "framer-motion";


const Section3 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const shadowStyle = {
    filter: isHovered
      ? "drop-shadow(0px 4px 4px rgba(252, 159, 50, 1.5))"
      : "none",
    transition: "filter 0.3s ease-in-out",
  };

  const [isHovered3, setIsHovered3] = useState(false);

  const handleHover3 = () => {
    setIsHovered3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovered3(false);
  };
  const shadowStyle3 = {
    filter: isHovered3
      ? "drop-shadow(0px 4px 4px rgba(252, 159, 50, 1.5))"
      : "none",
    transition: "filter 0.3s ease-in-out",
  };
  const [isHovered2, setIsHovered2] = useState(false);

  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovered2(false);
  };
  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  const hidden ={
    initial:{ 
      opacity:-100,
      y:-100
    },
    animate:{
      opacity:1,
      y:0
    }
  }

  const shadowStyle2 = {
    filter: isHovered2
      ? "drop-shadow(0px 4px 4px rgba(252, 159, 50, 1.5))"
      : "none",
    transition: "filter 0.3s ease-in-out",
  };
  return (
    <section className=" flex flex-col justify-center items-center text-white">
      <motion.div
        className="h-[10vh] mt-10"
        variants={hidden}
        initial='initial'
        whileInView='animate'
        transition={{ duration: 0.5 }}
        viewport={{
        once:true
        }}  
      >
        <h1 className="text-4xl leading-normal font-semibold max-sm:text-2xl">
          <span className="text-[#FD9A3E]">Highlight</span> Projects
        </h1>
      </motion.div>
      <div className="flex gap-5 max-sm:px-3 max-sm:flex-col max-lg:grid ">
        <motion.div
          className="bg-[#020611] border-[2px] rounded-[20px]  p-5 max-2xl:p-3"
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          style={shadowStyle}
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
        >
          <div className="px-5 py-3 ">
            <div className="gap-4">
              <a href="https://ecommerce-shop-khaki-nine.vercel.app">
                <motion.div className="flex justify-self-center items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Image
                    src={WebShop}
                    alt=""
                    className="w-[500px]  h-auto rounded-xl cursor-pointer"
                  />
                </motion.div>
              </a>
              <h1 className="text-xl mt-4 font-extrabold  ">
                Web-Shop
              </h1>
            </div>
            <div className="flex gap-2 mt-1 ">
              <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                ReactJS
              </p>
              <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                TailwindCSS
              </p>
              <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                FakeStoreAPI
              </p>
            </div>
            <div className="mt-4">
              <p className="max-2xl:text-[11px] max-sm:text-[9px]">
              Saya membuat web-shop dengan menggunakan API Fakestore <br />  sebagai sumber data produk. 
              Situs ini dibuat untuk menunjukkan <br />kemampuan  dalam pengembangan web dan integrasi dengan API. 
              <br />Web-shop ini  menyediakan katalog produk berdasarkan data dari <br /> API Fakestore.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#020611] border-[2px] rounded-[20px]  p-5 max-2xl:p-3"
          variants={variants}
          initial="initial"
          whileInView="animate"
          transition={{delay:0.05}}
          viewport={{
            once: true,
          }}
          style={shadowStyle2}
          onMouseOver={handleHover2}
          onMouseOut={handleMouseOut2}
        >
          <div className="px-5 py-3 ">
            <div className="gap-4 ">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              ><a href="https://disney-clone-ten-mocha.vercel.app/">
                <Image
                  src={DisneyClone}
                  alt=""
                  className="w-[500px] h-auto rounded-xl cursor-pointer"
                />
              </a>
              </motion.div>
              <h1 className="text-xl mt-4 font-extrabold ">
                DisneyClone
              </h1>
            </div>
            <div className="flex gap-2 mt-1 ">
              <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                Vite+ReactJS
              </p>
              <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                TailwindCSS
              </p>
              <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                TMDB_API
              </p>
            </div>
            <div className="mt-4">
              <p className="max-2xl:text-xs max-sm:text-[9px]">
              Sebuah website cloningan yang menampilkan informasi film dan<br /> konten 
              terkait dengan menggunakan 
              <br />API The Movie Database (TMDb) sebagai sumber data.
              </p>
            </div>
          </div>
          
        </motion.div>
        <motion.div
          className="bg-[#020611] border-[2px] rounded-[20px]  p-5 max-2xl:p-3"
          variants={variants}
          initial="initial"
          whileInView="animate"
          transition={{delay:0.05}}
          viewport={{
            once: true,
          }}
          style={shadowStyle3}
          onMouseOver={handleHover3}
          onMouseOut={handleMouseOut3}
        >
          <div className="px-5 py-3 ">
            <div className="gap-4 ">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a href="https://todolist-brown-omega.vercel.app/">
                  <Image
                  src={todolist}
                  alt=""
                  className="w-[540px] h-auto rounded-xl cursor-pointer"
                />
                </a>
                
              </motion.div>
              <h1 className="text-xl mt-4 font-extrabold ">
                Todolist
              </h1>
            </div>
            <div className="flex gap-2 mt-1 ">
              <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                HTML
              </p>
              <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                CSS
              </p>
              <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                Javascript
              </p>
            </div>
            <div className="mt-4">
              <p className="max-2xl:text-xs">
              aplikasi web To-do List sederhana untuk mengelola daftar tugas, 
              <br />dengan fitur menambahkan tugas, menghapus dan menandai <br /> tugas-tugas  yang selesai dikerjakan.
              </p>
            </div>
          </div>
          
        </motion.div>
      </div>
      <motion.div
        className="text-2xl font-extrabold mt-9 leading-normal bg-[#FD9A3E] py-[15px] px-[20px] rounded-2xl  
        hover:bg-[#FDB13E] transition-all duration-300 max-sm:py-[10px] max-sm:px-[15px] max-sm:text-[10px] max-sm:rounded-lg
        max-2xl:text-xl"
        whileFocus={{ backgroundColor: "#FD9A3E" }}
        whileHover={{ backgroundColor: "#FDB13E" }}
        whileTap={{ backgroundColor: "#FFE8C5" }}
        initial={{opacity: -100}}
        whileInView={{opacity:1}}
        transition={{ duration: 1 }}
        viewport={{
        once:true
        }} 
      >
        <Link href="/portfolio">Proyek Lainnya</Link>
      </motion.div>
    </section>
  );
};

export default Section3;
