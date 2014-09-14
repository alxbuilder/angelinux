function init() {
	// Set co-ordinates for final destination and a landmark
	var fdlon = -7.7810, fdlat = 53.7260;
	var lmlon = -7.7960, lmlat = 53.7260;

	map = new OpenLayers.Map("mapdiv");
	var mapnik = new OpenLayers.Layer.OSM();
	map.addLayer(mapnik);

	// Identify final destination
	var fdest = new OpenLayers.LonLat(fdlon, fdlat).transform(
		new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
		new OpenLayers.Projection("EPSG:900913") // to Spherical Mercator
	);

	//	Identify landmark en route
	var lmark = new OpenLayers.LonLat (lmlon, lmlat).transform(

	);
	
	//	Calculate centre of map to be half way between these points
	var avglon = (fdlon + lmlon)/2;
	var avglat = (fdlat + lmlat)/2;
	var centre = new OpenLayers.LonLat (avglon, avglat).transform(
		new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
		new OpenLayers.Projection("EPSG:900913") // to Spherical Mercator
	);	
	
	var zoom = 14;

	// Add the layer to mark the map
	var markers = new OpenLayers.Layer.Markers( "Markers" );
	map.addLayer(markers);

	// Markers for a landmark, and for final destination
	markers.addMarker(new OpenLayers.Marker(fdest));
	map.setCenter(centre, zoom);
}