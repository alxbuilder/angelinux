var element = document.getElementById("map");

var map = new google.maps.Map(element, {
			center: new google.maps.LatLng(53.73338, -7.79228),
			zoom: 15,
			mapTypeId: "OSM",
			mapTypeControlOptions: { mapTypeIds: ["OSM"] }
			});
			
map.mapTypes.set("OSM", new google.maps.ImageMapType({
	getTileUrl: function(coord, zoom) {
		return "http://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
		}, tileSize: new google.maps.Size(256, 256),
			name: "OpenStreetMap",
			maxZoom: 18
		}));