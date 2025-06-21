import React from 'react';
import Loan from '../components/tools/Loan';
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
import Page from '../components/listing/Page';
import Buttons from '../components/tools/Buttons';
import { Outlet } from 'react-router-dom';
const Tools = () => {
    return (
        <>
            <div className='bg-orange-50 mb-8 mb-[20px]'>
                <Page></Page>
                <div className='bg-white flex items-center justify-center gap-12 rounded-lg p-8 flex-col h-auto w-[100%] md:w-[95%] mx-auto shadow-lg'>
                    <Buttons></Buttons>
                <Outlet></Outlet>

                </div>
            </div>
        </>
    )
}

export default Tools
