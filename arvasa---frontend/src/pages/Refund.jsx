import React from 'react'
import Page from '../components/listing/Page'
const Refund = () => {
  return (
        <div className='bg-orange-50 pt-[120px] pb-20'>
            <Page></Page>

            <div className='w-[97%] px-4 md:w-[80%] mx-auto'>
                <h1 className='text-4xl md:text-6xl font-bold'>Refund and Cancellation Policy</h1>
                <p className='mt-8 text-xl'>Effective Date :  01/07/2025</p>

                <ul className='mt-12'>
                    <li className='text-2xl md:text-3xl font-semibold'>1 . Property Investments :</li>
                    <li className='mt-3'>Non-refundable after confirmation unless otherwise stated.
                    </li>
                </ul>

                <ul className='mt-12'>
                    <li className='text-2xl md:text-3xl font-semibold'>2 . Subscriptions :</li>
                    <li className='mt-3'>Refunds available within 7 days if not used. No refunds after usage.

                    </li>
                </ul>

                <ul className='mt-12'>
                    <li className='text-2xl md:text-3xl font-semibold'>3 . Cancellation :</li>
                    <li className='mt-3'>Subscriptions can be cancelled anytime. Property agreements may carry penalties.

                    </li>
                </ul>

                
            </div>
        </div>
    )
}

export default Refund
