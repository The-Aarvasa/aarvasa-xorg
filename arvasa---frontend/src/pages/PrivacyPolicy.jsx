import React from 'react';
import Page from '../components/listing/Page';

const PrivacyPolicy = () => {
    return (
        <div className='bg-orange-50 pt-[120px] pb-20'>
            <Page />
            <div className='w-[97%] px-4 md:w-[80%] mx-auto'>
                <h1 className='text-4xl md:text-6xl font-bold'>Privacy Policy</h1>
                        <p className='mt-8 text-xl'>Effective Date: 01/07/2025</p>


                <div className='mt-12 space-y-10 text-lg leading-7'>

                    <h2 className='text-2xl font-semibold'>1. Introduction</h2>
                    <p>Aarvasa Innovations Private Limited ("Aarvasa", "we", "us", or "our") is committed to protecting your privacy when using our website, apps, APIs, or services ("Services"). By using our Services, you consent to this Privacy Policy. If you disagree, do not use our Services. This policy works alongside our <a className='text-blue-600 underline' href='https://www.aarvasa.com/termsandconditions' target='_blank'>Terms of Service</a>.</p>

                    <h2 className='text-2xl font-semibold'>2. Data Collection: Categories and Methods</h2>
                    <p><strong>A. User-Provided Data:</strong></p>
                    <ul className='list-disc ml-6'>
                        <li><strong>Account Info:</strong> Name, DOB, Aadhaar/PAN, address, phone, email, job info.</li>
                        <li><strong>Transactions:</strong> UPI, card, bank details, investment behavior.</li>
                        <li><strong>Support:</strong> Emails, chats, feedback, survey responses.</li>
                    </ul>
                    <p><strong>B. Automatically Collected Data:</strong> IP, browser, device, clickstream (via Google Analytics 4).</p>
                    <p><strong>C. Third-Party Sources:</strong> LinkedIn/X profiles via SSO, credit info (e.g., CIBIL) with consent.</p>

                    <h2 className='text-2xl font-semibold'>3. Purpose of Data Processing</h2>
                    <ul className='list-disc ml-6'>
                        <li><strong>Contractual:</strong> Account, transactions, support.</li>
                        <li><strong>Legal:</strong> Fraud, tax (Form 26AS), court orders.</li>
                        <li><strong>Legitimate Interest:</strong> Optimization, marketing (opt-out available).</li>
                        <li><strong>Consent:</strong> Newsletters, third-party sharing.</li>
                    </ul>

                    <h2 className='text-2xl font-semibold'>4. Disclosures and Data Sharing</h2>
                    <ul className='list-disc ml-6'>
                        <li><strong>Service Providers:</strong> AWS (Mumbai), Razorpay, BillDesk.</li>
                        <li><strong>Regulators:</strong> SEBI, RBI, law enforcement.</li>
                        <li><strong>Business Transfers:</strong> In mergers/acquisitions with notice.</li>
                    </ul>
                    <p>We never sell your data for advertising purposes.</p>

                    <h2 className='text-2xl font-semibold'>5. User Rights and Controls</h2>
                    <ul className='list-disc ml-6'>
                        <li><strong>Access:</strong> Export data from Dashboard in CSV/PDF.</li>
                        <li><strong>Rectify/Delete:</strong> Fix errors unless retention is required.</li>
                        <li><strong>Marketing:</strong> Unsubscribe from emails or use <a className='text-blue-600 underline' href='https://adssettings.google.com' target='_blank'>Google Ads Settings</a>.</li>
                    </ul>

                    <h2 className='text-2xl font-semibold'>6. Security Measures</h2>
                    <ul className='list-disc ml-6'>
                        <li>AES-256 for storage, TLS 1.3 in-transit encryption.</li>
                        <li>Role-based access and employee biometrics.</li>
                        <li>Blockchain logs for sensitive transactions.</li>
                        <li>User Tips: Enable 2FA. Never share passwords insecurely.</li>
                    </ul>

                    <h2 className='text-2xl font-semibold'>7. Data Retention Schedule</h2>
                    <ul className='list-disc ml-6'>
                        <li>KYC: 10 years post-closure</li>
                        <li>Transaction History: 7 years (as per IT Act)</li>
                        <li>Marketing Preferences: Until user opts out</li>
                    </ul>

                    <h2 className='text-2xl font-semibold'>8. International Transfers</h2>
                    <p>EU/UK data is processed in India with Standard Contractual Clauses (SCCs).</p>

                    <h2 className='text-2xl font-semibold'>9. Policy Changes</h2>
                    <p>We notify users of major changes 30 days in advance via email and app banners.</p>

                    <h2 className='text-2xl font-semibold'>10. Grievance Redressal</h2>
                    <p>Data Protection Officer (DPO):</p>
                    <ul className='list-disc ml-6'>
                        <li>Email: dpo@aarvasa.com</li>
                        <li>Mailing Address: Aarvasa Innovations Pvt. Ltd., [Insert Registered Office Address], Noida, UP – 201301</li>
                        <li>EU contact: [Insert Article 27 Representative details]</li>
                    </ul>

                    <h2 className='text-2xl font-semibold'>11. Jurisdiction-Specific Disclosures</h2>
                    <p><strong>California (CCPA):</strong></p>
                    <ul className='list-disc ml-6'>
                        <li>Opt out of data "sales" (we don't sell).</li>
                        <li>Submit requests via <a className='text-blue-600 underline' href='https://privacy.aarvasa.com/ccpa' target='_blank'>privacy.aarvasa.com/ccpa</a></li>
                    </ul>
                    <p><strong>EU (GDPR):</strong> Refer to Section 3 for Legal Basis. Right to file complaints with authorities.</p>

                    <p className='italic'>This version replaces all previous editions. © 2024 Aarvasa Technologies Pvt. Ltd. All rights reserved. “Aarvasa” and the lotus symbol are trademarks.</p>

                    

                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
