import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ visitedCountries, dogPawIcon }: {
  visitedCountries: Array<{ lat: number; lng: number; name: string }>;
  dogPawIcon: { src: string };
}) => {

  const mapRef = useRef<L.Map>(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map', {
        zoomControl: false
      }).setView([35.8617, 104.1954], 4);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      }).addTo(mapRef.current);

      // 创建狗脚印图标
      const pawIcon = L.icon({
        iconUrl: dogPawIcon.src,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
      });

      visitedCountries.forEach(country => {
        L.marker([country.lat, country.lng], { icon: pawIcon })
          .addTo(mapRef.current)
          .bindPopup(country.name, {
            className: 'custom-popup'
          });
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [mapRef, visitedCountries, dogPawIcon]);

  return (
    <div id="map" style={{ height: '400px', width: '100%', borderRadius: '15px', overflow: 'hidden' }} />
  );
};

export default MapComponent;
