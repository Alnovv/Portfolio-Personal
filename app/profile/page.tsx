"use client";

import Image from "next/image";
import React from "react";
Image;
import github from "../assets/logo/github.svg";
import Linkedin from "../assets/logo/Linked.svg";
import ranov from "../assets/images/ranov.png";
import TechStack from "./techStack";
import styles from "./styles.module.css";
import SosialMedia from "./sosialMedia";
import wall from "../assets/Wallpaper/Ellipse.svg";
import Vec from "../assets/Wallpaper/Vector.svg";
import Page from "../assets/Wallpaper/profile.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Footer from "../footer";
import Link from "next/link";
Link;

const Profile = () => {
  return (
    <>
      <section className=" flex flex-col justify-center items-center min-h-screen text-white z-10 max-lg:min-h-[50vh]">
        <div className="flex items-center justify-center max-sm:justify-start max-sm:items-start max-sm:flex-col ">
          <div
            className=" absolute left-[480px]  max-2xl:left-48  max-lg:left-5 max-lg:top-42
          max-sm:top-28 max-sm:left-24"
          >
            <Image
              src={wall}
              alt=""
              className="w-[40vw] max-sm:w-[65vw] -z-10"
            />
          </div>
          <div className=" absolute right-0 top-0 max-2xl:right-0 max-2xl:top-0 max-sm:right-0 max-sm:top-80 max-lg:top-40 ">
            <Image
              src={Vec}
              alt=""
              className="w-[85vw]  -z-10"
            />
          </div>
          <div className="absolute left-[410px] max-2xl:left-36 max-sm:left-20 max-sm:top-20 max-lg:left-1 max-lg:top-40">
            <Image src={ranov} alt="" className=" w-[36vw] max-sm:w-[60vw] " />
          </div>
          <div className="z-20 absolute left-[50%] max-2xl:left-[50%] max-sm:left-0  max-sm:top-[50%] max-sm:ml-5 max-lg:top-[25%] max-lg:left-[40%]">
            <motion.div
              className="flex flex-col justify-center absolute -top-60 max-2xl:-top-32 ml-14 max-2xl:ml-0 max-sm:-top-5"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{
                once: true,
              }}
            >
              <h1 className="text-8xl max-2xl:text-6xl max-sm:text-4xl max-lg:text-4xl font-extrabold">
                Tentang Saya
              </h1>
              <div
                className={`h-[8px] max-sm:h-1 max-lg:h-1 bg-[#FD9A3E] ${styles.animateabout}`}
              ></div>
            </motion.div>
            <motion.div
              className="relative z-20 mt-10 max-lg:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <h2 className=" text-4xl font-extrabold text-[#FFA666] mb-1 max-2xl:text-3xl max-lg:text-2xl max-sm:text-base  max-sm:mt-10">
                ALAM RANOV GEBY PRIMA
              </h2>
              <h1 className="text-[64px] font-semibold max-2xl:text-3xl max-lg:text-2xl max-sm:text-xl">
                <span>
                  <Typewriter
                    options={{
                      strings: ["FRONTEND DEVELOPER"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
              <p className="text-base font-light text-[#BFBFBF] mt-2 max-2xl:text-xs max-sm:text-xs">
              Saya saat ini tengah menjalani magang di perusahaan Atech Solution selama dua bulan terakhir, 
              di mana saya aktif dalam proyek pengembangan web backend<br /> menggunakan teknologi PHP dan Laravel.  Selama periode ini, 
              saya berkontribusi dalam lingkungan kerja yang dinamis.
              Saya telah terlibat dalam tugas-tugas yang mencakup pengembangan backend sistem web, 
              meningkatkan pemahaman saya terhadap teknologi dalam industri ini. 
              Pengalaman ini memberi saya wawasan yang berharga tentang praktik terbaik dalam pengembangan 
              web dan memperluas keterampilan teknis saya di bidang ini.
              </p>
            </motion.div>
            <motion.div
              className="flex justify-start items-center gap-5 mt-5 max-sm:gap-3"
              initial={{ opacity: -100 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <motion.a
                download="resume"
                href="file/CV.pdf"
                whileFocus={{ backgroundColor: "#FD9A3E" }}
                whileHover={{ backgroundColor: "#FDB13E" }}
                whileTap={{ backgroundColor: "#FFE8C5" }}
                className="text-2xl font-extrabold leading-normal bg-[#FD9A3E] py-[15px] px-[20px] rounded-2xl hover:bg-[#FDB13E] transition-all duration-300 cursor-pointer max-2xl:text-xs max-2xl:rounded-xl 
                max-sm:text-xs max-sm:rounded-xl max-sm:py-[15px] max-sm:px-[25px]"
              >
                DOWNLOAD CV
              </motion.a>
              <div className="flex gap-5 justify-center items-center max-sm:gap-3">
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a href="https://github.com/Alnovv" target="_blank">
                    <Image
                      src={github}
                      alt=""
                      className={` text-white w-[47px] max-2xl:w-[37px] max-sm:w-[37px] rounded-full`}
                    />
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a href="https://www.linkedin.com/in/alam-ranov-71a82a2a1/" target="_blank">
                    <Image
                      src={Linkedin}
                      alt=""
                      className={`bg-white border-[5px] w-[47px] max-2xl:w-[37px] max-sm:w-[37px] rounded-full`}
                    />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TechStack />

      <SosialMedia />
      <div className=" absolute w-full -z-10 top-[100%] max-sm:hidden">
          <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-transparent via-transparent to-[#020611]"></div>
          <Image
            src={Page}
            alt=""
            className="w-full h-full object-cover -z-20"
          />
          <div className="absolute top-0 left-0 w-full  z-10 bg-gradient-to-t from-[#020611] via-transparent to-transparent h-screen"></div>
        </div>
      <Footer />
    </>
  );
};

export default Profile;
