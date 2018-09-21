L.control.layers(baseMaps, overlayMaps, {
  position: 'topright'
}).addTo(map);

basemapOPMVector.addTo(map); // Add OPM Vector
overlay.addTo(map);          // Add labels overlay