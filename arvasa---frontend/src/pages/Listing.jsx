import { Search } from "lucide-react"
import Graphs from "../components/listing/Graphs"
import { Heading } from "../components/Utils/Heading"
import NavbarRaw from '../components/NavbarRaw'

import { BrowserRouter as Router, Route, Outlet, Routes, Link } from 'react-router-dom';
import { useState } from "react";
import Property from "../components/listing/Property";
import Page from "../components/listing/Page";
import ListingFilterBar from "../components/listing/ListingFilterBar"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



export const Listing = () => {
    const [page, setPage] = useState(1);
    return (
        <>
            <div className="bg-orange-50">
                <Navbar color={"gray"}></Navbar>

                    <Page></Page>


                <div className="md:mx-8 md:px-8 mt-2 mb-2 rounded-full items-center justify-center flex flex-col p-2 gap-4">
                    <div className="rounded-lg">
                        <ul className="flex items-center gap-4 md:gap-8">
                            <li><Link to={"/listings"}>Property</Link></li>
                            <li><Link to={"/listings/ratestrends"}>Rates and trends</Link></li>
                            <li><Link to={"/AddListing"}>Add Listing</Link></li>
                        </ul>
                    </div>

                </div>



                <Outlet></Outlet>
            </div>

        <Footer />



        </>
    )
}