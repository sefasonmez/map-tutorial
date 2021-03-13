import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// import TileExample from "./leaflet/TileLayerExample";
// import LocationMarkerExample from "./leaflet/LocationMarkerExample";
// import VectorLayersExample from "./leaflet/VectorLayersExample";
// import SVGOverlayExample from "./leaflet/SVGOverlayExample";
// import OtherLayersExample from "./leaflet/OtherLayersExample";
// import TooltipExample from "./leaflet/TooltipExample";
// import LayersControlExample from "./leaflet/LayersControlExample";
// import PaneExample from "./leaflet/PaneExample";
// import DraggableMarkerExample from "./leaflet/DraggableMarkerExample";
// import ViewBoundsExample from "./leaflet/ViewBoundsExample";
// import AnimatedPanningExample from "./leaflet/AnimatedPanningExample";
// import ReactControlExample from "./leaflet/ReactControlExample";
// import ExternalStateExample from "./leaflet/ExternalStateExample";
import MapPlaceholderExample from "./leaflet/MapPlaceholderExample";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <TileExample />
    <LocationMarkerExample />
    <VectorLayersExample />
    <SVGOverlayExample />
    <OtherLayersExample /> 
    <TooltipExample />
    <LayersControlExample />
    <PaneExample />
    <DraggableMarkerExample />
    <ViewBoundsExample />
    <AnimatedPanningExample />
    <ReactControlExample /> 
    <ExternalStateExample />*/}
    <MapPlaceholderExample />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
