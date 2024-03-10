import HTML from "../assets/logo/html.svg";
import CSSlogo from "../assets/logo/css.svg";
import javaScript from "../assets/logo/js.svg";
import styles from "./styles.module.css";
import Bootstrap from "../assets/logo/bootstrap.svg";
import Reactlogo from "../assets/logo/react.svg";
import TailwindCSS from "../assets/logo/tailwind.svg";
import next from "../assets/logo/next-js.svg";
import vite from "../assets/logo/vite.svg";
import php from "../assets/logo/php.svg";
import laravel from "../assets/logo/laravel.svg";


import { motion } from "framer-motion";

import Image from "next/image";
Image;
const stackLogo = () => {
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
  return (
    <section>
      <div className="flex flex-row justify-center items-center gap-[38px] py-3 px-4 text-white max-sm:flex-wrap max-lg:flex-wrap ">
        <motion.div
          className={`border-[2px] border-[#909090] gap-3 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <div className="flex flex-col justify-center items-center hover:mb-3 transition-all duration-300 ease-in-out ">
            <Image
              src={HTML}
              alt={``}
              className="hover:w-[90px] w-20  transition-all duration-300"
            />
            
          </div>
          <p className="text-[14px] font-semibold">HTML</p>
        </motion.div>
        <motion.div
          className={`border-[2px] border-[#909090] gap-3 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}
          variants={variants}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.05 }}
          viewport={{
            once: true,
          }}
        >
          <div className="flex flex-col justify-center items-center hover:mb-3 transition-all duration-300 ease-in-out">
            <Image
              src={CSSlogo}
              alt={``}
              className="hover:w-[90px] w-20  transition-all duration-300"
            />
          </div>
          <p className="text-[14px] font-semibold">CSS</p>
        </motion.div>
        <motion.div
          className={`border-[2px] border-[#909090] gap-3 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}
          variants={variants}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.06 }}
          viewport={{
            once: true,
          }}
        >
          <div className="flex flex-col justify-center items-center hover:mb-4 transition-all duration-300 ease-in-out ">
            <Image
              src={javaScript}
              alt={``}
              className="hover:w-[90px] w-20  transition-all duration-300"
            />
            </div>
            <p className="text-[14px] font-semibold">Javascript</p>
              </motion.div>
        <motion.div
          className={`border-[2px] border-[#909090] gap-3 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}
          variants={variants}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.07 }}
          viewport={{
            once: true,
          }}
        >
          <div className="flex flex-col justify-center items-center hover:mb-4 transition-all duration-300 ease-in-out ">
            <Image
              src={Bootstrap}
              alt={``}
              className="hover:w-[90px] w-20  transition-all duration-300"
            />
          </div>
          <p className="text-[14px] font-semibold">Bootstrap</p>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.08 }}
          viewport={{
            once: true,
          }}
          className={`border-[2px] border-[#909090] gap-3 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}
        >
          <div className="flex flex-col justify-center items-center hover:mb-5 transition-all duration-300 ease-in-out ">
            <Image
              src={TailwindCSS}
              alt={``}
              className="hover:w-[90px] w-20 transition-all duration-300"
            />
          </div>
          <p className="text-[14px] font-semibold">Tailwind</p>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.09 }}
          viewport={{
            once: true,
          }}
          className={`border-[2px] border-[#909090] gap-3 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}
        >
          <div className="flex flex-col justify-center items-center hover:mb-3 transition-all duration-300 ease-in-out">
            <Image
              src={Reactlogo}
              alt={``}
              className="hover:w-[90px] w-20  transition-all duration-300"
            />
          </div>
          <p className="text-[14px] font-semibold">React</p>
        </motion.div>
        <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        transition={{delay:0.10}}
        viewport={{
          once: true,
        }}
          className={`border-[2px] border-[#909090] gap-4 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}
        >
          <div className="flex flex-col justify-center items-center hover:mb-3 transition-all duration-300 ease-in-out">
            <Image
              src={next}
              alt={``}
              className="hover:w-[90px] w-20 transition-all duration-300 "
            />
          </div>
          <p className="text-[14px] font-semibold">NextJS</p>
        </motion.div>
        <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        transition={{delay:0.10}}
        viewport={{
          once: true,
        }}
          className={`border-[2px] border-[#909090] gap-4 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}
        >
          <div className="flex flex-col justify-center items-center hover:mb-3 transition-all duration-300 ease-in-out">
            <Image
              src={vite}
              alt={``}
              className="hover:w-[90px] w-20 transition-all duration-300 "
            />
          </div>
          <p className="text-[14px] font-semibold">ViteJS</p>
        </motion.div>
        <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        transition={{delay:0.10}}
        viewport={{
          once: true,
        }}
          className={`border-[2px] border-[#909090] gap-4 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}
        >
          <div className="flex flex-col justify-center items-center hover:mb-3 transition-all duration-300 ease-in-out">
            <Image
              src={php}
              alt={``}
              className="hover:w-[90px] w-20 transition-all duration-300 "
            />
          </div>
          <p className="text-[14px] font-semibold">PHP</p>
        </motion.div>
        <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        transition={{delay:0.10}}
        viewport={{
          once: true,
        }}
          className={`border-[2px] border-[#909090] gap-4 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}
        >
          <div className="flex flex-col justify-center items-center hover:mb-3 transition-all duration-300 ease-in-out">
            <Image
              src={laravel}
              alt={``}
              className="hover:w-[90px] w-20 transition-all duration-300 "
            />
          </div>
          <p className="text-[14px] font-semibold">Laravel</p>
        </motion.div>
      </div>
      
    </section>
  );
};

export default stackLogo;