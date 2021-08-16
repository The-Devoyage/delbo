/* eslint-disable import/no-webpack-loader-syntax */
import { CImg } from "@coreui/react";
import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";
// @ts-ignore
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export interface MapProps {}

const Map: React.FC<MapProps> = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 400,
    latitude: 40.93235,
    longitude: -76.60224,
    zoom: 7,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <Marker latitude={40.93235} longitude={-76.60224}>
          <CImg src="field.png" width="40px" />
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
