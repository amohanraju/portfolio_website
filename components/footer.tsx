import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; Copyright 2023 Adarsh Mohanraju
      </small>
      <br />
      <div className = "flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
        <a className = "bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition" href="https://www.linkedin.com/in/adarsh-mohanraju-16366318a/"> <BsLinkedin className = "opacity-70"/> </a>
        <a className = "bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition" href="https://github.com/amohanraju"> <FaGithubSquare className = "opacity-70"/> </a>
      </div>
    </footer>
  );
}
