"use client";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { useState } from 'react';
import axios from "axios";



const Form: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const formData = {
        Name:name,
        Email:email,
        Message:message,
      };
  
      const response = await axios.post(
        "https://sheet.best/api/sheets/f2330e67-8f57-4f5d-baae-83b0ffca70a7",
        formData
      );
  
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col justify-start items-start gap-3  ">
            <h1 className="text-5xl max-sm:text-xl font-extrabold leading-normal text-[#FD9A3E]">
              Mari bahas proyek Anda
            </h1>
            <p className=" text-xl max-sm:text-xs">
              Anda dapat menghubungi saya melalui email atau WhatsApp, serta
              memindai <br /> kode QR atau pesan di bawah ini.
            </p>
            <form action="" className="" onSubmit={handleSubmit}>
              <div className={`relative mb-4`}>
                <input
                  type="text"
                  id="input"
                  className="peer w-[349px] h-[45px] rounded-lg border-white border-[2px] pl-3 hover:border-[#8D8D8D]  duration-300 ease-in-out  
              bg-[#1A1919] 
              px-3 py-3 font-sans text-sm font-normal 
              text-blue-gray-700 outline outline-0 transition-all 
              placeholder-shown:border placeholder-shown:border-white 
              placeholder-shown:border-t-white focus:border-[2px] focus:border-[#FD9A3E]
              focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label
                  htmlFor="input"
                  className="before:content[' '] after:content[' '] pointer-events-none absolute  text-xs 
              left-0 bottom-[6px] flex h-full w-full select-none text-[11px] font-normal leading-tight 
              text-blue-gray-400 transition-all 
              before:pointer-events-none      after:pointer-events-none after:mt-[7px]      peer-placeholder-shown:text-sm
              before:mt-[6.5px]               after:ml-1                                    peer-placeholder-shown:leading-[4.1] 
              before:mr-1                     after:box-border                              peer-placeholder-shown:text-blue-gray-500
              before:box-border               after:block                                   peer-placeholder-shown:before:border-transparent
              before:block                    after:h-1.5                                   peer-placeholder-shown:after:border-transparent
              before:h-1.5                    after:w-2.5                                   peer-focus:text-[11px] 
              before:w-2.5                    after:flex-grow                               peer-focus:leading-tight
              before:rounded-tl-md            after:rounded-tr-md                           peer-focus:text-[#FD9A3E]                      
              before:border-t                 after:border-t                                peer-focus:before:border-t-2
              before:border-l                 after:border-r                                peer-focus:before:border-l-2
              before:border-blue-gray-200     after:border-blue-gray-200                    peer-focus:before:!border-[#FD9A3E]         
              before:transition-all           after:transition-all                          peer-focus:after:border-t-2        
              
              peer-focus:after:border-r-2          peer-disabled:after:border-transparent 
              peer-focus:after:!border-[#FD9A3E] peer-disabled:peer-placeholder-shown:text-gray-500
              peer-disabled:text-transparent
              peer-disabled:before:border-transparent"
                >
                  Name
                </label>
              </div>

              <div className={`relative mb-4`}>
                <input
                  type="email"
                  id="input"
                  className="peer w-[349px] h-[45px] rounded-lg border-white border-[2px] pl-3 hover:border-[#8D8D8D] duration-300 ease-in-out  
              bg-[#1A1919] 
              px-3 py-3 font-sans text-sm font-normal 
              text-blue-gray-700 outline outline-0 transition-all 
              placeholder-shown:border placeholder-shown:border-white 
              placeholder-shown:border-t-white focus:border-[2px] focus:border-[#FD9A3E]
              focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="input"
                  className="before:content[' '] after:content[' '] pointer-events-none absolute  text-xs 
              left-0 bottom-[6px] flex h-full w-full select-none text-[11px] font-normal leading-tight 
              text-blue-gray-400 transition-all 
              before:pointer-events-none      after:pointer-events-none after:mt-[7px]      peer-placeholder-shown:text-sm
              before:mt-[6.5px]               after:ml-1                                    peer-placeholder-shown:leading-[4.1] 
              before:mr-1                     after:box-border                              peer-placeholder-shown:text-blue-gray-500
              before:box-border               after:block                                   peer-placeholder-shown:before:border-transparent
              before:block                    after:h-1.5                                   peer-placeholder-shown:after:border-transparent
              before:h-1.5                    after:w-2.5                                   peer-focus:text-[11px] 
              before:w-2.5                    after:flex-grow                               peer-focus:leading-tight
              before:rounded-tl-md            after:rounded-tr-md                           peer-focus:text-[#FD9A3E]                      
              before:border-t                 after:border-t                                peer-focus:before:border-t-2
              before:border-l                 after:border-r                                peer-focus:before:border-l-2
              before:border-blue-gray-200     after:border-blue-gray-200                    peer-focus:before:!border-[#FD9A3E]         
              before:transition-all           after:transition-all                          peer-focus:after:border-t-2        
              
              peer-focus:after:border-r-2          peer-disabled:after:border-transparent 
              peer-focus:after:!border-[#FD9A3E] peer-disabled:peer-placeholder-shown:text-gray-500
              peer-disabled:text-transparent
              peer-disabled:before:border-transparent"
                >
                  Email
                </label>
              </div>
              <div className="relative mb-4">
                <textarea
                  id="input"
                  className="peer w-[349px] h-[165px] rounded-lg border-white border-[2px] pl-3 hover:border-[#8D8D8D] duration-300 ease-in-out  
              bg-[#1A1919] 
              px-3 py-3 font-sans text-sm font-normal 
              text-blue-gray-700 outline outline-0 transition-all 
              placeholder-shown:border placeholder-shown:border-white 
              placeholder-shown:border-t-white focus:border-[2px] focus:border-[#FD9A3E]
              focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label
                  htmlFor="input"
                  className="before:content[' '] after:content[' '] pointer-events-none absolute  text-xs
              left-0 bottom-[6px] flex h-full w-full select-none text-[11px] font-normal leading-tight 
              text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 
              before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t 
              before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[7px] 
              after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t 
              after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] 
              peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] 
              peer-focus:leading-tight peer-focus:text-[#FD9A3E] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#FD9A3E] peer-focus:after:border-t-2 
              peer-focus:after:border-r-2 peer-focus:after:!border-[#FD9A3E] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:hidden"
                >
                  Message
                </label>
              </div>

              <motion.button
                whileFocus={{ backgroundColor: "#FD9A3E" }}
                whileHover={{ backgroundColor: "#FDB13E" }}
                whileTap={{ backgroundColor: "#FFE8C5" }}
                className="flex justify-center items-center gap-3 rounded-2xl bg-[#FD9A3E] py-[15px] px-[30px]
            text-xl font-extrabold leading-normal max-2xl:text-xs max-2xl:px-[25px] max-2xl:rounded-xl"
              >
                SEND
              </motion.button>
            </form>
          </div>
  )
}

export default Form