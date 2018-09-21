const baseUrl = 'http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/';
const opmAttribution = '<a href="https://github.com/openplanetary/opm/wiki/OPM-Basemaps" target="_blank">OpenPlanetaryMap</a>'

// Basemaps
const basemapOPMVector = new L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/nmanaud/api/v1/map/named/opm-mars-basemap-v0-1/0,1,2,3,4/{z}/{x}/{y}.png', {
  maxNativeZoom: 9,
  zoom: 3,
  tms: false,
  autoZIndex: true,
  attribution: opmAttribution
});

const basemapTexture = new L.tileLayer(baseUrl + 'celestia_mars-shaded-16k_global/{z}/{x}/{y}.png', {
  maxNativeZoom: 9,
  zoom: 3,
  tms: true,
  autoZIndex: true,
  attribution: 'Celestia/praesepe | ' + opmAttribution
});

const basemapMOLAGrey = new L.tileLayer(baseUrl + 'mola-gray/{z}/{x}/{y}.png', {
  maxNativeZoom: 9,
  tms:true,
  autoZIndex: true,
  attribution: 'NASA/MOLA | ' + opmAttribution 
});

const basemapMOLAColor = new L.tileLayer(baseUrl + 'mola-color/{z}/{x}/{y}.png', {
  maxNativeZoom: 6,
  tms: true,
  autoZIndex: true,
  attribution: 'NASA/MOLA | ' + opmAttribution
});

const basemapViking = new L.tileLayer(baseUrl + 'viking_mdim21_global/{z}/{x}/{y}.png', {
  maxNativeZoom: 7,
  tms:true,
  autoZIndex: true,
  attribution: 'NASA/Viking/USGS | ' + opmAttribution
});

const basemapHillshade = new L.tileLayer('https://s3.us-east-2.amazonaws.com/opmmarstiles/hillshade-tiles/{z}/{x}/{y}.png', {
  maxNativeZoom: 7,
  tms:true,
  autoZIndex: true,
  attribution: 'NASA/MOLA | ' + opmAttribution
});

const overlay = new L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/nmanaud/api/v1/map/named/opm-mars-basemap-v0-1/5/{z}/{x}/{y}.png', {
  tms: false,
  autoZIndex: true,
  opacity: 1,
  attribution: 'USGS'
});

// Layer Control
const baseMaps = {
  'OPM Mars Basemap v0.1': basemapOPMVector,
  'OPM Shaded Mars Surface Texture Map': basemapTexture,
  'OPM Shaded Grayscale MOLA Elevation': basemapMOLAGrey,
  'OPM Shaded Colour MOLA Elevation': basemapMOLAColor,
  'OPM Global Viking MDIM2.1 Colorized Mosaic': basemapViking,
  'OPM Global Hillshade Map': basemapHillshade
};

const overlayMaps = {
  'OPM Mars Basemap (v0.1) Labels': overlay
};