////
//// With thanks to mars.google.com
////


function initMapMars() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 2,
    streetViewControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['elevation', 'visible', 'infrared']
    }
  });
  
	
  map.mapTypes.set('elevation', makeMarsMapType('elevation'));
  map.mapTypes.set('visible', makeMarsMapType('visible'));
  map.mapTypes.set('infrared', makeMarsMapType('infrared'));
  map.setMapTypeId('elevation');
}


function makeMarsMapType(m) {
	var mapName;
	if (m=='elevation') {mapName = "Elevation";}
	else if (m=='infrared') {mapName = "Infrared";}
	else if (m=='visible') {mapName = "Visible";}
	
	return marsMapType = new google.maps.ImageMapType({
	  getTileUrl: function(coord, zoom) {
	    var qstr = getQSTR(coord, zoom);
	    if (!qstr) {return null;}
	    return 'https://mw1.google.com/mw-planetary/mars/'+m+'/' + qstr + '.jpg'
	  },
	  tileSize: new google.maps.Size(256, 256),
	  maxZoom: 9,
	  minZoom: 1,
	  radius: 3390000,
	  name: mapName
	});
}


// FUNCTION getQSTR
// Gets Mars Tile Location String
function getQSTR(coord, zoom) {

  var bound = Math.pow(2, zoom);
  var x = coord.x;
  var y = coord.y;

  // Don't repeat across y-axis (vertically).
  if (y < 0 || y >= bound) {
    return null;
  }

  // Repeat across x-axis.
  if (x < 0 || x >= bound) {
    x = (x % bound + bound) % bound;
  }

  var qstr = 't';
  for (var z = 0; z < zoom; z++) {
    bound = bound / 2;
    if (y < bound) {
      if (x < bound) {
        qstr += 'q';
      } else {
        qstr += 'r';
        x -= bound;
      }
    } else {
      if (x < bound) {
        qstr += 't';
        y -= bound;
      } else {
        qstr += 's';
        x -= bound;
        y -= bound;
      }
    }
  }
  
  return qstr;
}
