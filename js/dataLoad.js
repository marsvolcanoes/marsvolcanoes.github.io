function dataLoad() {
	//mapE.data.loadGeoJson('https://jarichardson.github.io/json/points.json');
	/*
	mapE.data.setStyle({
		fillColor: 'red',
		strokeWeight: 2
	});
	*/
	
//	mapM.data.loadGeoJson('https://localhost/home/jacob-ssder/Science/Professional/website/jarichardson.github.io/json/points.json');
	/*
	mapM.data.setStyle({
		fillColor: 'green',
		strokeWeight: 4
	});
	*/


var iconBase = 'http://maps.google.com/mapfiles/kml/';

var icons = {
  data: {
    icon: new google.maps.MarkerImage(iconBase + 'pal4/icon13.png',
                new google.maps.Size(30, 30),
                new google.maps.Point(0, 0),
                new google.maps.Point(15, 15))
  },
  paper: {
    icon: new google.maps.MarkerImage(iconBase + 'pal4/icon0.png',
                new google.maps.Size(30, 30),
                new google.maps.Point(0, 0),
                new google.maps.Point(15, 15))
  },
  conference: {
    icon: new google.maps.MarkerImage(iconBase + 'pal2/icon6.png',
                new google.maps.Size(30, 30),
                new google.maps.Point(0, 0),
                new google.maps.Point(15, 15))
  }
};

var lbls = {
  data: {
    lbl: 'D'
  },
  paper: {
    lbl: 'P'
  },
  conference: {
    lbl: 'C'
  }
};

function addMarker(feature) {
  var marker = new google.maps.Marker({
    position: feature.position,
	//icon: icons[feature.type].icon,
	label: lbls[feature.type].lbl,
	map: mapE
  });
  var infowindow = new google.maps.InfoWindow({
    content: feature.content
  });
  marker.addListener('click', function() {
    infowindow.open(mapE, marker);
  });
}

var features = [
  {
  	//Tolbachik Paper
    position: new google.maps.LatLng(55.7918, 160.3290),
    type: 'paper',
    content: '<p class="pub-title">Lava flow mapping and volume calculations for the 2012–2013 Tolbachik, Kamchatka, fissure eruption using bistatic TanDEM-X InSAR</p>'+
	'<p class="pub-author">Kubanek, J., <strong>Richardson, J.A.</strong>, Charbonnier, S. J., and Connor, L. J.</p>'+
	'<span class="pub-journal">Bulletin of Volcanology</span>'+
	'<span class="pub-year">2015</span>'+
	'<span class="pub-doi"><a href="http://dx.doi.org/10.1007/s00445-015-0989-9">doi:10.1007/s00445-015-0989-9</a></span>'
  }, {
  	//Iceland LiDAR Data
    position: new google.maps.LatLng(64.9064, -16.7796),
    type: 'data',
    content: '<p class="pub-title">2014-5 Holuhraun Lava Flow LiDAR Data</p>'+
	'<p class="pub-author"> Richardson, J.A., Whelley, P., et al.</p>'+
	'<span class="pub-year">2015,2016</span>'
  }, {
  	//Earthquake paper
    position: new google.maps.LatLng(10.1446, -85.4530),
    type: 'paper',
    content: '<p class="pub-title">Multiscale postseismic behavior on a megathrust: The 2012 Nicoya earthquake, Costa Rica</p>'+
	'<p class="pub-author"> Malservisi, R., Schwartz, S.Y., Voss, N., Protti, M., Gonzalez, V., Dixon, T.H., Jiang, Y., Newman, A.V., <strong>Richardson, J.A.</strong>, Walter, J.I., and Voytenko, D.</p>'+
	'<span class="pub-journal">Geochemistry, Geophysics, Geosystems</span>'+
	'<span class="pub-year">2015</span>'+
	'<span class="pub-doi"><a href="http://dx.doi.org/10.1002/2015GC005794">doi:10.1002/2015GC005794</a></span>'
  }, {
  	//San Raf Data
  	position: new google.maps.LatLng(38.7455, -111.02),
  	type: 'data',
    content: '<p class="pub-title">Aerial LiDAR Survey of the San Rafael, UT Exposed Subsurface Volcanic Features</p>'+
	'<p class="pub-author"><strong>PI: Richardson, J.A.</strong></p>'+
	'<span class="pub-journal">National Center for Airborne Laser Mapping</span>'+
	'<span class="pub-year">2013</span>'+
	'<span class="pub-doi"><a href="http://dx.doi.org/10.5069/G908638S">doi:10.5069/G908638S</a></span>'
  }, {
  	//Rattlesnake Paper
  	position: new google.maps.LatLng(35.225, -111.333),
  	type: 'paper',
    content: '<p class="pub-title">Subsurface structure of a maar-diatreme and associated tuff ring from a high-resolution geophysical survey, Rattlesnake Crater, Arizona</p>'+
	'<p class="pub-author"> Marshall, A., Connor, C., Kruse, S., Malservisi, R., <strong>Richardson, J.A.</strong>, Courtland, L., Wilson, J., and Karegar, M.A.</p>'+
	'<span class="pub-journal">Journal of Volcanology and Geothermal Research</span>'+
	'<span class="pub-year">2015</span>'+
	'<span class="pub-doi"><a href="http://dx.doi.org/10.1016/j.jvolgeores.2015.09.006">doi:10.1016/j.jvolgeores.2015.09.006</a></span>'
  }, {
  	//San Raf Paper
  	position: new google.maps.LatLng(38.5083, -111.2597),
  	type: 'paper',
    content: '<p class="pub-title">Role of sills in the development of volcanic fields: Insights from lidar mapping surveys of the San Rafael Swell, Utah </p>'+
	'<p class="pub-author"><strong>Richardson, J.A.</strong>, Connor, C.B., Wetmore, P.H., Connor, L.J., and Gallant, E.A.</p>'+
	'<span class="pub-journal">Geology</span>'+
	'<span class="pub-year">2015</span>'+
	'<span class="pub-doi"><a href="http://dx.doi.org/10.1130/G37094.1">doi:10.1130/G37094.1</a></span>'
  }, {
  	//Panabaj Paper
  	position: new google.maps.LatLng(14.62, -91.23),
  	type: 'paper',
    content: '<p class="pub-title">Modeling the October 2005 lahars at Panabaj (Guatemala)</p>'+
	'<p class="pub-author">Charbonnier, S., Connor, C., Connor, L., Sheridan, M., Oliva Hernández, J., <strong>Richardson, J.A.</strong></p>'+
	'<span class="pub-journal">Bulletin of Volcanology</span>'+
	'<span class="pub-year">2018</span>'+
	'<span class="pub-doi"><a href="">https://doi.org/10.1007/s00445-017-1169-x</a></span>'
  }
  /*, {
  	//nevado del ruiz abstract
  	position: new google.maps.LatLng(4.8920, -75.3188),
  	type: 'conference'
  }, {
  	//Iceland AGU 2016
    position: new google.maps.LatLng(64.9331, -16.5990),
    type: 'conference'
    content: 'Tolbachik Data'
  },*/
];

for (var i = 0, feature; feature = features[i]; i++) {
  addMarker(feature);
}
 
      
}
