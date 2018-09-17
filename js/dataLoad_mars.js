function dataLoadM() {
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
	map: mapM
  });
  var infowindow = new google.maps.InfoWindow({
    content: feature.content
  });
  marker.addListener('click', function() {
    infowindow.open(mapM, marker);
  });
}

var features = [
  {
  	//Syrtis Paper
    position: new google.maps.LatLng(7.0, 68.0),
	type: 'paper',
	content: '<p class="pub-title">The Syrtis Major volcano, Mars: A multidisciplinary approach to interpreting its magmatic evolution and structural development</p>'+
	'<p class="pub-author"> Lillis, R.J., Dufek, J., Kiefer, W.S., Black, B.A., <strong>Richardson, J.A.</strong>, and Bleacher, J.E.</p>'+
	'<span class="pub-journal">Journal of Geophysical Research: Planets</span>'+
	'<span class="pub-year">2015</span>'+
	'<span class="pub-doi"><a href="http://dx.doi.org/10.1002/2014JE004774">doi:10.1002/2014JE004774</a></span>'
  }, {
  	//Syria Paper
    position: new google.maps.LatLng(-15, -100),
    type: 'paper',
	content: '<p class="pub-title">The volcanic history of Syria Planum, Mars</p>'+
	'<p class="pub-author"> <strong>Richardson, J.A.</strong>, Bleacher, J.E., and Glaze, L.S.</p>'+
	'<span class="pub-journal">Journal of Volcanology and Geothermal Research</span>'+
	'<span class="pub-year">2013</span>'+
	'<span class="pub-doi"><a href="http://dx.doi.org/10.1016/j.jvolgeores.2012.11.007">doi:10.1016/j.jvolgeores.2012.11.007</a></span>'
	
  },  {
  	//Tharsis Vents
    position: new google.maps.LatLng(4,-105),
    type: 'data',
	content: '<p class="pub-title">Catalog of small volcanic vents in the Tharsis province</p>'+
	'<p class="pub-author">PI Bleacher, J.E.; Richardson, J.A.; and others.</p>'+
	'<span class="pub-journal">Planetary Data System IMG Annex</span>'+
	'<span class="pub-year">2016</span>'+
	'<span class="pub-doi"><a href="https://astrogeology.usgs.gov/search/details/Mars/Research/Volcanic/TharsisVents/">astrogeology.usgs.gov</a></span>'
  }, {
  	//Arsia Paper
    position: new google.maps.LatLng(-8.5, -120),
    type: 'paper',
	content: '<p class="pub-title">Recurrence rate and magma effusion rate for the latest volcanism on Arsia Mons, Mars</p>'+
	  '<p class="pub-author"><strong>Richardson, J.A.</strong>, Wilson, J.A., Connor, C.B., Bleacher, J.E., and Kiyosugi, K.</p>'+
	  '<span class="pub-journal">Earth and Planetary Science Letters</span>'+
	  '<span class="pub-year">2017</span>'+
	  '<span class="pub-doi"><a href="http://dx.doi.org/10.1016/j.epsl.2016.10.040">doi:10.1016/j.epsl.2016.10.040</a></pan>'
  } /*,{
  	//Syria Conference
    position: new google.maps.LatLng(-11, -106),
    type: 'conference'
  },{
  	//Arsia Conference
    position: new google.maps.LatLng(-10, -120),
    type: 'conference'
  },   {
    position: new google.maps.LatLng(-33.91725, 151.23011),
    type: 'data'
  }, {
    position: new google.maps.LatLng(-33.91872, 151.23089),
    type: 'data'
  }, {
    position: new google.maps.LatLng(-33.91784, 151.23094),
    type: 'data'
  }, {
    position: new google.maps.LatLng(-33.91682, 151.23149),
    type: 'data'
  }, {
    position: new google.maps.LatLng(-33.91790, 151.23463),
    type: 'data'
  }, {
    position: new google.maps.LatLng(-33.91666, 151.23468),
    type: 'data'
  }, {
    position: new google.maps.LatLng(-33.916988, 151.233640),
    type: 'data'
  }, {
    position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
    type: 'conference'
  }, {
    position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
    type: 'conference'
  }, {
    position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
    type: 'conference'
  }, {
    position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
    type: 'conference'
  }, {
    position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
    type: 'conference'
  }, {
    position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
    type: 'conference'
  }, {
    position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
    type: 'conference'
  }, {
    position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
    type: 'paper'
  }*/
];

for (var i = 0, feature; feature = features[i]; i++) {
  addMarker(feature);
}
 
      
}
