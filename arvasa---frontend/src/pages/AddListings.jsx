import React from 'react'
import AddListing from '../components/AddListingPages/AddListing';
import Page from '../components/listing/Page';
import Footer from '../components/Footer';
import ListingProcess from '../components/AddListingPages/ListingProcess';
const AddListings = () => {
  return (
    <>
    <div className='bg-[#fffcf2] pt-[90px] pb-[100px]'>
      <Page></Page>
      <ListingProcess></ListingProcess>
    </div>
    </>
  )
}

export default AddListings
