import React from 'react'
import Page from '../components/listing/Page'

const Security = () => {
    return (
        <div className='bg-orange-50 pt-[120px] pb-20'>
            <Page />
            <div className='w-[97%] px-4 md:w-[80%] mx-auto'>
                <h1 className='text-4xl md:text-6xl font-bold'>Security Policy</h1>

                <ul className='mt-12 space-y-10'>

                    <li>
                        <h2 className='text-2xl md:text-3xl font-semibold'>1. Cloud Infrastructure & Hosting</h2>
                        <p className='mt-3'>Our systems are hosted on secure and compliant cloud platforms (AWS, Azure, or Google Cloud) for scalability, monitoring, and resilience.</p>
                        <p className='mt-2'>DDoS protection is enabled through AWS Shield, Azure DDoS Protection, or Google Cloud Armor.</p>
                        <p className='mt-2'>We use Infrastructure-as-Code (IaC) tools like Terraform and CloudFormation for reliable, version-controlled deployments.</p>
                    </li>

                    <li>
                        <h2 className='text-2xl md:text-3xl font-semibold'>2. Network & Application Security</h2>
                        <p className='mt-3'>Networks are segmented for development, staging, and production to reduce blast radius in case of a breach.</p>
                        <p className='mt-2'>WAFs filter edge traffic to block SQL injections, XSS, and other attacks.</p>
                        <p className='mt-2'>Firewalls and antivirus tools are continuously running to detect and block malicious activity.</p>
                    </li>

                    <li>
                        <h2 className='text-2xl md:text-3xl font-semibold'>3. Access Control</h2>
                        <p className='mt-3'>Access is granted strictly on a role-based basis (RBAC), with permissions limited to what is necessary.</p>
                        <p className='mt-2'>Multi-Factor Authentication (MFA) is enforced for cloud and admin tool access.</p>
                        <p className='mt-2'>Strict access controls ensure only authorized personnel access user data.</p>
                    </li>

                    <li>
                        <h2 className='text-2xl md:text-3xl font-semibold'>4. Data Protection & Encryption</h2>
                        <p className='mt-3'>All data is encrypted using TLS in transit and AES-256 at rest.</p>
                        <p className='mt-2'>Backups are encrypted and securely stored for recovery purposes.</p>
                        <p className='mt-2'>Only necessary data is collected, and we never share or sell it without consent or legal requirement.</p>
                        <p className='mt-2'>Users have the right to request access, correction, or deletion of their personal data at any time.</p>
                    </li>

                    <li>
                        <h2 className='text-2xl md:text-3xl font-semibold'>5. Payment & Transaction Security</h2>
                        <p className='mt-3'>Payments are handled by secure gateways like Razorpay, Stripe, and Paytm using SSL/TLS encryption.</p>
                        <p className='mt-2'>No card details are stored on our servers to avoid potential breaches.</p>
                        <p className='mt-2'>Two-factor authentication may be required for added transaction security.</p>
                        <p className='mt-2'>Customers receive instant confirmation via email, SMS, or push notification.</p>
                        <p className='mt-2'>Refunds follow the same secure channels with tracking and verification.</p>
                        <p className='mt-2'>High-risk transactions are flagged for manual verification to prevent fraud.</p>
                    </li>

                    <li>
                        <h2 className='text-2xl md:text-3xl font-semibold'>6. Monitoring, Logging & Alerts</h2>
                        <p className='mt-3'>System activity is continuously monitored via tools like AWS CloudTrail, Azure Monitor, and SIEMs.</p>
                        <p className='mt-2'>Intrusion Detection Systems (IDS) and log collection help identify threats and breaches.</p>
                        <p className='mt-2'>Our security dashboards provide real-time visibility into system health and incidents.</p>
                        <p className='mt-2'>Automatic alerts notify teams of suspicious activity such as hacking attempts or service crashes.</p>
                    </li>

                    <li>
                        <h2 className='text-2xl md:text-3xl font-semibold'>7. Threat Detection & Updates</h2>
                        <p className='mt-3'>Regular patching, vulnerability scans, and malware checks keep systems secure.</p>
                        <p className='mt-2'>Threat intelligence updates allow us to stay ahead of evolving cyber threats.</p>
                        <p className='mt-2'>Security audits are conducted routinely to validate and strengthen defenses.</p>
                    </li>

                    <li>
                        <h2 className='text-2xl md:text-3xl font-semibold'>8. Incident Response & Recovery</h2>
                        <p className='mt-3'>A detailed incident response plan is in place to respond, contain, and report security issues swiftly.</p>
                        <p className='mt-2'>Audit logs and alert reviews are used to continuously improve threat detection and response strategies.</p>
                    </li>

                    <li>
                        <h2 className='text-2xl md:text-3xl font-semibold'>9. Legal Compliance</h2>
                        <p className='mt-3'>We adhere to all applicable data protection laws including the Indian IT Act and GDPR for global users.</p>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Security
