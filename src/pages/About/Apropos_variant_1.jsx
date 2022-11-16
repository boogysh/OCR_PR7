import React from 'react'
import Banner from '../../components/Banner/banner'
import DropDown from '../../components/dropDown/dropDown'

import aboutData from '../../data/aboutData'
import img_banner from '../../assets/apropos_header_bg.png'

import './Apropos.css'
import '../../components/dropDownContent/dropDownContent.css'


function Apropos(){
    console.log(window.location.href)
    return(
        <main className='flex_center_column'>
            <Banner src={img_banner}  title="" />
            <section className='container_content'>
                <DropDown 
                    title='Fiabilité' content={aboutData.fiability}  
                    classTitle='h3_DD_about' classContent='p_content_about'
                />
                <DropDown 
                    title='Respect' content={aboutData.respect} 
                    classTitle='h3_DD_about' classContent='p_content_about'
                />
                <DropDown 
                    title='Service' content={aboutData.service} 
                    classTitle='h3_DD_about' classContent='p_content_about'
                />
                <DropDown 
                    title='Responsabilité' content={aboutData.responsability} 
                    classTitle='h3_DD_about' classContent='p_content_about'
                />
            </section>
        </main>
    )
}
export default Apropos