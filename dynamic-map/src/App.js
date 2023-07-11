import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { icon } from "leaflet";
import OSMProvider from "./OSMProvider";
import CitiesData from "./JSON/CitiesData.json";
import "leaflet/dist/leaflet.css";
import "./CSS/App.css";

function App() {
  {
    /* Setting center latitude and longitude */
  }
  const [center, setCenter] = useState({
    latitutde: 13.084622,
    langitude: 80.248357,
  });
  const zoomLevel = 13;
  {
    /*Customising the location icon*/
  }
  const marker = new L.Icon({
    iconUrl: "/Media/placeholder_684908.png",
    iconSize: [30, 30],
    iconAnchor: [10, 30],
    popupAnchor: [5, -30],
  });
  return (
    <div className="App">
      {/* Map container */}
      <MapContainer
        center={[23.512, 80.329]}
        zoom={zoomLevel}
        className="map-container"
      >
        <TileLayer url={OSMProvider.maptiler.url} />
        {/* Iterating over the object and creating the Marker for the every city */}
        {Object.keys(CitiesData).map((key, index) => (
          <Marker
            position={[CitiesData[key].latitude, CitiesData[key].longitude]}
            icon={marker}
          >
            {/* Popup pages  */}
            <Popup>
              <p>{CitiesData[key].city}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
