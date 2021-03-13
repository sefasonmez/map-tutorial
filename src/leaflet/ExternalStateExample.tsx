import { LatLngExpression, Map } from "leaflet";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { tileURLs } from "./TileLayerExample";

const center: LatLngExpression = [0, 0];
const zoom = 5;

function DisplayPosition({ map }: any) {
  const [position, setPosition] = useState(map.getCenter());

  const onClick = useCallback(() => {
    map.setView(center, zoom);
  }, [map]);

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  return (
    <p style={{ padding: "0px 50px" }}>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{" "}
      <button onClick={onClick}>reset</button>
    </p>
  );
}

const ExternalStateExample = () => {
  const [map, setMap] = useState<Map>();

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom
        whenCreated={setMap}
      >
        <TileLayer url={tileURLs.GOOGLE_SATELLITE_ONLY} />
      </MapContainer>
    ),
    []
  );

  return (
    <div>
      {map ? <DisplayPosition map={map} /> : null}
      {displayMap}
    </div>
  );
};

export default ExternalStateExample;
