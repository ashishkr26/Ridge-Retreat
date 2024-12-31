import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  
  DirectionsRenderer,
} from "@react-google-maps/api";

const Map = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const destination = {
    lat: 12.9716, // Destination latitude
    lng: 77.5946, // Destination longitude
  };

  const [origin, setOrigin] = useState("");
  const [directionsResponse, setDirectionsResponse] = useState(null);

  // Fetch coordinates for the input location
  const calculateRoute = () => {
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: origin }, (results, status) => {
      if (status === "OK") {
        const originCoordinates = results[0].geometry.location;

        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
          {
            origin: originCoordinates,
            destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              setDirectionsResponse(result);
            } else {
              console.error(`Error fetching directions: ${status}`);
            }
          }
        );
      } else {
        console.error(`Geocode error: ${status}`);
      }
    });
  };

  return (
    <div className="flex flex-row  justify-center p-2 h-screen bg-gray-100 dark:bg-black">
      <div className="p-2 m-4">
        <label className="p-2 my-2 text-lg">Enter Your Current Location</label>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          placeholder="Enter your location"
          className="px-4 py-2 border rounded-lg w-80 shadow"
        />
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={calculateRoute}
            className="px-4 py-2 my-4 bg-green-500 text-white rounded-lg shadow"
            disabled={!origin}
          >
            Show Route
          </button>
        </div>
      </div>
      <div className="w-full max-w-4xl h-96 shadow-lg rounded-lg overflow-hidden mb-4">
        <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={destination}
            zoom={10}
          >
            {/* Marker at the destination */}
            <Marker position={destination} />

            {/* Render route if available */}
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Map;
