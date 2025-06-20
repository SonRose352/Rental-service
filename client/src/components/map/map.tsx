import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import { MapProps } from '../../types/map';

const Map: React.FC<MapProps> = ({ city, points, selectedPoint }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);

  const defaultIcon = L.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentIcon = L.icon({
    iconUrl: '/img/pin-active.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      // Очищаем предыдущие маркеры
      map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      // Добавляем новые маркеры
      points.forEach((point) => {
        L.marker(
          {
            lat: point.lat,
            lng: point.lng,
          },
          {
            icon: selectedPoint && point.title === selectedPoint.title ? currentIcon : defaultIcon,
          }
        ).addTo(map);
      });

      // Центрируем карту на выбранной точке
      if (selectedPoint) {
        const selected = points.find(p => p.title === selectedPoint.title);
        if (selected) {
          map.setView([selected.lat, selected.lng], city.zoom);
        }
      }
    }
  }, [map, points, selectedPoint, city.zoom]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
};

export default Map;