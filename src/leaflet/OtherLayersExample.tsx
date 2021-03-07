import { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import React from "react";
import {
  MapContainer,
  TileLayer,
  LayerGroup,
  Circle,
  FeatureGroup,
  Rectangle,
  Popup,
} from "react-leaflet";
import { tileURLs } from "./TileLayerExample";

const center: LatLngExpression = [51.505, -0.09];
const rectangle: LatLngBoundsExpression = [
  [51.49, -0.08],
  [51.5, -0.06],
];

const fillBlueOptions = { fillColor: "blue" };
const fillRedOptions = { fillColor: "red" };
const greenOptions = { color: "green", fillColor: "green" };
const purpleOptions = { color: "purple" };

const OtherLayersExample = () => {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom>
      <TileLayer url={tileURLs.GOOGLE_ROADMAP} />
      <LayerGroup>
        <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
        <Circle
          center={center}
          pathOptions={fillRedOptions}
          radius={100}
          stroke={false}
        />
        <LayerGroup>
          <Circle
            center={[51.51, -0.08]}
            pathOptions={greenOptions}
            radius={100}
          />
        </LayerGroup>
      </LayerGroup>
      <FeatureGroup pathOptions={purpleOptions}>
        <Popup>Popup in FeatureGroup</Popup>
        <Circle center={[51.51, -0.06]} radius={200} />
        <Rectangle bounds={rectangle} />
      </FeatureGroup>
    </MapContainer>
  );
};

export default OtherLayersExample;
