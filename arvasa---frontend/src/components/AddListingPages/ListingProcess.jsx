import React, { useEffect, useState } from 'react';
import AddListing from './AddListing';
import LocationSelector from './LocationSelector';
import AddPhotos from './AddPhotos';
import CompleteListing from './CompleteListing';
import { useNavigate } from 'react-router-dom';

const ListingProcess = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    const goToNextPage = () => {
            setCurrentPage(prevPage => prevPage + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    useEffect(() => {
       if(currentPage === 5){
        navigate("/listings")
       }
    }, [currentPage])

    return (
        <div>
            {currentPage === 1 && <AddListing onNext={goToNextPage} onPrevious={goToPreviousPage} />}
            {currentPage === 2 && <LocationSelector onPrevious={goToPreviousPage} onNext={goToNextPage} />}
            {currentPage === 3 && <AddPhotos onPrevious={goToPreviousPage} onNext={goToNextPage} />}
            {currentPage === 4 && <CompleteListing onPrevious={goToPreviousPage} onNext={goToNextPage} />}
        </div>
    );
};

export default ListingProcess; 