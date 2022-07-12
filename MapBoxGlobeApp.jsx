
import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import 'mapbox-gl/dist/mapbox-gl.css';
import { Cargando } from './src/components/Cargando';
import { getMapBox } from './src/components/helpers/getMapBox';


const MapBoxGlobeApp = () => {

  // Hacer referencia al contenedor el div.
  const mapContainer = useRef(null);

  // Realizo el setTimeout para que se cargue el mapa y el valor de la variable mapContainer.current 
  // no sea null.

  setTimeout(() => {
    // Función de generar el mapa
    getMapBox();
  }, 500);

  return (


    <div
      ref={mapContainer}
      id='map-container'
    >
      <Cargando />
      
    </div>
  )
}


export default MapBoxGlobeApp;



