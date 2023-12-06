import React from "react";
import instagramSosmed from "../assets/logo/instagramSosmed.svg";
import linkediSosmed from "../assets/logo/linkedin.svg";
import facebookSosmed from "../assets/logo/facebookSosmed.svg";
import Image from "next/image";
Image;
import styles from "./styles.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const SosialMedia = () => {
  const [effect, setEffect] = useState(false);
  const [effectIns, setEffectIns] = useState(false);
  const [effectFace, setEffectFace] = useState(false);

  const variants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="max-sm:mt-[50rem] flex flex-col justify-center items-center pt-10 text-white max-2xl:mt-20 max-lg:mt-40">
      <motion.div
        className="mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-semibold leading-normal max-2xl:text-3xl max-sm:text-xl">
          SOSIAL MEDIA SAYA
        </h1>
        <div
          className={`h-[8px] max-sm:h-[4px] bg-[#FD9A3E] ${styles.animatesosmed}`}
        ></div>
      </motion.div>
      <div className="flex flex-col justify-evenly items-center   ">
        <motion.div
          className={`flex justify-around items-center py-[30px] px-[60px] rounded-[25px] gap-[101px] 
          max-sm:gap-[51px] max-sm:py-[15px] max-sm:px-[45px] ${styles.gradientSosmed}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{
            once: true,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.a href="https://www.linkedin.com/in/alam-ranov-71a82a2a1/"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{ delay: 0.05 }}>
              <Image
                src={linkediSosmed}
                alt=""
                onClick={() => {
                  setEffect(true);
                }}
              />
            </motion.a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.a href="https://instagram.com/alamranov?igshid=NzZlODBkYWE4Ng=="
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{ delay: 0.06 }}
            >
              <Image src={instagramSosmed} alt="" />
            </motion.a>
          </motion.div>
          <motion.div
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <motion.a
              href="https://www.facebook.com/yorn.omega"
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              transition={{ delay: 0.07 }}
            >
              <Image
                src={facebookSosmed}
                alt=""
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SosialMedia;
