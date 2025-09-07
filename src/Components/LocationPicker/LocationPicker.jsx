import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMarker = ({ setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      localStorage.setItem('userLocation', JSON.stringify(e.latlng));
    },
  });
  return null;
};



export default function LocationPicker({ onClose, setSelectedAddress }) {
  const [position, setPosition] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${searchTerm}`);
    const data = await res.json();
    if (data.length > 0) {
      const latlng = { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
      setPosition(latlng);
      localStorage.setItem('userLocation', JSON.stringify(latlng));
      setSelectedAddress(data[0].display_name);
    }
  };

  useEffect(() => {
    if (position) {
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.lat}&lon=${position.lng}&format=json`)
        .then(res => res.json())
        .then(data => setSelectedAddress(data.display_name));
    }
  }, [position, setSelectedAddress]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center p-4">
      <button onClick={onClose} className="self-end bg-red-500 text-white px-4 py-2 rounded">Close</button>

      <div className="my-4 w-full max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search location..."
          className="w-full border border-gray-400 p-2 rounded"
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 mt-2 rounded w-full">
          Search
        </button>
      </div>

      <MapContainer
        center={[9.05785, 7.49508]} 
        zoom={13}
        style={{ height: '400px', width: '100%', maxWidth: '700px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position && <Marker position={position} />}
        <LocationMarker setPosition={setPosition} />
      </MapContainer>
    </div>
  );
}
