import React from 'react'
import Contact from '@/components/contact/contact'
import Mail from '@/components/mail/mail'
import AboutSection from '@/components/aboutSection/aboutSection'
import ContactSection from '@/components/contactSection/contactSection'
import HomeSection from '@/components/homeSection/homeSection'
import ProjectSection from '@/components/projectSection/projectSection'
import ServicesSection from '@/components/serviceSection/serviceSection'
import SkillsSection from '@/components/skillsSection/skillsSection'

export default function Hero() {
  return (
    <div className='hero'>
        <HomeSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectSection/>
        <ServicesSection/>
        <ContactSection/>
        <Contact/>
        <Mail/>
    </div>
  )
}
