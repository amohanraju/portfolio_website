"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import {FaGithubSquare} from "react-icons/fa"
import profile_picture from "@/public/adarsh_profile_pic.jpg"
import {FaArrowCircleDown} from "react-icons/fa"
import { useSectionInView } from '@/lib/hooks';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const {ref} = useSectionInView("Home", 0.5)
  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
  return (
    <section ref = {ref} id="home" className="scroll-mt-[100rem]">
        <div className = "flex items-center justify-center">
            <div>
                <Image src = {profile_picture} alt="Adarsh portrait" width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-42 w-42 object-cover border-[0.35rem] border-white shadow-xl"/>
            </div>
        </div>
        <br />
        <motion.h1 className = "text-center text-4xl font-bold">
          Hello I'm Adarsh!
        </motion.h1>
      <motion.div className = "container mx-auto"> 
        <motion.p className = "mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        > 
        I'm a recent {" "} graduate from the University of Virginia with a major in computer science and minor in data science. I am very passionate about {" "} 
        <span> learning and growing </span> in fields such as{" "}
        <span className = "font-bold"> software engineering/development and AI.</span> I love the challenge of solving {" "}
        <span> rigorous problems </span> and coming up with {" "}
        <span> innovative solutions on the industry scale. </span> I enjoy working in a {" "}
        <span className = "font-bold"> fast-paced, competitive work environment </span> and seek for opportunities in which I can showcase my skills and experience to make a meaningful impact.
        </motion.p>
      </motion.div>

      <motion.div className = "flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium" 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay: 0.1,}}>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a className = "bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition" href="/Adarsh - Resume1.pdf" download> Download Resume <HiDownload className = "opacity-70" /> </a>
        <a className = "bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition" href="https://www.linkedin.com/in/adarsh-mohanraju-16366318a/"> <BsLinkedin className = "opacity-70"/> </a>
        <a className = "bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition" href="https://github.com/amohanraju"> <FaGithubSquare className = "opacity-70"/> </a>
      </motion.div>
      <br />
      <br />
      <h3 className="text-center font-bold text-lg"> Learn More Below!</h3>
      <br />
      <div className = "flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium sm: pb-30 hidden lg:flex">
        <a className = "bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-80 transition" href="#about"> <FaArrowCircleDown className = "opacity-70" size={'1.5em'} /> </a>
      </div>
    </section>
  )
}
