import AdvicesTools from "../components/Home/AdvicesTools"
import { Geographic } from "../components/Home/Geographic"
import Navbar from "../components/Navbar"
import { Newsletter } from "../components/Home/Newsletter"
import RealEstateGuide from "../components/Home/RealEstateGuide"
import Landing from "../components/Home/Landing"
import Features from "../components/Home/Features"
import Preferred from "../components/Home/Preferred"
import ViewAnimate from "../components/Home/ViewAnimate"
import Map from "../components/Home/Map"
import Footer from "../components/Footer"
import Services from "../components/Home/Services"
import FAQSection from "../components/Home/FAQSection"
import { Agents } from "./Agents"
import NewsArticles from "../components/Home/NewsArticles"
import { ServicesCards } from "../components/Home/ServicesCards"


export const Home = () => {
    return (
        <>
            <Navbar />

        <div className="bg-orange-50 overflow-x-hidden">
            <Landing />
            <ViewAnimate />
            <ServicesCards />
            <Services />
            <Preferred />
            <FAQSection></FAQSection>
            <NewsArticles />
            <AdvicesTools />
            <Map />
            <Newsletter />
        <Footer />

        </div>
        </>
    )
}