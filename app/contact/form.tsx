"use client";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const Form: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Mohon lengkapi semua kolom formulir!");
      return;
    }

    try {
      const formData = {
        Name: name,
        Email: email,
        Message: message,
      };
      if (!formData.Name || !formData.Email || !formData.Message) {
        toast.error("Mohon lengkapi semua kolom formulir!");
        return;
      }

      const response = await axios.post(
        "https://sheet.best/api/sheets/f2330e67-8f57-4f5d-baae-83b0ffca70a7",
        formData
      );
      setName("");
      setEmail("");
      setMessage("");
      console.log(response.data);
      toast.success("Berhasil terkirim!");
    } catch (error) {
      toast.error("Terjadi kesalahan saat mengirim formulir.");
    }
  };

  return (
    <div className="flex flex-col justify-start items-start gap-3  ">
      <h1 className="text-5xl max-sm:text-xl font-extrabold leading-normal text-[#FD9A3E]">
        Mari bahas proyek Anda
      </h1>
      <p className=" text-xl max-sm:text-xs">
        Anda dapat menghubungi saya melalui email atau WhatsApp, serta memindai{" "}
        <br /> kode QR atau pesan di bawah ini.
      </p>
      <div>
        <form
          action=""
          className="bg-[#27272a] border-2 rounded-lg px-10 py-14 max-sm:mr-7"
          onSubmit={handleSubmit}
        >
          <div >
          <div className="relative z-0 ">
            <input
              type="text"
              id="standard_success"
              aria-describedby="standard_success_help"
              className="block py-2.5 px-0 w-[300px] text-sm text-white bg-transparent  
            border-b-2  appearance-none dark:text-white dark:border-white border-white
           dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              htmlFor="standard_success"
              className="absolute text-sm text-white dark:text-white duration-300 transform 
            -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 mt-4">
            <input
              type="email"
              id="standard_success"
              aria-describedby="standard_success_help"
              className="block py-2.5 px-0 w-[300px] text-sm text-white bg-transparent  
            border-b-2  appearance-none dark:text-white dark:border-white border-white
           dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="standard_success"
              className="absolute text-sm text-white dark:text-white duration-300 transform 
              -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 mt-4 mb-10 ">
            <textarea
              id="standard_success"
              aria-describedby="standard_success_help"
              className="block py-2.5 px-0 w-[300px] text-sm text-white bg-transparent  
            border-b-2  appearance-none dark:text-white dark:border-white border-white
           dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label
              htmlFor="standard_success"
              className="absolute text-sm text-white dark:text-white duration-300 transform 
              -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Message
            </label>
          </div>
          </div>
          
          <motion.button
            whileFocus={{ backgroundColor: "#FD9A3E" }}
            whileHover={{ backgroundColor: "#FDB13E" }}
            whileTap={{ backgroundColor: "#FFE8C5" }}
            className="flex justify-center items-center gap-3 rounded-2xl bg-[#FD9A3E] py-[10px] px-[25px]
            text-xl font-bold leading-normal max-2xl:text-xs max-2xl:px-[25px] max-2xl:rounded-xl ml-20 max-sm:ml-24"
          >
            Submit
            <Toaster />
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Form;
