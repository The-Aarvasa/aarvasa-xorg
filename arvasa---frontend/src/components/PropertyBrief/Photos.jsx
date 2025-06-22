import React, { useState } from 'react';

const Photos = ({ data }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imgUrl) => {
        setSelectedImage(imgUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="mx-2 md:m-5 md:p-8 relative">
            <h1 className="text-3xl md:text-5xl font-bold text-[#3D3D3D] mb-8">{data?.propertyTitle}</h1>
            <p className="text-lg md:text-md font-semibold text-[#3D3D3D] mt-8">{data?.detailedDescription}</p>

            <div className="flex flex-col md:flex-row gap-4 mt-6 mb-6 w-full h-[280px] md:w-3/4 mx-auto">
                {data?.imageUrls?.[0] && (
                    <div
                        className="w-full md:w-2/3 rounded-3xl overflow-hidden h-full cursor-pointer"
                        onClick={() => openModal(data.imageUrls[0])}
                    >
                        <img
                            src={data.imageUrls[0]}
                            alt="Main"
                            className="w-full h-full object-cover hover:scale-105 duration-300"
                        />
                    </div>
                )}

                <div className="w-full md:w-1/3 grid grid-cols-2 md:grid-cols-1 gap-4">
                    {data?.imageUrls?.slice(1, 3).map((url, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl overflow-hidden h-32 cursor-pointer"
                            onClick={() => openModal(url)}
                        >
                            <img
                                src={url}
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                alt={`Preview ${idx + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Image Preview */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-3xl w-full"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage}
                            alt="Full View"
                            className="w-full max-h-[90vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Photos;
