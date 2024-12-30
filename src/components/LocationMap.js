import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  // Map container style using Tailwind classes
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 12.9716, // Latitude
    lng: 77.5946, // Longitude
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-black">
      <div className="w-full max-w-4xl h-96 shadow-lg rounded-lg overflow-hidden">
        <LoadScript googleMapsApiKey={ process.env.GOOGLE_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10}
          >
            {/* Marker at the center */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Map;
