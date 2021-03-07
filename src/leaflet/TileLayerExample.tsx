import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export enum tileURLs {
  OPEN_STREET_MAP = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  GOOGLE_ROADMAP = "http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}",
  GOOGLE_TERRAIN = "http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}",
  GOOGLE_ALTERED_ROADMAP = "http://mt0.google.com/vt/lyrs=r&hl=en&x={x}&y={y}&z={z}",
  GOOGLE_SATELLITE_ONLY = "http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}",
  GOOGLE_TERRAIN_ONLY = "http://mt0.google.com/vt/lyrs=t&hl=en&x={x}&y={y}&z={z}",
  GOOGLE_HYBRID = "http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}",
}

const TileExample = () => {
  return (
    <MapContainer center={[40.919284, 29.315365]} zoom={20} scrollWheelZoom>
      <TileLayer url={tileURLs.GOOGLE_SATELLITE_ONLY} />
      <Marker position={[40.919284, 29.315365]}>
        <Popup>Accenture</Popup>
      </Marker>
    </MapContainer>
  );
};

export default TileExample;
