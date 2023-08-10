import React from 'react'
import Intro from '@/components/intro'
import SectionDivider from '@/components/sectiondivider'
import About from '@/components/about'
import Projects from '@/components/projects'

export default function Home() {
  return (
    <main>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  )
}
