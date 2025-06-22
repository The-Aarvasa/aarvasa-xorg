import { useEffect, useRef, useState } from "react";

export const Explore = ({ data }) => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (window.google && mapRef.current) {
            mapInstance.current = new window.google.maps.Map(mapRef.current, {
                center: { lat: 12.972442, lng: 77.580643 },
                zoom: 13,
            });

            const input = document.getElementById("searchBox");
            if (input) {
                const autocomplete = new window.google.maps.places.Autocomplete(input);
                autocomplete.addListener("place_changed", () => {
                    const place = autocomplete.getPlace();
                    if (!place || !place.geometry?.location) return;
                    setLocation(place);
                    mapInstance.current.setCenter(place.geometry.location);
                    new window.google.maps.Marker({
                        map: mapInstance.current,
                        position: place.geometry.location,
                    });
                });
            }
        }
    }, []);

    return (
        <div className="mx-2 mt-4 md:m-5 p-5 bg-white rounded-2xl shadow-md">
            <div className="flex items-center space-x-2 mb-5">
                <img src="/explore.png" alt="Explore Icon" className="h-10 w-10" />
                <h2 className="text-[32px] font-semibold">Explore</h2>
            </div>

            <div className="flex flex-col justify-center w-full gap-[30px]">
                <div className="input w-full -mb-5 p-2 flex flex-wrap md:flex-nowrap justify-center gap-1">
                    <input
                        id="searchBox"
                        type="text"
                        placeholder="Search a location"
                        className="border border-gray-200 outline-none rounded-lg w-full"
                        style={{ padding: "10px", marginBottom: "10px" }}
                    />
                    <button
                        className="font-semibold w-full md:w-[20%] text-[#8C2841] mb-[10px] p-[10px] text-sm rounded-lg"
                        style={{ background: "linear-gradient(to right, #F7A240, #F5C01A)" }}
                        onClick={() => document.getElementById("searchBox")?.focus()}
                    >
                        Search
                    </button>
                </div>

                {Array.isArray(data?.nearbyLandmarks) && data.nearbyLandmarks.length > 0 && (
                    <div className="flex justify-start flex-wrap md:space-x-5 space-y-4 md:space-y-0">
                        {data.nearbyLandmarks.map((currElem, index) => (
                            <button key={index} className="bg-gray-200 w-full md:w-fit px-4 py-2 rounded-full flex items-center mb-2 md:mb-0">
                                <span className="font-semibold pr-1">📍 {currElem}</span>
                            </button>
                        ))}
                    </div>
                )}

                <div
                    ref={mapRef}
                    style={{ height: "500px", width: "100%", padding: 30 }}
                    className="rounded-lg overflow-hidden shadow"
                ></div>
            </div>

            <button className="mt-4 w-full md:w-fit bg-gray-200 px-4 py-2 rounded-full flex items-center">
                <img src="/location.png" alt="Nearby Icon" className="h-6 w-6 mr-2" />
                View places nearby
            </button>
        </div>
    );
};
