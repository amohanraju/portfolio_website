import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import django from "@/public/DjangoProject.png";
import affirms from "@/public/Affirms.png";
import fakenews from "@/public/FakeNews.png";
import raju from "@/public/raju-properties.png";

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
    company: "Greenestep Technologies",
    role: "Software Developer Intern",
    location: "Clifton, VA",
    description:
      "For their child company, Affirms Inc, developed the preliminary website and used Javascript, Bootstrap, and Express. Additionally I worked on an Alexa Integration project where I helped to connect Alexa with our customer portal so that customers could easily reach tech support through voice command. Coded in python and used AWS Lambda for these integrations.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - Aug 2022",
  },
  {
    company: "Dewberry",
    role: "Software Engineering and Data Science Intern",
    location: "Fairfax, VA",
    description:
      "Automated our power bi deployment pipelines using the Power BI REST API as well as doing several data engineering projects with Microsoft Fabric, where I used Spark, SQL, and Python to code. One of the main projects I was involved with included developing a machine learning model to predict quarterly audit scores for each PM, BU, and Advocate Region and come to a decision on whether they meet corporate standards or not.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2023 - August 2023",
  },
  {
    company: "BNY",
    role: "Software Engineer Intern",
    location: "Pittsburgh, PA",
    description:
      "Integrated monitoring for SWIFT's Microgateway product onto BNY's existing enterprise financial messaging dashboard using Angular and Spring Boot. This ended up getting deployed to production is currently in use by our production services and EFM team for health check monitoring.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - August 2024",
  },
  {
    company: "Capital One",
    role: "Associate Software Engineer",
    location: "McLean, VA",
    description:
      "Contributing as a full-stack engineer in Capital One Software where our team is focused on the development of Databolt, a commercial tokenization product built to secure enterprise data for businesses.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2025 - Present",
  }
] as const;

export const projectsData = [
  {
    title: "Raju Properties App",
    description:
      "Developed a web application for residents that would be interested in subleasing any of our properties across the US and India. Currently in the process of developing applications for tenant and landlord usage while subleasing our properties.",
    tags: ["React", "TypeScript", "Postgres SQL", "Python", "Tailwind CSS"],
    imageUrl: raju,
  },
  {
    title: "Schedule Advisor App",
    description:
      "I worked on this project in a team of 5 being one of the main leaders and development experts. This project automates the advising process for all UVA advisors and students by allowing students to enroll in classes for the upcoming semester, send their schedule to the advisor, and instantly know if the schedule has been approved or rejected.",
    tags: ["Django", "Python", "Postgres SQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
    imageUrl: django,
  },
  {
    title: "Affirms Inc Company Website",
    description:
      "As a Software Developer Intern, I developed a website for Greenestep's child company, Affirms Inc which specializes in providing professional business services in taxes, accounting, billing, and hr. This website is the main website that is used by this company for product marketing and development.",
    tags: ["Firebase", "Express.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
    imageUrl: affirms,
  },
  {
    title: "Fake News Detector",
    description:
      "Hackathon project developed in which python and machine learning was utilized in order to scrape a list of top websites for a given news topic and be able to generate the accuracies of the articles using a sentimental analysis algorithm.",
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
  "Spring Boot",
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