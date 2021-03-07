import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
// import TileExample from "./leaflet/TileLayerExample";
// import LocationMarkerExample from "./leaflet/LocationMarkerExample";
// import VectorLayersExample from "./leaflet/VectorLayersExample";
// import SVGOverlayExample from "./leaflet/SVGOverlayExample";
// import OtherLayersExample from "./leaflet/OtherLayersExample";
import TooltipExample from "./leaflet/TooltipExample";

ReactDOM.render(
  <React.StrictMode>
    {/* <TileExample /> */}
    {/* <LocationMarkerExample /> */}
    {/* <VectorLayersExample /> */}
    {/* <SVGOverlayExample /> */}
    {/* <OtherLayersExample /> */}
    <TooltipExample />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
