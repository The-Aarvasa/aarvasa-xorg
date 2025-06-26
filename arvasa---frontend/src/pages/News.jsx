import React from 'react'
import Newshero from '../components/News/Newshero'
import Navbar from '../components/Navbar'
import Newscards from '../components/News/Newscards'
import Footer from '../components/Footer'
import Page from '../components/listing/Page'
const News = () => {
  return (
    <div className='bg-orange-50 pt-[90px]'>
        <Page></Page>
        <Newshero />
        <Newscards />

    </div>
  )
}

export default News