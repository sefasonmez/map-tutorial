import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { tileURLs } from "./TileLayerExample";

function MapPlaceholder() {
  return (
    <p>
      Map of London.{" "}
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  );
}

const MapPlaceholderExample = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom
      placeholder={<MapPlaceholder />}
    >
      <TileLayer url={tileURLs.GOOGLE_SATELLITE_ONLY} />
    </MapContainer>
  );
};

export default MapPlaceholderExample;
