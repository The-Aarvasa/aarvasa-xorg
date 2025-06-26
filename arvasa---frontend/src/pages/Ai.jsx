import React from 'react'
import NavbarRaw from '../components/NavbarRaw'
import LandingPageOfAi from '../components/Chatbot/LandingPageOfAi'
import Footer from '../components/Footer'
import ConversationPage from '../components/Chatbot/ConversationPage'
const Ai = () => {
    return (
        <div className='pt-[90px] pb-8 min-h-[100vh] bg-gradient-to-b from-[#B96A85] to-[#0C0C0C] '>
            <ConversationPage></ConversationPage>

        </div>
    )
}

export default Ai
