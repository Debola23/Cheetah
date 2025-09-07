import { useState, useEffect } from 'react';
import Styles from './Hero.module.css';
import Threads from './Threads';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet-geosearch/dist/geosearch.css';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});


const SearchControl = ({ provider }) => {
  const map = useMap();
  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider,
      showMarker: true,
      showPopup: true,
      retainZoomLevel: false,
      animateZoom: true,
      autoClose: true,
      searchLabel: 'Enter location...',
    });
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [map, provider]);
  return null;
};

const LocationMarker = ({ setCoordinates, setAddress }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setCoordinates([lat, lng]);
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
        .then((res) => res.json())
        .then((data) => setAddress(data.display_name))
        .catch(() => setAddress('Location selected'));
    },
  });
  return null;
};

export const Hero = () => {
  const [query, setQuery] = useState('');
  const [showMap, setShowMap] = useState(false);
  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [selectedCoords, setSelectedCoords] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [userLocation, setUserLocation] = useState([56.1304, -106.3468]); 

  const provider = new OpenStreetMapProvider();

  // Auto-detect user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
            .then((res) => res.json())
            .then((data) => setSelectedAddress(data.display_name))
            .catch(() => setSelectedAddress('Select Location'));
        },
        (error) => {
          console.error('Geolocation error:', error);
        }
      );
    }
  }, []);

  return (
    <>
      <div className={Styles.Hero} style={{ position: 'relative', height: '600px' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>

        <section className="gradient-bg text-black py-16 relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Rent Anything, Anywhere</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto" id={Styles.hD}>
              From tools to party supplies, find what you need or earn money by renting out your unused items.
            </p>

            <div className="max-w-xl mx-auto space-y-4 relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full py-4 px-6 rounded-full border border-gray-400 text-gray-800 focus:outline focus:outline-[#000]"
              />
              <button
                disabled={!query.trim()}
                className={`absolute right-2 top-2 bg-[#000] text-white py-2 px-6 rounded-full transition ${
                  !query.trim() ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <i className="fas fa-search mr-1"></i> Search
              </button>

              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setShowMap(true)}
                  className="border border-gray-500 px-4 py-2 rounded-full bg-white text-black cursor-pointer min-w-[200px]"
                >
                  📍 {selectedAddress ? selectedAddress : 'Select Location'}
                </button>

                <DatePicker
                  selected={pickupDate}
                  onChange={(date) => setPickupDate(date)}
                  placeholderText="Pick-up Date"
                  className="border border-gray-500 px-4 py-2 rounded-full text-black w-full md:w-auto"
                />

                <DatePicker
                  selected={dropoffDate}
                  onChange={(date) => setDropoffDate(date)}
                  placeholderText="Drop-off Date"
                  className="border border-gray-500 px-4 py-2 rounded-full text-black w-full md:w-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* MAP POPUP */}
      {showMap && (
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center p-[8px]">
          <div className="bg-white rounded-xl p-4 w-full max-w-[36rem] relative shadow-lg" id={Styles.mapPopup}>
            <button
              className="absolute top-3 right-3 text-lg font-bold px-3 py-1 bg-black text-white rounded-full cursor-pointer"
              id={Styles.mapClose}
              onClick={() => setShowMap(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-2 text-center" id={Styles.dateT}>
              Where do you want to rent from?
            </h2>
            <div className="h-[400px] rounded overflow-hidden">
              <MapContainer
                center={userLocation}
                zoom={13} 
                style={{ height: '400px', width: '100%', maxWidth: '700px' }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <SearchControl provider={provider} />
                <LocationMarker setCoordinates={setSelectedCoords} setAddress={setSelectedAddress} />
                {selectedCoords && <Marker position={selectedCoords} />}
              </MapContainer>
            </div>
            <div className="mt-4 flex flex-col items-center gap-3">
              <div className="rounded-lg bg-gray-100 px-4 py-2 text-center shadow-sm">
                {selectedAddress || 'Click on map to select a location'}
              </div>
              <button
                onClick={() => setShowMap(false)}
                className="bg-red-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-700"
              >
                Select this location
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
