import React, { useEffect, useState } from 'react';
import AddListing from './AddListing';
import LocationSelector from './LocationSelector';
import AddPhotos from './AddPhotos';
import CompleteListing from './CompleteListing';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListingProcess = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [listingData, setListingData] = useState({
        listingType: '',
        propertyCategory: '',
        propertyTitle: '',
        location: '',
        coordinates: { lat: 0, lng: 0 },
        imageFiles: [],
        bedrooms: 0,
        bathrooms: 0,
        balcony: 0,
        price: '',
        priceD: '',
        unit: 'Monthly',
        facilities: []
    });

    const goToNextPage = () => setCurrentPage(prev => prev + 1);
    const goToPreviousPage = () => setCurrentPage(prev => prev - 1);

    useEffect(() => {
        if (currentPage === 5) handleSubmit();
    }, [currentPage]);

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            const token = localStorage.getItem("accessToken");

            for (const [key, value] of Object.entries(listingData)) {
                if (key === 'imageFiles') {
                    value.forEach(file => formData.append('photos', file)); // ✅ FIXED
                } else if (typeof value === 'object' && value !== null) {
                    formData.append(key, JSON.stringify(value));
                } else {
                    formData.append(key, value);
                }
            }

            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/listings/create`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`, // ✅ FIXED
                    },
                }
            );

            console.log('Successfully listed:', res.data);
            navigate("/listings");
        } catch (err) {
            console.error("Error submitting listing:", err);
        }
    };


    return (
        <div>
            {currentPage === 1 && <AddListing onNext={goToNextPage} onPrevious={goToPreviousPage} listingData={listingData} setListingData={setListingData} />}
            {currentPage === 2 && <LocationSelector onPrevious={goToPreviousPage} onNext={goToNextPage} listingData={listingData} setListingData={setListingData} />}
            {currentPage === 3 && <AddPhotos onPrevious={goToPreviousPage} onNext={goToNextPage} listingData={listingData} setListingData={setListingData} />}
            {currentPage === 4 && <CompleteListing onPrevious={goToPreviousPage} onNext={goToNextPage} listingData={listingData} setListingData={setListingData} />}
        </div>
    );
};

export default ListingProcess;
