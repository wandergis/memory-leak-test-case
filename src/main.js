mapboxgl.accessToken = 'pk.eyJ1Ijoid2FuZGVyZ2lzIiwiYSI6InJhc0VUN1EifQ.V7rg9aAMQZQGx19VR6HE_Q';
var colors = {
  0: 'RGBA(51, 252, 130, 1.00)',
  1: 'RGBA(51, 252, 130, 1.00)',
  2: 'RGBA(253, 198, 50, 1.00)',
  3: 'RGBA(242, 35, 96, 1.00)',
  4: 'RGBA(152, 15, 55, 1.00)',
};
var map = new mapboxgl.Map({
  container: 'map',
  center: [0.527, 48.822],
  zoom: 3,
  style: 'mapbox://styles/mapbox/dark-v9'
});
map.on('load', function() {
  map.addSource("flyline", {
    "type": "geojson",
    "data": {
      type: "FeatureCollection",
      features: []
    }
  });
  var layer = {
    "id": "flyline",
    "type": "line",
    "source": "flyline",
    "paint": {
      "line-width": 0.5,
      "line-opacity": 0.5,
      "line-color": {
        "type": "categorical",
        "property": "status",
        "stops": [
          [0, colors[0]],
          [1, colors[1]],
          [2, colors[2]],
          [3, colors[3]],
          [4, colors[4]]

        ]
      }
    }
  };
  map.addLayer(layer);
  resetData();
})
document.getElementById('refresh').onclick = resetData;

function resetData() {
  mapboxgl.util.getJSON('data/data.json', function(err, data) {
    if (err) throw err;
    data.features.forEach(function(feature, index) {
      feature.properties.status = Math.floor(Math.random() * 5);
    });
    map.getSource('flyline').setData(data);
  });
}
