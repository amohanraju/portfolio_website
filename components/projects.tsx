"use client"
import React from 'react'
import { projectsData} from "@/lib/data"
import Project from "./project"
import { useSectionInView} from "@/lib/hooks"

export default function projects() {
  const { ref } = useSectionInView("Projects", 0.25);
  return (
    <section ref = {ref} id="projects" className="scroll-mt-28">
      <h2 className = "text-3xl font-bold text-center"> My Projects </h2>
      <br />
        <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        </div>
    </section>
  )
}
