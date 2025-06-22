// pages/Listing.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Page from '../components/listing/Page';
import ListingFilterBar from '../components/listing/ListingFilterBar';
import Property from '../components/listing/Property';

const Listing = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState({
        city: '',
        propertyType: '',
        budget: '',
        transactionType: '',
    });

    useEffect(() => {
        const fetchListings = async () => {
            setLoading(true);
            try {
                const query = new URLSearchParams(filters).toString();
                const res = await axios.get(`http://localhost:5000/api/listings?${query}`);
                setListings(res.data);
            } catch (err) {
                console.error('Error fetching listings:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchListings();
    }, [filters]);

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleResetFilters = () => {
        setFilters({
            city: '',
            propertyType: '',
            budget: '',
            transactionType: '',
        });
    };

    return (
        <div className="bg-orange-50 mb-6 pt-[90px]">
            <Page />
            <ListingFilterBar filters={filters} onFilterChange={handleFilterChange} onReset={handleResetFilters} />

            <div className="w-[98%] min-h-[300px] mx-auto mt-4 mb-8">
                {loading ? (
                    <p className="text-center">Loading listings...</p>
                ) : listings.length === 0 ? (
                    <p className="text-center">No listings found.</p>
                ) : (
                    <div className="card flex flex-col gap-8">
                        {listings.map((listing) => (
                            <Property key={listing._id} listing={listing} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Listing;
