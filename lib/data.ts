import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
    title: "Software Developer Intern",
    location: "Clifton, VA",
    description:
      "I worked as a full stack developer intern for this company and was involved with developing their child company, Affirm's website. Used Javascript, Bootstrap, and Express to develop this website. Additionally I worked on an Alexa Integration project where I helped to connect Alexa with our customer portal so that customers could easily reach tech support through voice command. Coded in python and used AWS Lambda for these integrations.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - Aug 2022",
  },
  {
    title: "Software Engineering and Data Science Intern",
    location: "Fairfax, VA",
    description:
      "Currently this summer, I work as an intern for Dewberry where I worked on devops engineering specifically the automation of power bi deployment pipelines using the Power BI REST API. Additionally, I did several data engineering projects with Microsoft Fabric, where I used Spark, SQL, and Python to code. One of the main projects I was involved with included developing a machine learning model to predict quarterly audit scores for each PM, BU, and Advocate Region and come to a decision on whether they meet corporate standards or not.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2023 - August 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Schedule Advisor App",
    description:
      "I worked on this project in a team of 5 being one of the main leaders and development experts. This project automates the advising process for all UVA advisors and students by allowing students to enroll in classes for the upcoming semester, send their schedule to the advisor, and instantly know if the schedule has been approved or rejected. Deployed Website Link: https://b-13-project.herokuapp.com/ (ignore security warning).",
    tags: ["Django", "Python", "Postgres SQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
    imageUrl: django,
  },
  {
    title: "Affirms Inc Company Website",
    description:
      "As a Software Developer Intern, I developed a website for Greenestep's child company, Affirms Inc which specializes in providing professional business services in taxes, accounting, billing, and hr. This website is the main website that is used by this company for product marketing and development. Deployed Website Link: https://affirmsinc.com/).",
    tags: ["Firebase", "Express.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
    imageUrl: affirms,
  },
  {
    title: "Fake News Detector",
    description:
      "Hackathon project developed in which python and machine learning was utilized in order to scrape a list of top websites for a given news topic and be able to generate the accuracies of the articles using a sentimental analysis algorithm. Link to Devpost Project: https://devpost.com/software/fakesnake",
    tags: ["Python", "Machine Learning"],
    imageUrl: fakenews,
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

export const technicalSkillsData = [
  "Git",
  "Windows/Linux",
  "Agile Development",
  "Object-Oriented Programming",
  "Data Structures",
  "Algorithms",
  "Data Modeling & Analysis",
  "Data Engineering",
  "Software Testing",
  "Machine Learning/AI",
  "Full Stack Development",
] as const;