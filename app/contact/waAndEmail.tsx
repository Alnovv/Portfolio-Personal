"use client";
import React from "react";
import scan from "../assets/logo/scan.svg";
import scanWa from "../assets/logo/scanWa.svg";
import wa from "../assets/logo/wa.svg";
import Email from "../assets/logo/email.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const WaAndEmail = () => {
  const [showContent, setShowContent] = useState(false);

  const handleEmailClick = () => {
    setShowContent((prevShowContent) => !prevShowContent);
    setShowContentWA(false);
  };
  const [showContentWA, setShowContentWA] = useState(false);

  const handleWAClick: React.MouseEventHandler = () => {
    setShowContent(false);
    setShowContentWA((prevShowContentWA) => !prevShowContentWA);
  };
  return (
    <div>
      <div className=" flex justify-start items-start gap-3 relative left-0">
        <div className="flex flex-col justify-evenly gap-5 text-black text-[25px] font-semibold">
          <div className="mt-10 flex">
            <motion.div
              className={`mr-5 ${styles.parent}`}
              onClick={handleEmailClick}
              data-isOpen={showContent}
              layout
              transition={{ type: "spring", stiffness: 350 }}
              initial={{ x: 1, opacity: 1 }}
              animate={{
                scale: showContent ? 1 : 1,
                x: showContent ? 10 : 1,
              }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: showContent ? 1 : 1 }}
                className={`opacity-scale cursor-pointer ${
                  showContent ? "opacity-0" : "opacity-100"
                }`}
              >
                <Image src={Email} alt="" className="max-sm:w-[50px] " />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: showContent ? 1 : 0,
                  x: showContent ? 0 : -100,
                }}
                style={{ display: showContent ? "block" : "none" }}
              >
                <p className="max-sm:text-xs max-2xl:text-xl text-xl ">
                  Detail lebih lanjut
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className={`mr-5 ${styles.parent}`}
              onClick={handleWAClick}
              data-isOpen={showContentWA}
              layout
              initial={{ opacity: 1 }}
              animate={{ opacity: showContent ? 1 : 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", stiffness: 350 }}
            >
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: showContentWA ? 1 : 1 }}
                className={` transition-opacity cursor-pointer ${
                  showContentWA ? "opacity-0" : "opacity-100"
                }`}
              >
                <Image src={wa} alt="" className="max-sm:w-[50px] w-12 " />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: showContentWA ? 1 : 0,
                  x: showContentWA ? 0 : -1,
                }}
                style={{ display: showContentWA ? "block" : "none" }}
              >
                <p className="max-sm:text-xs max-2xl:text-xl text-xl">
                  Detail lebih lanjut
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div className="flex justify-center items-center max-sm:justify-start max-sm:items-start">
            <motion.div
              className={` ${showContent ? "opacity-100" : "opacity-0"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              style={{ display: showContent ? "block" : "none" }}
            >
              <Image src={scan} alt="" className="max-sm:w-[10000px]" />
            </motion.div>
            <motion.div
              className={`${showContentWA ? "opacity-100" : "opacity-0"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: showContentWA ? 1 : 0 }}
            >
              <Image src={scanWa} alt="" className="max-sm:w-[550px]" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaAndEmail;
