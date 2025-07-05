import React from 'react'
import Page from '../components/listing/Page'
const PrivacyPolicy = () => {
    return (
        <div className='bg-orange-50 pt-[120px] pb-20'>
                <Page></Page>

            <div className='w-[97%] px-4 md:w-[80%] mx-auto'>
                <h1 className='text-4xl md:text-6xl font-bold'>Privacy Policy</h1>
                <p className='mt-8 text-xl'>Effective Date :  01/07/2025</p>
                <ul className='mt-12'>
                    <li className='text-2xl md:text-3xl font-semibold'>1 . Data Collection :</li>
                    <li className='mt-3'>We collect personal, financial, and device data for service delivery and analytics.
                    </li>
                </ul>

                <ul className='mt-12'>
                    <li className='text-2xl md:text-3xl font-semibold'>2 . Purpose :</li>
                    <li className='mt-3'>Used for account management, security, transactions, and personalization.
                    </li>
                </ul>

                <ul className='mt-12'>
                    <li className='text-2xl md:text-3xl font-semibold'>3 .  Data Sharing :</li>
                    <li className='mt-3'>Shared only with trusted partners or legal authorities when required.
                    </li>
                </ul>

                <ul className='mt-12'>
                    <li className='text-2xl md:text-3xl font-semibold'>4 . Security : </li>
                    <li className='mt-3'>Encrypted storage, hashed passwords, and blockchain-based record integrity.
                    </li>
                </ul>

                <ul className='mt-12'>
                    <li className='text-2xl md:text-3xl font-semibold'>5 . Your Rights : </li>
                    <li className='mt-3'>You can access, modify, or request deletion of your personal data.
                    </li>
                </ul>

                <ul className='mt-12'>
                    <li className='text-2xl md:text-3xl font-semibold'>6 . Data Retention : </li>
                    <li className='mt-3'>Data retained as required by legal and operational needs.
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default PrivacyPolicy
