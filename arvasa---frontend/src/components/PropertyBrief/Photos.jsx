import React, { useState } from 'react';

const Photos = ({ data }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showAllImages, setShowAllImages] = useState(false);

    const openModal = (imgUrl) => {
        setSelectedImage(imgUrl);
        setShowAllImages(false);
    };

    const openGallery = () => {
        setShowAllImages(true);
        setSelectedImage(null);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setShowAllImages(false);
    };

    const imageUrls = data?.imageUrls || [];
    const hasMoreThanThree = imageUrls.length > 3;

    return (
        <div className="mx-4 md:mx-10 lg:mx-24 my-10">
            {/* Title & Description */}
            <h1 className="text-3xl md:text-5xl font-bold text-[#2B2B2B] mb-6">{data?.propertyTitle}</h1>
            <p className="text-base md:text-lg text-[#444] max-w-4xl leading-relaxed font-medium">
                {data?.detailedDescription}
            </p>

            {/* Preview Images */}
            <div className="flex flex-col md:flex-row gap-4 mt-10 w-full md:w-4/5 mx-auto">
                {/* Main Image */}
                {imageUrls[0] && (
                    <div
                        onClick={() => openModal(imageUrls[0])}
                        className="relative w-full md:w-2/3 h-64 md:h-[300px] rounded-xl overflow-hidden cursor-pointer group shadow-md"
                    >
                        <img
                            src={imageUrls[0]}
                            alt="Main"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                )}

                {/* Preview Grid */}
                <div className="w-full md:w-1/3 grid grid-cols-2 md:grid-cols-1 gap-4">
                    {imageUrls.slice(1, 3).map((url, idx) => {
                        const isLastVisible = idx === 1 && hasMoreThanThree;
                        return (
                            <div
                                key={idx}
                                onClick={() => isLastVisible ? openGallery() : openModal(url)}
                                className="relative h-32 md:h-[140px] rounded-xl overflow-hidden cursor-pointer group shadow-md"
                            >
                                <img
                                    src={url}
                                    alt={`Preview ${idx + 1}`}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                                {isLastVisible && (
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold backdrop-blur-sm">
                                        +{imageUrls.length - 3} more
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal for Image or Full Gallery */}
            {(selectedImage || showAllImages) && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-6xl mx-auto px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white text-3xl font-bold z-10 bg-black bg-opacity-40 backdrop-blur-sm rounded-full px-4 py-1 hover:bg-opacity-70 transition"
                        >
                            &times;
                        </button> */}

                        {selectedImage ? (
                            <img
                                src={selectedImage}
                                alt="Full View"
                                className="w-full max-h-[90vh] object-contain rounded-xl"
                            />
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-16 overflow-y-auto max-h-[85vh] p-2">
                                {imageUrls.map((url, i) => (
                                    <div key={i} className="rounded-lg overflow-hidden group cursor-pointer shadow">
                                        <img
                                            src={url}
                                            alt={`Gallery ${i + 1}`}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                            onClick={() => openModal(url)}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Photos;
