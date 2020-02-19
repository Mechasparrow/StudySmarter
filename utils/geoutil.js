
function calculateDistance(loco1, loco2){  // generally used geo measurement function
    
    const lat1 = loco1[0];
    const lat2 = loco2[0];

    const lon1 = loco1[1];
    const lon2 = loco2[1];

    
    
    var R = 6378.137; // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d * 1000; // meters
}

function pullUpDirections(loco) {

    const lat = loco[0];
    const lon = loco[1];

    const mapUrl = "https://www.google.com/maps/dir/?api=1&destination=" + lat.toString() + "," + lon.toString();

    window.open(mapUrl);
}

const GeoUtil = {
    calculateDistance,
    pullUpDirections
}

export default GeoUtil;