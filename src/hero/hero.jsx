import Contact from '@/contact/contact'
import Mail from '@/mail/mail'
import SectionAbout from '@/sectionAbout/sectionAbout'
import SectionContact from '@/sectionContact/sectionContact'
import SectionHome from '@/sectionHome/sectionHome'
import SectionProject from '@/sectionProject/sectionProject'
import SectionServices from '@/sectionService/sectionServices'
import SectionSkills from '@/sectionSkills/sectionSkills'
import React from 'react'

export default function Hero() {
  return (
    <div className='hero'>
        <SectionHome/>
        <SectionAbout/>
        <SectionSkills/>
        <SectionProject/>
        <SectionServices/>
        <SectionContact/>
        <Contact/>
        <Mail/>
    </div>
  )
}
