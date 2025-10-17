import React, { useEffect, useRef, useState } from "react";


const Map = () => {
    const mapRef = useRef(null);
    const [location, setLocation] = useState()

    useEffect(() => {
        if (window.google && mapRef.current) {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 12.972442, lng: 77.580643 }, // default to Bangalore
                zoom: 10,
            });

            const input = document.getElementById("searchBox");
            const autocomplete = new window.google.maps.places.Autocomplete(input);
            autocomplete.addListener("place_changed", () => {
                const place = autocomplete.getPlace();
                setLocation(place);
                if (!place.geometry) return;

                const location = place.geometry.location;
                map.setCenter(location);

                new window.google.maps.Marker({
                    map,
                    position: location,
                });
            });
        }
    }, []);

    useEffect(() => {
        console.log(location);
    }, [location])

    return (
        <div className="w-full h-full flex flex-col items-center">

            <div className="input w-full flex flex-wrap md:flex-nowrap justify-center gap-1">
                <input
                    id="searchBox"
                    type="text"
                    placeholder="Search a location"
                    className="border w-full border-gray-200 outline-none rounded-lg p-2"
                    style={{ marginBottom: "10px" }}
                />
                <button className="font-semibold w-full md:w-[20%] text-[#8C2841] mb-[10px] p-[10px] text-sm rounded-lg" style={{
                    background: "linear-gradient(to right, #F7A240, #F5C01A)",
                }}>
                    Search
                </button>
            </div>
            <div ref={mapRef} style={{ height: "350px", width: "100%" }}></div>
        </div>
    );
};

export default Map;
