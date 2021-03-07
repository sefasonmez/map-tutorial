import { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, SVGOverlay } from "react-leaflet";
import { tileURLs } from "./TileLayerExample";

const position: LatLngExpression = [51.505, -0.09];
const bounds: LatLngBoundsExpression = [
  [51.49, -0.08],
  [51.5, -0.06],
];

const SVGOverlayExample = () => {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom>
      <TileLayer url={tileURLs.GOOGLE_ROADMAP} />
      <SVGOverlay attributes={{ stroke: "red" }} bounds={bounds}>
        <rect x="0" y="0" width="100%" height="100%" fill="blue" />
        <circle r="10" cx="20" cy="20" fill="red" />
        <text x="50%" y="50%" stroke="white">
          FE BBS
        </text>
      </SVGOverlay>
    </MapContainer>
  );
};

export default SVGOverlayExample;
