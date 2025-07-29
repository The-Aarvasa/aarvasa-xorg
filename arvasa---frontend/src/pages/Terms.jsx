import React from 'react'
import Page from '../components/listing/Page'
import { Link } from 'react-router-dom';
const Terms = () => {
    return (
        <div className='bg-orange-50 pt-[120px] pb-20'>
            <Page></Page>

            <div className='w-[97%] px-4 md:w-[80%] mx-auto'>
                <h1 className='text-3xl md:text-4xl font-semibold'>Terms and Conditions</h1>
                <p className='mt-8 text-xl'>THIS AGREEMENT IS LEGALLY BINDING. READ IT CAREFULLY, PLEASE. </p>

                <ul className='mt-12'>
                    <li className='text-xl md:text-2xl font-medium' typeof='none'>Article 1: Overview and Acceptance
                        <br />
                        <ul typeof='none' className='text-lg md:text-md font-light'>
                            <li>1.1. The Participants: We, the person or legal entity accessing or using the Platform (henceforth
                                referred to as the "User"), and Aarvasa Innovations Pvt. Ltd., a private limited company
                                incorporated under Indian law with its registered office in Bhopal, Madhya Pradesh, India
                                (henceforth referred to as "Aarvasa," "Company," "we," "us," or "our"), have entered into this
                                Agreement.</li><br />
                            <li>1.2. Aarvasa's websites (including all subdomains), mobile applications, software, application
                                programming interfaces (APIs), notifications, and all related services, tools, and content will all
                                be referred to as the "Platform" for the purposes of this Agreement. </li><br />
                            <li>1.3. Binding Nature: This Agreement constitutes the whole, comprehensive, and exclusive
                                agreement between you and Aarvasa, together with our Privacy Policy, Investment Risk
                                Disclosure, Fee Schedule, and any other rules or policies published on the Platform. All previous
                                and current written or verbal agreements, proposals, or representations pertaining to its subject
                                matter are superseded by this agreement.</li><br />
                            <li>1.4. Consent: By selecting "I Agree," registering, or using the Platform in any other way, you attest
                                that you have read, comprehended, and agree to be bound by all of the terms stated here. You must
                                stop using the Platform right away if you disagree with any part of this agreement.</li><br />
                        </ul>
                    </li>
                </ul>


                <ul className='mt-12'>
                    <li className='text-xl md:text-2xl font-medium' typeof='none'>
                        Article 2: Definitions and Interpretations
                        <br />
                        <ul typeof='none' className='text-lg md:text-md font-light'>
                            <li>2.1. Definitions: (a) "Affiliate" refers to any other entity that either directly or indirectly controls, is
                                controlled by, or shares control with an entity. </li><br />
                            <li>(b) "AI Insights" refers to the data, analytics, market forecasts, and other information produced by
                                Aarvasa's in-house algorithms and offered solely for informational purposes.</li><br />
                            <li>(c) According to the Prevention of Money Laundering Act, 2002 (PMLA), "AML" stands for Anti-
                                Money Laundering.</li><br />
                            <li>(d) "AR/VR Content" refers to the representations of properties in virtual and augmented reality.</li><br />
                            <li>(e) Any non-public information that is designated as confidential or that, given the circumstances of
                                disclosure and the nature of the information, should be interpreted as such is considered
                                "Confidential Information." This includes information that is communicated verbally or in writing
                                between two parties.</li><br />
                            <li>(f) A "Force Majeure Event" is any event that is beyond a party's reasonable control, such as a
                                pandemic, epidemic, war, terrorism, riot, civil unrest, fire, flood, earthquake, governmental action,
                                utility failure, or an act of God. </li><br />
                            <li>(g) "Intellectual Property Rights" refers to any type of intellectual property rights that are
                                acknowledged in any jurisdiction, including trade secrets, trademarks, copyrights, patents, and moral
                                rights.</li><br />
                            <li>(h) The term "Investment Services" describes the Platform's facilitation services for real estate
                                investment opportunities, which can be set up as fractional ownership through a Special Purpose
                                Vehicle (SPV) or other legally acceptable methods. </li><br />
                            <li>(i) "KYC" stands for "Know Your Customer," which is the procedure required by Indian law to confirm
                                our users' identities.</li><br />
                            <li>(j) The set of tools for automating certain parts of the property leasing lifecycle is referred to as
                                "Leasing Automation."</li><br />
                            <li>(k) A "Material Breach" is defined as a violation of this Agreement that is so serious that it
                                compromises the entire agreement. </li><br />
                            <li>(l) A real estate asset listed on the Platform is referred to as "property."</li><br />
                            <li>(m) The Real Estate (Regulation and Development) Act, 2016 and the regulations of the applicable
                                state authority are referred to as "RERA." </li><br />
                            <li>(n) The Securities and Exchange Board of India is referred to as "SEBI." </li><br />
                            <li>(o) "Special Purpose Vehicle" or "SPV" refers to a legal entity, usually a limited liability partnership
                                (LLP) or private limited company, established to hold title to a particular property in order to
                                facilitate fractional investment. </li><br />
                            <li>(p) Any information that a User uploads, posts, or transmits on the Platform, including text, images,
                                reviews, and other materials, is referred to as "User Content." </li><br />

                        </ul>
                    </li>
                </ul>


                <ul className='mt-12'>
                    <li className='text-xl md:text-2xl font-medium' typeof='none'>ARTICLE 3: USER REPRESENTATIONS AND Eligibility
                        <br />
                        <ul typeof='none' className='text-lg md:text-md font-light'>
                            <li>3.1. Qualifications: According to the Indian Contract Act of 1872, you must either (i) be an individual
                                who is at least eighteen years old and competent to enter into contracts, or (ii) a legally recognized
                                organization (company, limited liability partnership, or trust) that is properly structured and
                                operative under the laws of your jurisdiction. Persons of Indian Origin (PIOs) and Non-Resident
                                Indians (NRIs) are required to abide by the Foreign Exchange Management Act of 1999 (FEMA).</li><br />
                            <li>3.2. Account Registration and Security: (a) During the registration process, you promise to provide
                                true, accurate, complete, and current information, and to keep it updated to ensure its accuracy. </li><br />
                            <li>(b) All activities carried out through your account and password security are entirely your
                                responsibility. If you violate this security requirement, Aarvasa cannot and will not be responsible for
                                any loss or damage. </li><br />
                            <li>(c) If you suspect or confirm any unauthorized use of your account, you must contact us right away
                                at security@aarvasa.com. </li><br />

                            <li>
                                3.3. Warranties and Representations by Users: You certify, warrant, and covenant that: (a) You are
                                fully authorized by law to enter into and carry out your responsibilities under this agreement. </li><br />
                            <li>(b) No applicable law, rule, or ordinance will be broken by your use of the Platform.</li><br />
                            <li>(c) Neither an Indian nor an international sanctions list contains your name. </li><br />
                            <li>(d) All money invested via the Platform comes from legal sources and isn't the result of illicit activity.</li><br />
                        </ul>
                    </li>
                </ul>




                <ul className='mt-12'>
                    <li className='text-xl md:text-2xl font-medium' typeof='none'>Article 4: Detailed Service Scope
                        <br />
                        <ul typeof='none' className='text-lg md:text-md font-light'>
                            <li>4.1. Platform Characteristics: According to the Information Technology Act of 2000, Aarvasa is a
                                "intermediary" and a provider of technology services. We offer an impartial platform for bringing
                                together players in the real estate market. Unless otherwise specified in a separate, written
                                agreement, we are not a real estate broker, developer, portfolio manager, or investment advisor. </li><br />
                            <li>4.2. Property Listings & Information: Since property listings are supplied by third parties, we have no
                                control over their content. All information, including title, RERA registration, approvals, and physical
                                condition, must be independently verified by users.</li><br />
                            <li>4.3. AR/VR Content: For visualization purposes, this content is a digital simulation. It shouldn't be
                                taken as a to-scale or entirely accurate depiction of the finished property. There could be differences
                                in views, colors, finishes, and sizes.</li><br />
                            <li>4.4. AI Insights: These computer-generated insights are predicated on past data and presumptions.
                                They do not represent financial advice and are not a predictor of future market performance. Your
                                own knowledgeable financial and legal advisors should be consulted before making any investment
                                decisions.  </li><br />

                            <li>4.4. AI Insights: These computer-generated insights are predicated on past data and presumptions.
                                They do not represent financial advice and are not a predictor of future market performance. Your
                                own knowledgeable financial and legal advisors should be consulted before making any investment
                                decisions. </li><br />

                        </ul>
                    </li>
                </ul>



                <ul className='mt-12'>
                    <li className='text-xl md:text-2xl font-medium' typeof='none'>Article 5: Terms and Disclosures for Investment Services
                        <br />
                        <ul typeof='none' className='text-lg md:text-md font-light'>
                            <li>5.1. Recognition of High Risk: Investing in real estate is speculative and carries a high degree of risk,
                                including the possibility of losing your entire investment and the risk of liquidity. Only experienced
                                users who are prepared to accept these risks are supposed to use the platform. </li><br />
                            <li>5.2. No Advisory Services: Aarvasa does not offer tax, legal, or financial advice. No recommendation,
                                solicitation, or offer to purchase or sell any security or investment is made by the information on the
                                Platform. Your investment choices are entirely up to you.</li><br />
                            <li>5.3. Investment Structure: Generally, investments made possible by the Platform are set up as
                                fractional ownership through an SPV. In this model: </li><br />
                            <li>(a) You purchase securities in an SPV, such as shares or a partnership interest. </li><br />
                            <li>(b) The underlying property's legal title is held by the SPV.</li><br />
                            <li>(c) Through the SPV, you have indirect ownership.</li><br />
                            <li>(d) You must carefully review the specific shareholders' agreement, LLP agreement, and private
                                placement memorandum ("Offer Documents") for that SPV as they will govern all rights, obligations,
                                and terms pertaining to the investment. The Offer Documents take precedence over this Agreement. </li><br />
                            <li>5.4. Required Compliance with KYC/AML:</li><br />
                            <li>(a) Before making any investments, you must successfully finish our KYC and AML verification
                                process. Government-issued identification (such as an Aadhaar card or PAN card) must be presented
                                for this.</li><br />
                            <li>(b) If we suspect any non-compliance with AML regulations, we reserve the right to refuse or
                                suspend your account and to request more information at any time. </li><br />
                            <li>5.5. Funds Flow: To guarantee that funds are utilized for the intended purpose of purchasing real
                                estate, all investment funds will be transferred via a legally compliant mechanism, such as a
                                designated escrow account or a nodal account overseen by a third-party trustee.</li><br />
                            <li>5.6. You Are Responsible for Due Diligence: Aarvasa may offer specific due diligence reports from
                                outside legal or technical firms. The sole purpose of these reports is to provide information. To
                                confirm every facet of an investment opportunity, you must either hire your own advisors or
                                perform your own independent due diligence. </li><br />
                        </ul>
                    </li>
                </ul>




                <ul className='mt-12'>
                    <li className='text-xl md:text-2xl font-medium' typeof='none'>ARTICLE 6: PLATFORM INTEGRITY AND USER CONDUCT </li>
                    <br />
                    <ul typeof='none' className='text-lg md:text-md font-light'>
                        <li>6.1. Overarching Duties: You are expected to use the Platform responsibly, ethically, and
                            professionally.</li><br />
                        <li>6.2. Content Standards: No User Content that is (a) fraudulent, deceptive, or false may be posted,
                            uploaded, or transmitted.</li><br />
                        <li>(b) Violates the intellectual property rights or privacy/publicity rights of any third party.</li><br />
                        <li>(c) Is hateful, discriminatory, pornographic, obscene, libelous, or defamatory. </li><br />
                        <li>(d) Qualifies as "spam" or an unapproved commercial advertisement.</li><br />

                        <li>6.3. System Integrity: You are not allowed to: (a) Gather data from the Platform using any
                            automated methods (such as spiders, bots, or scrapers). </li><br />
                        <li>(b) Making an effort to decompile, reverse engineer, or otherwise find the Platform's source code. </li><br />
                        <li>(c) Willfully introducing malware, viruses, or other harmful code.</li><br />
                        <li>(d) Engaging in any activity that places an unjustifiably high burden on our infrastructure.</li><br />
                        <li>(e) Ignoring any security measures that we have implemented.</li><br />
                    </ul>
                </ul>



                <ul className='mt-12'>
                    <li className='text-xl md:text-2xl font-medium' typeof='none'> ARTICLE 7: COSTS, DEPOSITS, AND FINANCIAL TERMS</li>
                    <br />
                    <ul typeof='none' className='text-lg md:text-md font-light'>
                        <li>7.1. Fee Schedule: You consent to pay all relevant fees listed in our Fee Schedule, which may include
                            fees for premium services, platform access, and investment transaction fees. GST and other
                            applicable taxes are not included in any fees.</li><br />
                        <li>7.2. Invoicing and Payment: Depending on the circumstances, fees must be paid at the time of the
                            transaction or upon invoice. Interest on late payments may be assessed at the maximum rate
                            allowed by law, or at a rate of 1.5% per month. </li><br />
                        <li> 7.3. No Refunds: Unless we decide otherwise or as required by law, all fees paid to Aarvasa are final
                            and non-refundable.</li><br />
                    </ul>
                </ul>



                <ul className='mt-12'>
                    <li className='text-xl md:text-2xl font-medium' typeof='none'>Article 8: Confidentiality and Intellectual Property</li>
                    <br />
                    <ul typeof='none' className='text-lg md:text-md font-light'>
                        <li>8.1. Ownership: The Platform and all related intellectual property rights are owned by Aarvasa and
                            its licensors. You do not acquire any ownership rights under this agreement. Our registered
                            trademarks are the name "Aarvasa" and its logo.</li><br />
                        <li>8.2. User Content License: In order to run and advertise the Platform, you give Aarvasa a perpetual,
                            worldwide, non-exclusive, royalty-free, sublicensable license to use, reproduce, alter, display, and
                            distribute your User Content.
                        </li><br />
                        <li>8.3. Feedback: You consent to us using any ideas, suggestions, or feedback you give us for any
                            reason without requiring payment or acknowledgment from you.</li><br />
                        <li>8.4 Confidentiality: You pledge to keep all Aarvasa confidential information private and not share it
                            with outside parties. You will take the same level of care to protect such information as you do for
                            your own private information, but you will never take less care than is reasonable.</li><br />

                    </ul>
                </ul>


                <ul className='mt-12'>
                    <li className='text-xl md:text-2xl font-medium' typeof='none'>Article 9: Liability, indemnity, and disclaimers</li>
                    <br />
                    <ul typeof='none' className='text-lg md:text-md font-light'>
                        <li>9.1 WARRANTY DISCLAIMER: ALL SERVICES AND THE PLATFORM ARE GIVEN "AS IS" AND "AS
                            AVAILABLE." AARVASA DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, AND STATUTORY,
                            INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF NON-INFRINGEMENT,
                            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND QUIET ENJOYMENT. WE DO
                            NOT GUARANTEE THAT THE PLATFORM WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-
                            FREE, OR THAT ANY INFORMATION (INCLUDING PROPERTY LISTINGS AND AI INSIGHTS) WILL BE
                            ACCURATE OR RELIABLE.</li><br />
                        <li>9.2 LIABILITY LIMITATION:</li><br />
                        <li>(a) Exclusion of Indirect Damages: Whether or not we have been informed of the possibility of such
                            damages, AARVASA or its affiliates shall not be liable for any lost profits, lost data, loss of goodwill,
                            or any indirect, consequential, exclusionary, incidental, special, or punitive damages arising from or
                            related to this agreement or your use of the platform.</li><br />
                        <li>(b) Liability Cap: Regardless of the mode of action, our total cumulative liability to you for any and all
                            claims arising out of or related to this agreement or the platform will not exceed (I) the total amount
                            of money you paid to AarvASA during the three (3) months prior to the claim, or (II) ten thousand
                            Indian Rupees (₹10,000).</li><br />
                        <li>(c) Particular Exclusions: This comprehensive limitation of liability covers all damages, including but
                            not restricted to those resulting from unsuccessful transactions, disputes with other users, or losses
                            on investments. </li><br />

                        <li> 9.3. Indemnity: You agree to defend, indemnify, and hold harmless Aarvasa, its Affiliates, and their
                            respective officers, directors, employees, and agents from and against any and all third-party claims,
                            liabilities, damages, losses, and expenses (including reasonable attorneys' fees on a full indemnity
                            basis) that arise out of or are related in any way to (a) your use of the Platform or access to it; (b)
                            your User Content; (c) your breach of this Agreement; or (d) your violation of any law or third-party
                            rights. </li><br />
                    </ul>
                </ul>



                <ul className='mt-12'>
                    <li className='text-xl md:text-2xl font-medium' typeof='none'> ARTICLE 10: GOVERNANCE AND DISPUTE RESOLUTION
                    </li>
                    <br />
                    <ul typeof='none' className='text-lg md:text-md font-light'>
                        <li>10.1. Governing Law: The laws of India shall
                            govern and be interpreted in the interpretation of this Agreement.</li><br />
                        <li>10.2. Jurisdiction: For any dispute arising from this Agreement that is not subject to arbitration, the
                            courts in Bhopal, Madhya Pradesh, India, shall have sole and exclusive jurisdiction.</li><br />
                        <li> 10.3 Dispute Settlement Process: </li><br />
                        <li>(a) Informal Negotiation: Prior to starting arbitration, the parties agree to try to resolve any
                            disagreement amicably for at least thirty (30) days. </li><br />
                        <li>(b) Binding Arbitration: Under the Indian Arbitration and Conciliation Act of 1996, any dispute or
                            claim must be resolved by binding arbitration if negotiations are unsuccessful. A single arbitrator
                            chosen by both parties will preside over the arbitration. Bhopal, Madhya Pradesh, will serve as the
                            arbitration's seat and location. English will be the arbitration's language. The arbitrator's decision
                            will be final and enforceable.</li><br />
                    </ul>
                </ul>



                <ul className='mt-12'>
                    <li className='text-xl md:text-2xl font-medium' typeof='none'> ARTICLE 11: MECHANISMS OF GRIEVANCE REDRESSAL
                    </li>
                    <br />
                    <ul typeof='none' className='text-lg md:text-md font-light'>
                        <li>11.1. Officer for Grievances: The name and contact information of the Grievance Officer are listed
                            below in compliance with the Information Technology Act of 2000 and its regulations: </li><br />
                        <li>Name: [Insert Grievance Officer's Name]</li><br />
                        <li>Position: Aarvasa Innovations Pvt. Ltd. Grievance Officer; Address: [Insert Complete Company
                            Address, Bhopal] </li><br />
                        <li>Email address: grievance.officer@aarvasa.com</li><br />
                        <li>After receiving the complaint, the grievance officer has 24 hours to acknowledge it and 15 days to
                            resolve it. </li><br />
                    </ul>
                </ul>


                <ul className='mt-12'>
                    <li className='text-xl md:text-2xl font-medium' typeof='none'>ARTICLE 12: OVERALL TERMS
                    </li>
                    <br />
                    <ul typeof='none' className='text-lg md:text-md font-light'>
                        <li>12.1. Term and Termination: This Agreement takes effect when you use the Platform for the first
                            time and lasts until it is terminated. At our sole discretion and without prior notice, we may suspend
                            or terminate this Agreement and your account for any reason, including a Material Breach. Every
                            clause that should, by definition, endure termination will. </li><br />
                        <li>12.2 Assignment: Without our prior written consent, you are not permitted to transfer or assign your
                            rights or obligations under this agreement. We are free to assign this agreement. </li><br />
                        <li>12.3. No Waiver: We shall not be deemed to have waived any of our rights or obligations under this
                            Agreement if we fail to exercise or enforce any of them. </li><br />
                        <li>12.4. Severability: Should any clause be determined to be unenforceable or invalid, it will be reduced
                            or removed to the bare minimum required to maintain the full force and effect of this agreement.
                        </li><br />
                        <li>12.5. Notices: All correspondence with Aarvasa must be sent to legal@aarvasa.com and to our
                            registered office address via registered mail. You will receive notifications at the email address linked
                            to your account.</li><br />
                        <li> 12.6. Terms and Conditions: We reserve the right to change this agreement at any time. Any
                            significant changes will be communicated to you via email or by posting the updated terms on the
                            Platform. You agree to the changes if you keep using the Platform after receiving this notice. </li><br />
                        <li> 12.7. Whole Agreement: This agreement replaces all previous agreements on the subject matter and
                            represents the parties' final, comprehensive understanding.</li><br />
                        <li>Aarvasa Innovations Pvt. Ltd. [Insert Complete Company Address, Bhopal, Madhya Pradesh, India] is
                            the contact information.
                        </li><br />
                        <li><Link to="/chat">Contact@aarvasa.com for general inquiries </Link>
                        </li><br />
                    </ul>
                </ul>


            </div>
        </div>
    )
}

export default Terms
