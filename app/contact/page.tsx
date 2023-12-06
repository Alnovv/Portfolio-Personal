"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import page from "../assets/Wallpaper/profile.png";
import Footer from "../footer";
import Form from "./form";
import WaAndEmail from "./waAndEmail";

const Contact = () => {
  return (
    <div>
      <div className=" absolute h-screen -z-10 max-sm:hidden">
          <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-transparent via-transparent to-[#020611]"></div>
          <Image
            src={page}
            alt=""
            className="w-full h-full object-cover -z-20"
          />
          <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent via-transparent to-[#020611]"></div>
        </div>
      <section className=" flex flex-col justify-center items-center text-white gap-20 max-sm:ml-5 ">
        <div className="flex flex-col justify-center items-start">
          <div>
            <h1 className="text-8xl max-2xl:text-7xl max-sm:text-4xl font-extrabold leading-normal mt-7">
              Hubungi Saya
            </h1>
            <div
              className={`h-[8px] max-sm:h-1 bg-[#FD9A3E] ${styles.animateabout}`}
            ></div>
          </div>
          <p className="text-2xl max-sm:text-[12px] font-normal leading-normal">
            Jika Anda ingin bekerja bersama
          </p>
        </div>
        <div className="flex justify-start items-center gap-10 h-[50vh] max-sm:flex-col max-lg:ml-1">
          <Form />
          <WaAndEmail />
        </div>
        
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
