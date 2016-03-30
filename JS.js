	var map = L.map('map').setView([40.62, -74.02], 13);
	var tileLayer = L.tileLayer('https://{s}.tiles.mapbox.com/v4/{mapId}/{z}/{x}/{y}.png?access_token={token}', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    subdomains: ['a','b','c','d'],
	    mapId: 'rakshak.l937n12c',
	    token: 'pk.eyJ1IjoicmFrc2hhayIsImEiOiJ5cHhqeHlRIn0.Vi87VjI1cKbl1lhOn95Lpw'
		});
	
	tileLayer.addTo(map);
	var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [30, 30],
        iconAnchor:   [0, 0],
        popupAnchor:  [0, 0]
    }
	});
var coolicon1 = new LeafIcon({iconUrl: 'http://gkv.com/wp-content/uploads/leaflet-maps-marker-icons/map_marker-red1.png'});
	L.marker([40.62065, -74.0172], {icon: coolicon1}).addTo(map).bindPopup("<b>Bingo!</b><br>Clicked Me");

var coolicon1 = new LeafIcon({iconUrl: 'http://gkv.com/wp-content/uploads/leaflet-maps-marker-icons/map_marker-orange.png'});
	L.marker([40.63065, -74.0272], {icon: coolicon1}).addTo(map).bindPopup("<b>Bingo!</b><br>Clicked Me");

var coolicon1 = new LeafIcon({iconUrl: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Azure.png'});
	L.marker([40.63765, -74.0072], {icon: coolicon1}).addTo(map).bindPopup("<b>Bingo!</b><br>Clicked Me");