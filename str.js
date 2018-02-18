var template = 'http://c.tiles.mapbox.com/v3/examples.map-szwdot65/{Z}/{X}/{Y}.png';
var provider = new MM.TemplatedLayer(template);
var map = new MM.Map('map', provider);
map.setZoom(10).setCenter({ lat: 51.55, lon: 0.1 });


