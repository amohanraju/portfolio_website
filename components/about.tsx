"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import {FaGithubSquare} from "react-icons/fa"
import profile_picture from "@/public/adarsh_profile.png"
import {FaArrowCircleDown} from "react-icons/fa"

export default function about(){
    return (
        <section className = "mb-28 sm:mb-40">
            <h2 className = "text-2xl font-bold text-center"> About Me </h2>
            <br />
            <div className = "container mx-auto">
                <p>
                I was born in Arlington, VA and currently live in Clifton, VA. I am
                currently majoring in Computer Science with a minor in Data Science at UVA. While growing up, I was involved in a lot
                of activities such as chess, robotics, science olympiad, mathcounts, etc. and this is where my problem solving skills really grew.
                Doing these activities from childhood to high school made me realize how much I love coming up with solutions and going through the process of implementing them in order to 
                solve the most difficult challenges. 
                </p>
                <br />
                <p>
                With our world today, now being operated by the latest technologies and software, I knew from then that applying my problem solving skills in this field 
                would not only make the biggest impact, but be the most rewarding experience for me personally. I hope to become a software engineer that not only gets the job done but
                constantly goes above and beyond in developing the best products and solutions for a customer/client's needs. Outside of my academics and career, I enjoy playing soccer, working out,
                hiking, watching NFL, and traveling.
                </p>
            </div>
        </section>
    )
}

