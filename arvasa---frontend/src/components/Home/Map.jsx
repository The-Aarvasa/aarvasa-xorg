import React, { useEffect, useRef, useState } from "react";
import { Heading } from "../Utils/Heading";

const Map = () => {
    const mapRef = useRef(null);
    const [location, setLocation] = useState()

    useEffect(() => {
        if (window.google && mapRef.current) {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 12.972442, lng: 77.580643 }, // default to Bangalore
                zoom: 13,
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


    return (
        <div className="mx-2 mt-8 mb-8 md:mx-4 relative">
            <Heading label="Geographic Reach" />
          <div className="flex flex-col items-center justify-center w-full gap-[30px]">
             <div className="input w-[100%] p-2 flex flex-wrap md:flex-nowrap justify-center gap-1">
             <input
                id="searchBox"
                type="text"
                placeholder="Search a location"
                className="border w-full border-1 w-full border-gray-200 outline-none rounded-lg"
                style={{ padding: "10px", marginBottom: "10px" }}
            />
              <button className="font-semibold w-full md:w-[20%] text-[#8C2841] mb-[10px] p-[10px] text-sm rounded-lg" style={{
                        background: "linear-gradient(to right, #F7A240, #F5C01A)",
                    }}>
                        Search

                    </button>
           </div>
            <div ref={mapRef} style={{ height: "500px", width: "100%", padding: 30}}></div>
          </div>
        </div>
    );
};

export default Map;
