"use client";
import React from "react";
import WebShop from "../assets/Projects/projectsWebshop.png";
import DisneyClone from "../assets/Projects/projectsDisney.png";
import WeatherApp from "../assets/Projects/Weather-App.png";
import Todolist from "../assets/Projects/Todolist.png";
import Curved from "../assets/Projects/Curvedd.png";
import Ellips from "../assets/Wallpaper/Ellipse 3.svg";
import Vector from "../assets/Wallpaper/Vector 1.svg";
import Vector2 from "../assets/Wallpaper/Vector 2.svg";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import Footer from "../footer";
import Image from "next/image";
Image;
import Visit from "../assets/images/Link.svg";

const Portfolio = () => {
  return (
    <>
      <section
        className={`flex flex-col justify-around items-center  text-white min-h-screen`}
      >
        <div>
          <motion.div className="absolute left-0 max-sm:top-[25%]">
            <Image src={Ellips} alt="" className="w-[50vw] -z-20 " />
          </motion.div>
          <div className="absolute left-0 top-3/4 max-sm:top-[25%]">
            <Image src={Ellips} alt="" className="w-[50vw] -z-20" />
          </div>
          <div className="absolute right-0 top-2/4 max-sm:top-[20%] ">
            <Image src={Vector2} alt="" className="w-[80vw] -z-20" />
          </div>
          <div className="absolute right-0 top-0 max-sm:top-[20%] ">
            <Image src={Vector} alt="" className="w-[100vw] -z-20" />
          </div>
          <div>
            <div className="z-50  max-sm:mb-14">
              <h1 className="text-8xl max-2xl:text-6xl max-sm:text-5xl font-extrabold ">
                Pro<span className=" absolute z-20 ">j</span>    ects
              </h1>
              <div
                className={`h-[8px] max-sm:h-[3px] bg-[#FD9A3E] ${styles.animateprojects} `}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  justify-center items-start gap-10 z-10 ">
          <div className="flex border-[2px] rounded-xl justify-center items-center gap-2  p-5 mt-7 bg-[#020611] max-sm:flex-col">
            <Image
              src={WebShop}
              alt=""
              className="w-[300px] max-sm:w-[350px] h-auto rounded-xl cursor-pointer "
            />

            <div className="mr-[9px]">
              <div className="flex justify-between items-center">
                <h1 className="text-xl max-sm:text-xl max-2xl:text-2xl font-extrabold">
                  Web-Shop
                </h1>
                <motion.button
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.7 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a
                    href="https://ecommerce-shop-khaki-nine.vercel.app/"
                    target="_blank"
                  >
                    <Image src={Visit} alt="" className="w-[30px] " />
                  </a>
                </motion.button>
              </div>

              <div className="flex gap-2 mt-1 ">
                <p className=" text-xs max-sm:text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  ReactJS
                </p>
                <p className=" text-xs max-sm:text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  TailwindCSS
                </p>
                <p className=" text-xs max-sm:text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  FakeStoreAPI
                </p>
              </div>
              <div className="pt-2">
                <p className="max-sm:text-[10px]">
                  Saya membuat web-shop dengan menggunakan API Fakestore <br />
                  sebagai sumber data produk. Situs ini dibuat untuk menunjukkan{" "}
                  <br />
                  kemampuan dalam pengembangan web dan integrasi dengan API.
                  <br />
                  Web-shop ini menyediakan katalog produk berdasarkan data dari{" "}
                  <br />
                  API Fakestore.
                </p>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col border-[2px] rounded-xl justify-center items-center gap-4 p-5 bg-[#020611]">
            <Image
              src={DisneyClone}
              alt=""
              className="w-[300px] max-sm:w-[350px] h-auto rounded-xl cursor-pointer "
            />

            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-xl max-sm:text-xl max-2xl:text-2xl font-extrabold">
                  Disney-Clone
                </h1>
                <motion.button
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.7 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a
                    href="https://disney-clone-ten-mocha.vercel.app/"
                    target="_blank"
                  >
                    <Image src={Visit} alt="" className="w-[30px] " />
                  </a>
                </motion.button>
              </div>

              <div className="flex gap-2 mt-1 ">
                <p className=" text-xs max-sm:text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  ReactJS+ViteJS
                </p>
                <p className=" text-xs max-sm:text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  TailwindCSS
                </p>
                <p className=" text-xs max-sm:text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  TMDB_API
                </p>
              </div>
              <div className="pt-2 pr-[53px] max-sm:pr-0 max-sm:text-xs  ">
                <p>
                  Saya membuat website Disney Clone yang menampilkan <br />{" "}
                  informasi film dan konten terkait dengan menggunakan API{" "}
                  <br /> The Movie Database (TMDb) sebagai sumber data. <br />
                </p>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col border-[2px] rounded-xl justify-center items-center gap-4 p-5 bg-[#020611]">
            <Image
              src={Todolist}
              alt=""
              className="w-[300px] max-sm:w-[350px] h-auto rounded-xl cursor-pointer "
            />

            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-xl max-sm:text-xl max-2xl:text-2xl font-extrabold">
                  To-do List
                </h1>
                <motion.button
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.7 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a
                    href="https://todolist-brown-omega.vercel.app/"
                    target="_blank"
                  >
                    <Image src={Visit} alt="" className="w-[30px] " />
                  </a>
                </motion.button>
              </div>

              <div className="flex gap-2 mt-1 ">
                <p className=" text-xs max-sm:text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  HTML
                </p>
                <p className=" text-xs max-sm:text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  CSS
                </p>
                <p className=" text-xs max-sm:text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  Javascript
                </p>
              </div>
              <div className="pt-2 pr-[9px] max-sm:pr-0">
                <p className="max-sm:text-[11px]">
                  aplikasi web To-do List sederhana untuk mengelola daftar
                  tugas,
                  <br />
                  dengan fitur menambahkan tugas, menghapus dan menandai <br />{" "}
                  tugas-tugas yang selesai dikerjakan.
                </p>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col border-[2px] rounded-xl justify-center items-center gap-4 p-5 bg-[#020611]">
            <Image
              src={WeatherApp}
              alt=""
              className="w-[300px] max-sm:w-[350px] h-auto rounded-xl cursor-pointer "
            />

            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-xl max-sm:text-xl max-2xl:text-2xl font-extrabold">
                  Web WeatherApp Widget
                </h1>
                <motion.button
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.7 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a
                    href="https://weather-app-jet-chi-32.vercel.app/"
                    target="_blank"
                  >
                    <Image src={Visit} alt="" className="w-[30px] " />
                  </a>
                </motion.button>
              </div>

              <div className="flex gap-2 mt-1 ">
                <p className=" text-xs max-sm:text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  HTML
                </p>
                <p className=" text-xs max-sm:text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  CSS
                </p>
                <p className=" text-xs max-sm:text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  Javascript
                </p>
                <p className=" text-xs max-sm:text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  API
                </p>
              </div>
              <div className="pt-2 pr-9">
                <p className="max-sm:text-[10px]">
                  Web Weather App widget memberikan informasi cuaca cepat <br />
                  dan langsung dengan menggunakan API OpenWeatherMap. <br />
                  Dapat memasukkan lokasi tertentu untuk melihat informasi
                  <br /> cuaca dan prakiraan cuaca singkat saat ini. Dengan
                  informasi
                  <br /> kondisi cuaca,suhu,kelembaban, dan kecepatan angin.
                </p>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col border-[2px] rounded-xl justify-center items-center gap-4 p-5 bg-[#020611]">
            <Image
              src={Curved}
              alt=""
              className="w-[300px] max-sm:w-[350px] h-auto rounded-xl cursor-pointer "
            />

            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-xl max-sm:text-xl max-2xl:text-2xl font-extrabold">
                  Huddle Curved
                </h1>
                <motion.button
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.7 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a href="https://curved.vercel.app/" target="_blank">
                    <Image src={Visit} alt="" className="w-[30px] " />
                  </a>
                </motion.button>
              </div>

              <div className="flex gap-2 mt-1 ">
                <p className=" text-xs max-sm:text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  HTML
                </p>
                <p className=" text-xs max-sm:text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  CSS
                </p>
              </div>
              <div className="pt-2 pr-6 ">
                <p className="max-sm:text-[10px]">
                  Huddle Curved desain website yang saya ambil dari paltform{" "}
                  <br />{" "}
                  <a
                    className="text-[#FD9A3E]"
                    href="https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2"
                  >
                    Mentor Frontend{" "}
                  </a>
                  pertama kali belajar membuat website, hanya <br /> dengan
                  menggunakan HTML dan CSS untuk latihan membuat <br /> web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
