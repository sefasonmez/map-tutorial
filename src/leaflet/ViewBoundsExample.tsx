import { LatLngBoundsExpression } from "leaflet";
import React, { useMemo, useState } from "react";
import { MapContainer, TileLayer, Rectangle, useMap } from "react-leaflet";
import { tileURLs } from "./TileLayerExample";

const innerBounds: LatLngBoundsExpression = [
  [49.505, -2.09],
  [53.505, 2.09],
];
const outerBounds: LatLngBoundsExpression = [
  [50.505, -29.09],
  [52.505, 29.09],
];

const redColor = { color: "red" };
const whiteColor = { color: "white" };

function SetBoundsRectangles() {
  const [bounds, setBounds] = useState(outerBounds);
  const map = useMap();

  const innerHandlers = useMemo(
    () => ({
      click() {
        setBounds(innerBounds);
        map.fitBounds(innerBounds);
      },
    }),
    [map]
  );
  const outerHandlers = useMemo(
    () => ({
      click() {
        setBounds(outerBounds);
        map.fitBounds(outerBounds);
      },
    }),
    [map]
  );

  return (
    <>
      <Rectangle
        bounds={outerBounds}
        eventHandlers={outerHandlers}
        pathOptions={bounds === outerBounds ? redColor : whiteColor}
      />
      <Rectangle
        bounds={innerBounds}
        eventHandlers={innerHandlers}
        pathOptions={bounds === innerBounds ? redColor : whiteColor}
      />
    </>
  );
}

const ViewBoundsExample = () => {
  return (
    <MapContainer bounds={outerBounds} scrollWheelZoom>
      <TileLayer url={tileURLs.GOOGLE_SATELLITE_ONLY} />
      <SetBoundsRectangles />
    </MapContainer>
  );
};

export default ViewBoundsExample;
