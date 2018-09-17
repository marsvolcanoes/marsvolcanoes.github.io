var mapE;

function initMapEarth() {
	mapE = new google.maps.Map(document.getElementById('mapEarth'), {
		center: new google.maps.LatLng(39,-75),
		zoom: 2,
		minZoom: 1,
		mapTypeId: 'satellite'
	});
}


