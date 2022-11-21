import React, { useState, useEffect } from 'react'
import Banner from '../../components/Banner/banner'
import DropDown from '../../components/dropDown/dropDown'
import aboutData from '../../data/aboutData'
import img_banner from '../../assets/apropos_header_bg.png'
import img_banner_mobile from '../../assets/apropos_header_bg_mobile.png'
import './about.css'
import '../../components/dropDownContent/dropDownContent.css'
import '../../components/Banner/banner.css'

function About() {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  )
  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches))
  }, [])

  return (
    <main className="flex_center_column">
      {matches && <Banner src={img_banner} />}
      {!matches && <Banner src={img_banner_mobile} />}
      <section className="container_content">
        <DropDown title="Fiabilité" content={aboutData.fiability} />
        <DropDown title="Respect" content={aboutData.respect} />
        <DropDown title="Service" content={aboutData.service} />
        <DropDown title="Responsabilité" content={aboutData.responsability} />
      </section>
    </main>
  )
}
export default About
