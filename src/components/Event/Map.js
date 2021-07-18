import React from "react";

export default function Map({ lat, lon }) {
    return (
        <iframe
            width="200"
            height="200"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDTifUEkJirTuMoebWwAw77e9sHSEvSUjw
            &q=Space+Needle,Seattle+WA"
        >
            >
        </iframe>
    );
}
