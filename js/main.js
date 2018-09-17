var gMap;                   // our global map instance
var gConfig;                // global configutation variables
var gMapSearch;             // a search engine
var gSidebar;               // a search results handler


function initMap() {
  // These are our default configuration options.  They can be
  // overridden by parameters in the URL.
  if (!gConfig) {
    gConfig = new Config(window.location.hash.substring(1),
                         { lat: 0,
                           lon: -90,
                           zoom: 3,
                           map: 'elevation',
                           snippets: 1,
                           q: '' });
  }

  // Create our global map instance, and add the default controls.
  var mapOptions = {
    center: new google.maps.LatLng(0, -90),
    zoom: parseInt(gConfig.getValue('zoom'), 10),
    mapTypeControlOptions: {
      mapTypeIds: ['elevation', 'visible', 'infrared']
    },
    mapTypeId: 'elevation',
    disableDefaultUI: true,
    mapTypeControl: true,
    panControl: true,
    zoomControl: true
  };

  // Enable the visual refresh.
  google.maps.visualRefresh = true;
  gMap = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 39, lng: -75},
		zoom: 2
	});

  var copyrightCtl = makeDiv(document, { height: '1.3em', fontSize: 'small' });
  var mapcaption = makeDiv(document, {});
  mapcaption.style.margin = '5px';
  gMap.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(copyrightCtl);

  addMarsMapTypes(gMap, mapcaption, copyrightCtl);

  makeCustomScalebar();
}

// Adds a custom scalebar for just the elevation map.
function makeCustomScalebar() {
  var scalebar = new Scalebar(
      document, [-9, 21], [-9, -6, -3, 0, 3, 6, 9, 12, 15, 18, 21], 'km');
  gMap.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(
      scalebar.getContainer());
  google.maps.event.addListener(gMap, 'maptypeid_changed', function() {
    var name = gMap.getMapTypeId();
    if (name.toLowerCase() == 'elevation') {
      scalebar.show();
    } else {
      scalebar.hide();
    }
  });
}

/*
function center(lat, lon) {
  // Handle being passed a LatLng directly.
  var latLng = arguments.length == 1 ? lat : new google.maps.LatLng(lat, lon);
  this.map.panTo(latLng);
}
*/
