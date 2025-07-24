import React, { useState, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MAX_IMAGE_SLOTS = 6;

const AddPhotos = ({ onPrevious, onNext, listingData, setListingData }) => {
  const navigate = useNavigate();
  const [images, setImages] = useState(Array(MAX_IMAGE_SLOTS).fill(null));
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0);

    const newImages = [...images];
    let filesAdded = 0;

    for (let i = 0; i < newImages.length && filesAdded < files.length; i++) {
      if (newImages[i] === null) {
        newImages[i] = files[filesAdded];
        filesAdded++;
      }
    }
    setImages(newImages);
    event.target.value = null;
  };

  const handleRemoveImage = (indexToRemove) => {
    const newImages = [...images];
    newImages[indexToRemove] = null;
    setImages(newImages);
  };

  const handleAddPhotoButtonClick = () => {
    fileInputRef.current.click();
  };

  const firstEmptySlotIndex = images.findIndex((image) => image === null);

  const uploadImagesToCloudinary = async () => {
    const cloudName = "dzbbaaipe";
    const uploadPreset = "aarvasa_unsigned"; // make sure this preset exists in your Cloudinary account
    const folderName = "Aarvasa_Listings";

    const validImages = images.filter((img) => img !== null);
    const uploadedUrls = [];

    setUploading(true);
    for (let i = 0; i < validImages.length; i++) {
      const formData = new FormData();
      formData.append("file", validImages[i]);
      formData.append("upload_preset", uploadPreset);
      formData.append("folder", folderName);

      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData
        );
        uploadedUrls.push(res.data.secure_url);
      } catch (err) {
        console.error("Image upload failed:", err);
        alert("Image upload failed. Please try again.");
        setUploading(false);
        return [];
      }
    }
    setUploading(false);
    return uploadedUrls;
  };

  const handleNext = async () => {
    const hasImages = images.some((img) => img !== null);
    // if (!hasImages) {
    //   alert("Please upload at least one image.");
    //   return;
    // }

    const uploadedUrls = await uploadImagesToCloudinary();
    if (true) {
      setListingData((prev) => ({ ...prev, photos: uploadedUrls }));
      onNext();
    }
  };

  return (
    <div className="min-h-screen bg-[#fffcf2] flex items-center justify-center p-4 font-poppins">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-xl md:max-w-4xl relative border border-gray-300">
        <button onClick={() => navigate("/listings")} className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-500 hover:text-gray-700">
          <IoClose size={24} />
        </button>

        <div className="w-3/4 md:w-1/2 h-1.5 md:h-1.6 bg-gray-200 rounded-full mb-6 md:mb-10 mx-auto">
          <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: '75%' }}></div>
        </div>

        <h1 className="text-xl md:text-3xl font-bold text-center text-[#3D3D3D] mb-6 md:mb-10">
          Add Photos to your Listing
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-10 w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-28 sm:h-32 md:h-40 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              {image ? (
                <>
                  <img src={URL.createObjectURL(image)} alt={`upload-preview-${index}`} className="w-full h-full object-cover" />
                  <button className="absolute top-1 right-1 bg-white rounded-full p-1 cursor-pointer" onClick={() => handleRemoveImage(index)}>
                    <IoClose size={12} className="text-red-500" />
                  </button>
                </>
              ) : (
                index === firstEmptySlotIndex && (
                  <div className="w-full h-full flex items-center justify-center cursor-pointer" onClick={handleAddPhotoButtonClick}>
                    <FaPlus size={24} className="text-gray-500" />
                    <input type="file" ref={fileInputRef} onChange={handleImageUpload} multiple accept="image/*" className="hidden" />
                  </div>
                )
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center px-4 gap-3 sm:gap-4">
          <button
            className="w-full sm:w-auto px-6 py-2 bg-white border border-gray-300 rounded-lg text-base font-semibold text-[#5A5A59] hover:bg-gray-100 transition-colors duration-200"
            onClick={onPrevious}
            disabled={uploading}
          >
            Previous
          </button>
          <button
            className="w-full sm:w-auto px-6 py-2 bg-[#6D1E3D] text-white rounded-lg text-base font-semibold hover:bg-[#5a1832] transition-colors duration-200"
            onClick={handleNext}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPhotos;
