import React, { useCallback, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { tileURLs } from "./TileLayerExample";

const center = {
  lat: 51.505,
  lng: -0.09,
};

function DraggableMarker() {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
  const markerRef = useRef<any>(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
        console.log("Marker Position: ", marker.getLatLng());
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
}

const DraggableMarkerExample = () => {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom>
      <TileLayer url={tileURLs.GOOGLE_SATELLITE_ONLY} />
      <DraggableMarker />
    </MapContainer>
  );
};

export default DraggableMarkerExample;
