window.onload = initialize;
var map;
var malllat=53.725932;
var malllon=-7.781190;
var stationlat=53.724307;
var stationlon= -7.794892;
var centrelat=(malllat + stationlat)/2;
var centrelon=(malllon + stationlon)/2;

//Create a Google Maps Geocoder object
var geocoder = new google.maps.Geocoder();
//Google Maps global map variable

function initialize() {
	// Show locations of the mall and the station
	var themallloc = new google.maps.LatLng(malllat, malllon);
	printAddress(themallloc);
	var stationloc = new google.maps.LatLng(stationlat, stationlon);
	printAddress(stationloc);
	var centreloc = new google.maps.LatLng(centrelat, centrelon);
	//Setup map and position on map
	var myOptions = {
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.HYBRID,
		center: centreloc
	}
	/* center: themallloc */
    	map = new google.maps.Map(document.getElementById("map"), myOptions);

		// To add the marker to the map set it up then call setMap();
		var marker = new google.maps.Marker({
		    position: themallloc,
		    title:"Come over here"

		});

		marker.setMap(map);

		var marker2 = new google.maps.Marker({
				    position: stationloc,
				    title:"Longford Bus and Rail Station"

		});

marker2.setMap(map);
		}

	// use Google Maps API to reverse geocode your location
	function printAddress(themallloc) {

	  // Use Google maps to find out about the location
	  geocoder.geocode({ 'latLng': themallloc }, function (results, status) {
	    if (status == google.maps.GeocoderStatus.OK) {
	      if (results[0]) {
	        document.getElementById('map').innerHTML =
				'<b> Loading map for:</b><br />' +
				'15 Ardnacassa Lawns,<br />' +
				'Dublin Road, <br /> Longford. <br />'
	          results[0].formatted_address;
	      } else {
	        error('Google did not return any results.');
	      }
	    } else {
	      error("Reverse Geocoding failed due to: " + status);
	    }
	  });
	}
	function error(msg) {
	  alert(msg);
	}
