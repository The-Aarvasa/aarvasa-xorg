import WhoWeAre from "../components/service/WhoWeAre";
import WhyAarvasa from "../components/service/WhyAarvasa";
import AllServices from "../components/service/AllServices";
import ContactUs from "../components/service/ContactUs";
import NavbarRaw from '../components/NavbarRaw'
import Page from "../components/listing/Page";
import Slider from "../components/About/Slider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Services=()=>{
    return(
        <>
        <section className="bg-orange-50">
          <Navbar></Navbar>

          <Page></Page>
            <WhoWeAre/>
            <WhyAarvasa/>
            <AllServices/>
            <Slider></Slider>
            <ContactUs/>
        </section>
        <Footer />
        </>

    );
};

export default Services;