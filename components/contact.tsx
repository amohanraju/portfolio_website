"use client"
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import { useForm } from "react-hook-form";

export default function Contact() {
  const {ref} = useSectionInView("Contact")
  const {register, resetField} = useForm({
    mode: "onChange",
    defaultValues: {
        Email: "",
        Message: ""
    }
  })
  const handleClick = () =>(
    resetField("Email"),
    resetField("Message")
  )
  return (
    <center>
        <motion.section ref={ref} id ="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)]text-center scroll-mt-40"
            initial={{opacity:0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1
            }}> 
            <h2 className = "text-3xl font-bold text-center"> Contact Me </h2>
            <p className="text-gray-700 mt-2"> Please contact me directly at <a className="underline" href="mailto:adarshraju951@gmail.com"> adarshraju951@gmail.com </a> or through this form.</p>
            <form className="mt-10 flex flex-col justify-center items-center dark:text-black" action={async(formData) =>{
                await sendEmail(formData)
            }}>
            <input
          className="h-14 px-4 w-[50%] md:flex md:justify-center rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        {...register("Email")}
        name="Email"/>
        <textarea
          className="h-52 my-3 w-[50%] rounded-lg md:justify-center borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          {...register("Message")}
          name="Message"
          placeholder="Your message"
          required
          maxLength={5000}
          
        />
                <button onClick={handleClick} className="text-sm group flex items-center justify-center gap-2 h-[3rem] w-[6rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"> Reset Fields </button>
                <br />
                <button type="submit" className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"> Submit <FaPaperPlane className="text-xs opacity-70 transition-all" /> </button>
            </form>
        </motion.section>
    </center>
  )
}
