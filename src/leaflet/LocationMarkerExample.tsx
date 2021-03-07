import { LatLng, LatLngExpression, LocationEvent } from "leaflet";
import React, { useState } from "react";
import {
  useMapEvents,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { tileURLs } from "./TileLayerExample";

function LocationMarker() {
  const [position, setPosition] = useState<LatLngExpression>(new LatLng(0, 0));
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e: LocationEvent) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const LocationMarkerExample = () => {
  return (
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={15}
      scrollWheelZoom
    >
      <TileLayer url={tileURLs.GOOGLE_SATELLITE_ONLY} />
      <LocationMarker />
    </MapContainer>
  );
};

export default LocationMarkerExample;
