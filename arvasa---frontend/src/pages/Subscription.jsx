import React from 'react'
import Navbar from '../components/Navbar'
import Content from '../components/Subscription/Content'
import Footer from '../components/Footer'
import Page from '../components/listing/Page'

const Subscription = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="bg-orange-50">
       <Page></Page>
        <Content />
    </div>
    <Footer></Footer>
    </>
  )
}

export default Subscription