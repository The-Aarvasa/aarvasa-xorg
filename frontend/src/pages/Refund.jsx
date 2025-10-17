import React from 'react'
import Page from '../components/listing/Page'

const Refund = () => {
  return (
    <div className='bg-orange-50 pt-[120px] pb-20'>
      <Page />
      <div className='w-[97%] px-4 md:w-[80%] mx-auto'>
        <h1 className='text-4xl md:text-6xl font-bold'>Refund and Cancellation Policy</h1>

        {/* Moneyback Packages Section */}
        <div className='mt-12 space-y-6'>
          <h2 className='text-2xl md:text-3xl font-semibold'>Moneyback Packages</h2>
          <ul className='list-disc pl-6'>
            <li>For Resale: A non-refundable service and processing fee, equivalent to 25% of the total package price, will be deducted.</li>
            <li>For Rental: A non-refundable service and processing fee, equivalent to 25% of the total package price, will be deducted.</li>
            <li>GST on service charges is non-refundable.</li>
            <li>The property must remain unsold or unleased for a refund to be eligible.</li>
            <li>Refund request must be submitted within 7 days of package expiry.</li>
            <li>No refund if 30+ buyer/tenant contacts have been reached.</li>
            <li>The company may request documents to verify refund claims.</li>
            <li>Refund approval is at the sole discretion of the company and is final.</li>
            <li>Contact our support team for assistance (see "Contact Us" section).</li>
            <li>All disputes are subject to exclusive court jurisdiction.</li>
          </ul>
        </div>

        {/* Payment Policy Section */}
        <div className='mt-12 space-y-6'>
          <h2 className='text-2xl md:text-3xl font-semibold'>Payment Policy</h2>
          <ul className='list-disc pl-6'>
            <li>Access is granted upon payment for listing leads and services as agreed.</li>
            <li>Listings are shown based on user-selected filters; visibility is not guaranteed.</li>
            <li>The company may collect and host details like carpet area, pricing, address, etc.</li>
            <li>No assurance is given for lead quantity or order of listing visibility.</li>
            <li>Platform visibility data maintained by our internal system is final and binding.</li>
            <li>You confirm rights to publish your listings and agree to follow applicable laws.</li>
            <li>Violations may result in indemnification of the company by the user.</li>
            <li>All platform-related IP remains the sole property of the company.</li>
            <li>The company reserves the right to remove content at its discretion.</li>
          </ul>
        </div>

        {/* Refund and Cancellation Policy Section */}
        <div className='mt-12 space-y-6'>
          <h2 className='text-2xl md:text-3xl font-semibold'>Refund and Cancellation</h2>
          <ul className='list-disc pl-6'>
            <li>Subscription can be canceled anytime with a refund within 7 days if unused.</li>
            <li>Once a package starts, cancellation or termination is not allowed.</li>
            <li>If package activation is delayed by the user beyond 2 days post-payment, it's considered consumed — no refund.</li>
            <li>No cancellation/refund is allowed once a package goes live on the platform.</li>
            <li>Refunds, if any, are solely at the company’s discretion and are final.</li>
            <li className='lowercase'>ONCE THE REFUND IS APPROVED , AMOUNT WILL BE CREDITED BACK TO THE ORIGINAL PAYMENT METHOD WITHIN 3-5 WORKING DAYS .</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Refund
