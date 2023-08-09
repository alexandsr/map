


// Locations
    // Cities/Towns
    const Minneapolis = {lat: 44.9778, lng: -93.2650};
    const NYC = {lat: 40.7128, lng: -74.0060};
    const Dallas = {lat: 32.7767, lng: -96.7970};
    const SantaCruz = {lat: 36.9741, lng: -122.0308};
    const SanFran= {lat: 37.7749, lng: -122.4194};

    const Jönköping = {lat: 57.7826, lng: 14.1618};
    const Stockholm = {lat: 59.3293, lng: 18.0686};
    const Täby = {lat: 59.4419, lng: 18.0703};
    const Gävle = {lat: 60.6749, lng: 17.1413};
    const Borlänge = {lat: 60.4843, lng: 15.4340};
    const Falun = {lat: 60.6065, lng: 15.6355};
    const Nyhyttan = {lat: 60.4995, lng: 15.7884};
    const Leksand = {lat: 60.7304, lng: 14.9980};
    const Abisko = {lat: 68.3495, lng: 18.8312};

    const Paris = {lat: 48.8566, lng: 2.3522};
    const Köpenhamn = {lat: 55.6761, lng: 12.5683};
    const Oslo = {lat: 59.9139, lng: 10.7522};
    const Reykjavik = {lat: 64.1466, lng: -21.9426};

    // Airports
    const SFO = {lat: 37.6213, lng: -122.3790}; // San Fransisco
    const MSP = {lat: 44.8848, lng: -93.2223}; // Minneapolis
    const AMS = {lat: 52.3105, lng: 4.7683}; // Amsterdam
    const ARN = {lat: 59.6494, lng: 17.9343}; // Stockholm 
    const TFS = {lat: 28.0468, lng: 16.5725}; // Tenerife
    const MUC = {lat: 48.35505282173698, lng: 11.783049771232731}; // München
    const BLQ = {lat: 44.5348446677629, lng: 11.28768563178797}; // Bologna
    const ZRH = {lat: 47.46181742836945, lng: 8.550838338898973}; // Zürich

    // Modes
const air = {
    weight: 4,
    opacity: 0.9,
    color: '#004854',
};
const train = {
    weight: 4,
    opacity: 0.9,
    color: '#BB0A21',
};
const bike = {
    weight: 4,
    opacity: 0.9,
    color: '#F17300',
};
const foot = {
    weight: 4,
    opacity: 0.9,
    color: '#0EB454',
};
const subway = {
    weight: 4,
    opacity: 0.9,
    color: '#DE2110',
};
const bus = {
    weight: 4,
    opacity: 0.9,
    color: '#BF4B21',
};
const boat = {
    weight: 4,
    opacity: 0.9,
    color: '#522E4B',
};
const car = {
    weight: 4,
    opacity: 0.9,
    color: '#111111',
};
// Initialize the Leaflet map
const map = L.map('map', { zoomControl: false }).setView([30, 10], 3); 
var mapContent = new L.featureGroup

var baseIcon = L.Icon.extend({
    options: {
        shadowUrl: '',
        iconSize:     [26, 26], // size of the icon
        shadowSize:   [0, 0], // size of the shadow
        iconAnchor:   [13, 13], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 0],  // the same for the shadow
        popupAnchor:  [0, -13] // point from which the popup should open relative to the iconAnchor
        }
});




var schoolIcon = new baseIcon({iconUrl: 'travel/images/school_building.png', className: 'schoolIcon'}),
    hotelIcon = new baseIcon({iconUrl: 'travel/images/hotel_bed.png', className: 'hotelIcon'}),
    airportIcon = new baseIcon({iconUrl: 'travel/images/airport.png', className: 'airportIcon'}),
    campsiteIcon = new baseIcon({iconUrl: 'travel/images/tent_camp.png', className: 'campsiteIcon'}),
    houseIcon = new baseIcon({iconUrl: 'travel/images/house.png', className: 'houseIcon'}),
    trainIcon = new baseIcon({iconUrl: 'travel/images/train_station.png', className: 'trainIcon'}),
    busIcon = new baseIcon({iconUrl: 'travel/images/bus_stop.png', className: 'busIcon'}),
    boatIcon = new baseIcon({iconUrl: 'travel/images/boat_dock.png', className: 'boatIcon'})
    beachIcon = new baseIcon({iconUrl: 'travel/images/beach.png', className: 'beachIcon'})

// Add a base map layer
L.tileLayer('     https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=7d8e9f8db9ff49f5a80ad2b62eda4470 ', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: '7d8e9f8db9ff49f5a80ad2b62eda4470',
	maxZoom: 22
}).addTo(map);
// Fit Bounds
function fitBounds() {
    var bounds = mapContent.getBounds();
    map.fitBounds(bounds);
    console.log("Finished Fitting Map Bounds to Map Plots")
}