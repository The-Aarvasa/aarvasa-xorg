import React from 'react'
import Navbar from '../components/Navbar'
import Info from '../components/About/Info'
import Team from '../components/About/Team'
import Milestones from '../components/About/Milestones'
import { Geographic } from "../components/Home/Geographic"
import ContactUs from '../components/About/ContactUs'
import CoPartners from '../components/About/CoPartners'
import Map from '../components/Home/Map'
import Slider from '../components/About/Slider'
import Page from '../components/listing/Page'
import NavbarRaw from '../components/NavbarRaw'
import Footer from '../components/Footer'
const About = () => {
    
  return (
    <>

        <div className='bg-orange-50 pt-[10px] mb-[20px]'>
<Page></Page>
          <Info/>
        <Milestones/>
        <Team/>
        <Slider/>
        <Map />
        <CoPartners/>
        <ContactUs/>
        </div>

    </>

  )
}

export default About