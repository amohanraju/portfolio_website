"use client"
import React, { useEffect } from 'react'
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"
import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInView } from '@/lib/hooks'

export default function About(){
    const { ref } = useSectionInView("About");
    
    return (
        <section ref = {ref} className = "mb-28 sm:mb-40 scroll-mt-28" id="about">
            <h2 className = "text-3xl font-bold text-center"> About Me </h2>
            <br />
            <div className = "align-items-center container mx-auto">
                <center>
                    <p className = "text-lg max-w-[65%]">
                    I was born in Arlington, VA and live in Clifton, VA. I am
                    currently majoring in Computer Science with a minor in Data Science at UVA. While growing up, I was involved in a lot
                    of activities such as chess, robotics, science olympiad, mathcounts, etc. and this is where my problem solving skills really grew.
                    Doing these activities from childhood to high school made me realize how much I love coming up with solutions and going through the process of implementing them in order to 
                    solve the most difficult challenges. 
                    </p>
                </center>
                <br />
                <center>
                    <p className = "text-lg max-w-[65%]">
                    With our world today now being operated by the latest technologies and software, I knew from then that applying my problem solving skills in this field 
                    would not only make the biggest impact, but be the most rewarding experience for me personally. I hope to become a software engineer that not only gets the job done but
                    constantly goes above and beyond in developing the best products and solutions for a customer/client's needs. Outside of my academics and career, I enjoy playing soccer, working out,
                    hiking, watching NFL, and traveling.
                    </p>
                </center>
            </div>
        </section>
    )
}

