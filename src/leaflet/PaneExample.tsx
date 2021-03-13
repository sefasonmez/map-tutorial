import { LatLngBoundsExpression } from "leaflet";
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Rectangle, Pane } from "react-leaflet";
import { tileURLs } from "./TileLayerExample";

const outer: LatLngBoundsExpression = [
  [42.110465, 26.030619],
  [36.037128, 46.00908],
];
const inner: LatLngBoundsExpression = [
  [49.505, -2.09],
  [53.505, 2.09],
];

function BlinkingPane() {
  const [render, setRender] = useState(true);
  const timerRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setRender((r) => !r);
    }, 500);
    return () => {
      clearInterval((timerRef.current as unknown) as number);
    };
  }, []);

  return render ? (
    <Pane name="red-rectangle" style={{ zIndex: 500 }}>
      <Rectangle bounds={outer} pathOptions={{ color: "red" }} />
    </Pane>
  ) : null;
}

const PaneExample = () => {
  return (
    <MapContainer bounds={outer} scrollWheelZoom>
      <TileLayer url={tileURLs.GOOGLE_SATELLITE_ONLY} />
      <BlinkingPane />
      <Pane name="yellow-rectangle" style={{ zIndex: 499 }}>
        <Rectangle bounds={inner} pathOptions={{ color: "yellow" }} />
        <Pane name="white-rectangle">
          <Rectangle
            bounds={outer}
            pathOptions={{ color: "white", fillOpacity: 0.3 }}
          />
        </Pane>
      </Pane>
    </MapContainer>
  );
};

export default PaneExample;
