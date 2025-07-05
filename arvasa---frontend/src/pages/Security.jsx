import React from 'react'
import Page from '../components/listing/Page'
const Security = () => {
    return (
        <div className='bg-orange-50 pt-[120px] pb-20'>
                <Page></Page>
            <div className='w-[97%] px-4 md:w-[80%] mx-auto'>
                <h1 className='text-4xl md:text-6xl font-bold'>Security Policy</h1>
                <p className='mt-8 text-xl'>Effective Date :  01/07/2025</p>

                <ul className='mt-12'>
                    <li className='text-2xl md:text-3xl font-semibold'>1 . Infrastructure :</li>
                    <li className='mt-3'>Hosted securely on cloud platforms with DDoS protection.
                    </li>
                </ul>

                <ul className='mt-12'>
                    <li className='text-2xl md:text-3xl font-semibold'>2 . User Data Protection :</li>
                    <li className='mt-3'>Data encrypted using AES-256, passwords hashed.
                    </li>
                </ul>

                <ul className='mt-12'>
                    <li className='text-2xl md:text-3xl font-semibold'>3 . Transactions :</li>
                    <li className='mt-3'>Processed via trusted gateways with smart contract automation.
                    </li>
                </ul>

                <ul className='mt-12'>
                    <li className='text-2xl md:text-3xl font-semibold'>4 . Threat Monitoring :</li>
                    <li className='mt-3'>Regular audits and user notifications in case of risks.
                    </li>
                </ul>

            

            </div>
        </div>
    )
}

export default Security
