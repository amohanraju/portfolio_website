import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import django from "@/public/DjangoProject.png";
import affirms from "@/public/Affirms.png";
import fakenews from "@/public/FakeNews.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Schedule Advisor App",
    description:
      "I worked on this project in a team of 4 being one of the main leaders and devops/development experts. This project automates the advising process for all UVA advisors and students by allowing students to enroll in classes for the upcoming semester, send their schedule to the advisor, and instantly know if the schedule has been approved or rejected.",
    tags: ["Django", "Python", "Postgres SQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
    imageUrl: django,
  },
  {
    title: "Affirms Inc Company Website",
    description:
      "As a Software Developer Intern, I developed a website for Greenestep's child company, Affirms Inc. This website is the main website that is used by this company for product marketing and development",
    tags: ["Firebase", "Express.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
    imageUrl: affirms,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Firebase",
  "Bootstrap",
  "Java",
  "C",
] as const;