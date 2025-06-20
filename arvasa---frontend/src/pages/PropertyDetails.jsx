import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/PropertyBrief/About'
import {Explore} from '../components/PropertyBrief/Explore'
// import Amenities from '../components/PropertyBrief/Amenities'
import Slider from '../components/About/Slider'
import Sale from '../components/PropertyBrief/Sale'
import Photos from '../components/PropertyBrief/Photos'

const PropertyDetails = () => {
  return (
    <>
        
        <div className='bg-orange-50 pt-[10px] mb-[20px] mx-2'>
            <Photos />
            <Sale />
            <About />
            <Explore />
            {/* <Amenities /> */}
            
        </div>
        <Slider />
       
    </>
    
  )
}

export default PropertyDetails