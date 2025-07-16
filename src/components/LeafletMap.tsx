import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface LeafletMapProps {
  height?: string;
  className?: string;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ height = '400px', className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map centered on Kapoeta East County, South Sudan
    const map = L.map(mapRef.current, {
      center: [4.77, 33.59], // Kapoeta East County coordinates
      zoom: 10,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Create custom markers for different locations
    const mainMarker = L.marker([4.77, 33.59])
      .bindPopup(`
        <div class="p-3">
          <h3 class="font-bold text-emerald-800 mb-2">Kapoeta East County</h3>
          <p class="text-sm text-gray-600 mb-2">Primary operational area</p>
          <div class="text-xs text-gray-500">
            <p>• 25 active communities</p>
            <p>• 12,000+ beneficiaries</p>
            <p>• Water & Agriculture programs</p>
          </div>
        </div>
      `, { 
        maxWidth: 200,
        className: 'custom-popup' 
      })
      .addTo(map);

    // Add surrounding communities markers
    const communities = [
      { name: 'Kapoeta Town', lat: 4.77, lng: 33.59, programs: 'Water Distribution' },
      { name: 'Narus', lat: 4.65, lng: 33.61, programs: 'Agricultural Training' },
      { name: 'Riwoto', lat: 4.83, lng: 33.45, programs: 'Community Development' },
      { name: 'Budi', lat: 4.91, lng: 33.72, programs: 'Food Security' },
      { name: 'Nagishot', lat: 4.69, lng: 33.41, programs: 'Health & Nutrition' },
    ];

    communities.forEach(community => {
      const marker = L.circleMarker([community.lat, community.lng], {
        radius: 8,
        fillColor: '#10b981',
        color: '#065f46',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
      })
      .bindPopup(`
        <div class="p-2">
          <h4 class="font-semibold text-gray-800">${community.name}</h4>
          <p class="text-xs text-gray-600">${community.programs}</p>
        </div>
      `, { maxWidth: 150 })
      .addTo(map);
    });

    // Add a custom control for zoom to fit all markers
    const FitViewControl = L.Control.extend({
      options: {
        position: 'topright'
      },
      onAdd: function() {
        const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        div.innerHTML = '<button class="bg-white hover:bg-gray-100 px-3 py-1 text-sm border border-gray-300 rounded">Fit View</button>';
        div.onclick = function() {
          const group = L.featureGroup([mainMarker, ...communities.map(c => L.marker([c.lat, c.lng]))]);
          map.fitBounds(group.getBounds(), { padding: [20, 20] });
        };
        return div;
      }
    });
    
    new FitViewControl().addTo(map);

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className={`w-full rounded-lg border border-gray-200 shadow-lg ${className}`}
      style={{ height }}
    />
  );
};

export default LeafletMap;