import React from "react";
Image;
import Image from "next/image";
import github from "./assets/logo/github.svg";
import Linkedin from "./assets/logo/Linked.svg";
import Page from "./assets/Wallpaper/Page.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import vector from "./assets/Wallpaper/Vector 1.svg";

function section1() {
  return (
    <section
      className={`flex min-h-screen flex-col items-center justify-center p-24 text-white max-sm:items-start  max-sm:pl-5 `}
    >
      <div className="-z-10 max-sm:hidden">
        <Image
          src={Page}
          alt=""
          fill
          quality={100}
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent via-transparent to-[#020611] max-sm:hidden"></div>
      </div>
      <div>
        <Image
          src={vector}
          alt=""
          className="hidden max-sm:block max-sm:absolute max-sm:top-20 max-sm:right-0 -z-10 max-sm:w-[100vw] max-sm:h-[100vh] "
        />
        <Image
          src={vector}
          alt=""
          className="hidden max-sm:block max-sm:absolute max-sm:top-0 max-sm:right-0 -z-10 max-sm:w-[100vw] max-sm:h-[100vh] "
        />
      </div>
      <div>
        <div className="flex flex-col justify-center items-center z-10 max-sm:ml-40 max-[414px]:ml-20">
          <motion.h1
            className="text-[64px] max-2xl:text-5xl text-center max-sm:text-[32px] max-[414px]:text-xl"
            initial={{ opacity: -100, y: -100 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="text-xl text-[#FD9A3E] max-sm:text-xs ">
              HALLO, SAYA
            </span>{" "}
            RANOV
            <br />
          </motion.h1>
        </div>
      </div>
      <div>
        <motion.h1
          className="text-[64px] max-2xl:text-5xl text-center max-sm:text-[32px] max-sm:ml-20 max-[414px]:text-xl max-[414px]:ml-7"
          initial={{ opacity: -100, y: -100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{
            once: true,
          }}
        >
          <span className="">
            <Typewriter
              options={{
                strings: ["FRONTEND DEVELOPER"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </motion.h1>
      </div>

      <motion.div
        className="flex justify-start items-center gap-5 mt-5 max-sm:gap-3 max-sm:ml-40 max-sm:mb-40 max-[414px]:ml-10 "
        initial={{ opacity: -100 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <motion.a
          whileFocus={{ backgroundColor: "#FD9A3E" }}
          whileHover={{ backgroundColor: "#FDB13E" }}
          whileTap={{ backgroundColor: "#FFE8C5" }}
          download="resume"
          href="file/CV.pdf"
          className="text-2xl font-extrabold leading-normal bg-[#FD9A3E] py-[15px] px-[20px] rounded-2xl hover:bg-[#FDB13E] transition-all duration-300 cursor-pointer
          max-sm:text-[8px] max-2xl:text-xs max-2xl:rounded-xl max-sm:rounded-xl max-sm:py-[15px] max-sm:px-[20px]"
        >
          <p className="max-sm:text-[12px] max-[414px]:text-[12px]">
            DOWNLOAD CV
          </p>
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
            <a
              href="https://www.linkedin.com/in/alam-ranov-71a82a2a1/"
              target="_blank"
            >
              <Image
                src={Linkedin}
                alt=""
                className={`bg-white border-[5px] w-[47px] max-2xl:w-[37px] max-sm:w-[37px] rounded-full`}
              />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default section1;
