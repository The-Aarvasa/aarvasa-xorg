import React from 'react'
import Navbar from '../components/Navbar'
import Content from '../components/Subscription/Content'
import Footer from '../components/Footer'
import Page from '../components/listing/Page'

const Subscription = () => {
  return (
    <>
    <div className="bg-orange-50 dark:bg-black pb-[80px] pt-[100px]">
       <Page></Page>
        <Content />
    </div>
    </>
  )
}

export default Subscription