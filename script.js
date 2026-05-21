document.addEventListener('DOMContentLoaded', () => {
    
    // --- INIT LEAFLET REAL INTERACTIVE MAP ---
    const map = L.map('real-map', {
        zoomControl: false,
        attributionControl: false
    }).setView([40.730610, -73.935242], 13);

    // Light map layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Subtle geometric vehicle location pins
    const createPin = (color) => {
        return L.divIcon({
            className: 'geometric-pin',
            html: `<div style="width: 16px; height: 16px; background: ${color}; border-radius: 4px; transform: rotate(45deg); box-shadow: 0 4px 12px rgba(0,0,0,0.15); border: 2px solid white;"></div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8]
        });
    };
    
    // Add fake geometric cars
    L.marker([40.7350, -73.9400], {icon: createPin('#000')}).addTo(map);
    L.marker([40.7250, -73.9300], {icon: createPin('#000')}).addTo(map);
    L.marker([40.7400, -73.9250], {icon: createPin('#000')}).addTo(map);

    // Ultra-thin route line (mockup route)
    const routeCoordinates = [
        [40.7350, -73.9400],
        [40.7330, -73.9380],
        [40.7300, -73.9350],
        [40.7250, -73.9300]
    ];
    
    // Draw route using ultra-thin line
    L.polyline(routeCoordinates, {
        color: '#000000',
        weight: 2,
        opacity: 0.8,
        lineCap: 'square'
    }).addTo(map);

});
