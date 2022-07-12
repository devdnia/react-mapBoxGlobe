
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

export const getMapBox = () => {

    // Token for MapBox API
    mapboxgl.accessToken = 'YOUR TOKEN HERE';


    const map = new mapboxgl.Map({
      container: 'map-container',
      /**
       * Styles for MapBox
        mapbox://styles/mapbox/outdoors-v11
        mapbox://styles/mapbox/light-v10
        mapbox://styles/mapbox/dark-v10
        mapbox://styles/mapbox/satellite-v9
        mapbox://styles/mapbox/satellite-streets-v11
        mapbox://styles/mapbox/navigation-day-v1
        mapbox://styles/mapbox/navigation-night-v1
       */
      style: 'mapbox://styles/mapbox/navigation-night-v1', //'mapbox://styles/mapbox/satellite-streets-v11',
      zoom: 1.5,
      center: [30, 50],
      projection: 'globe'
    });

    map.on('load', () => {
      // Set the default atmosphere style
      map.setFog({});
    });
    
}