import React, { useRef } from "react";
import { MapContainer, TileLayer, useMapEvent } from "react-leaflet";
import { tileURLs } from "./TileLayerExample";

function SetViewOnClick({ animateRef }: any) {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    });
  });

  return null;
}

const AnimatedPanningExample = () => {
  const animateRef = useRef(false);

  return (
    <>
      <p>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              animateRef.current = !animateRef.current;
            }}
          />
          Animate panning
        </label>
      </p>
      <MapContainer center={[51.505, -0.09]} zoom={20} scrollWheelZoom>
        <TileLayer url={tileURLs.GOOGLE_SATELLITE_ONLY} />
        <SetViewOnClick animateRef={animateRef} />
      </MapContainer>
    </>
  );
};

export default AnimatedPanningExample;
