import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

export default function Map({ position }) {
    return (
        <MapContainer
            center={position}
            zoom={12}
            scrollWheelZoom={false}
            style={{ height: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}></Marker>
        </MapContainer>
    );
}
