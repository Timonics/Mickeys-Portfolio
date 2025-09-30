import React from 'react'
import Hero from './components/Hero'
import CTA from './components/CTA'
import MyStory from './components/MyStory'
import PersonalInfo from './components/PersonalInfo'
import Skills from './components/Skills'
import Values from './components/Values'

const AboutMe: React.FC = () => {
  return (
    <main className='max-w-4xl mx-auto '>
      <Hero />
      <PersonalInfo />
      <MyStory />
      <Skills />
      <Values />
      <CTA />
    </main>
  )
}

export default AboutMe