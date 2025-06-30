// pages/Listing.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Page from '../../components/listing/Page';
import ListingFilterBar from '../../components/listing/ListingFilterBar';
import Property from '../../components/listing/Property';
import Pagination from '../../components/Utils/Pagination';
import { FilterContext } from '../../context/FilterProvider';
import { useContext } from 'react';
import Loaders from '../Loaders';
const PropertyMain = () => {
    const { filters } = useContext(FilterContext);
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currProp, setCurrProp] = useState([]);
    const [PlastPage, setLastPage] = useState(0);

 
    const [currPage, setCurrPage] = useState(1);
    const [maxItems, setMaxItems] = useState(10);

    useEffect(() => {
        const fetchListings = async () => {
            setLoading(true);
            try {
                const query = new URLSearchParams(filters).toString();
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/listings?${query}`);
                setListings(res.data);
            } catch (err) {
                console.error('Error fetching listings FROM MAIN:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchListings();
    }, [filters]);



 

    useEffect(() => {
        const pagination = () => {
            const lastIndex = currPage*maxItems;
    const firstIndex = lastIndex-maxItems;
    const properties = listings.slice(firstIndex, lastIndex);
    setCurrProp(properties);
    const lastPage = Math.ceil(listings.length / maxItems);
    setLastPage(lastPage);
        }
        pagination();
    }, [currPage, listings])


    return (
        <div className="bg-orange-50 pb-6">
            <ListingFilterBar></ListingFilterBar>
            <div className="w-[98%] min-h-[300px] mx-auto mt-4 mb-8">
                {loading ? (
                   <Loaders></Loaders>
                ) : listings.length === 0 ? (
                    <p className="text-center">No listings found.</p>
                ) : (
                    <div className="card flex flex-col gap-8">
                        {currProp.map((listing) => (
                            <Property key={listing._id} listing={listing} />
                        ))}
                    </div>
                )}
            </div>

                <Pagination currentPage={currPage} totalPages={PlastPage}
  onPageChange={(page) => setCurrPage(page)}></Pagination>

        </div>
    );
};

export default PropertyMain;
