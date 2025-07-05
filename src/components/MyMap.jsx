import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MyMap({ width, height }) {
  const position = [41.2995, 69.2401]; // Toshkent koordinatalari

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ width: "100%" }}
      className="rounded-md shadow-lg md:h-[450px] h-[200px]"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Bu yerda Toshkent joylashgan.</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyMap;
