import React, { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    google: any;
  }
}

interface LocationMapProps {
  googleMapsApiKey?: string;
}

const COGNICODE_LOCATION = {
  lat: 26.209732757213843,
  lng: 78.19462374388186,
};

const MapComponent: React.FC<LocationMapProps> = ({ googleMapsApiKey }) => {
  const [startLocation, setStartLocation] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const Location_KEY = import.meta.env.VITE_GOOGLE_LOCATION_API_KEY;
  useEffect(() => {
    if (!googleMapsApiKey) return;

    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${Location_KEY}&libraries=maps,places`;
        script.async = true;
        script.defer = true;
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: COGNICODE_LOCATION,
        zoom: 14,
      });

      new window.google.maps.Marker({
        position: COGNICODE_LOCATION,
        map,
        title: 'CogniCode IT Solutions',
      });

      if (startLocation) {
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);

        directionsService.route(
          {
            origin: startLocation,
            destination: COGNICODE_LOCATION,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result: any, status: string) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              directionsRenderer.setDirections(result);
            } else {
              setError('Unable to find route. Please check the starting location.');
            }
          }
        );
      }
    };

    loadGoogleMapsScript();
  }, [googleMapsApiKey, startLocation]);

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStartLocation(`${position.coords.latitude},${position.coords.longitude}`);
          setError(null);
        },
        () => {
          setError('Unable to retrieve your location. Please enter it manually.');
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="w-full  mx-auto lg:p-4 md:p-3  p-2  bg-white shadow-lg rounded-lg">
      {!googleMapsApiKey ? (
        <div className="relative overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.1220568569615!2d78.19462374388186!3d26.209732757213843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c79950bebf03%3A0xaf58ba499a8e966e!2sCogniCode%20IT%20Solutions%20and%20Thesis%20Writing%20Services!5e0!3m2!1sen!2sin!4v1751194656271!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      ) : (
        <>
          <div className="mb-4 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
              placeholder="Enter starting location (e.g., city or address)"
              className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleGeolocation}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Use Current Location
            </button>
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div ref={mapRef} className="w-full h-[450px] rounded-lg"></div>
          <p className="mt-4 text-gray-600 text-center">
            Destination: CogniCode IT Solutions and Thesis Writing Services
          </p>
        </>
      )}
    </div>
  );
};

export default MapComponent;