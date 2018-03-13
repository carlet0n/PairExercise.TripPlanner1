const mapboxgl = require("mapbox-gl");
const div1 = document.createElement("div")
const marker = require('./marker')
div1.style.width = "32px"
div1.style.height = "39px"
div1.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
mapboxgl.accessToken = "pk.eyJ1IjoiY2FybGV0MG4iLCJhIjoiY2plcTNuanAwMGhtZjMzcW5hb28xZ2FidyJ9.ixMknuS_cVGym6QQwsgYsQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


// new mapboxgl.Marker(div1).setLngLat([-74.009151, 40.705086]).addTo(map)

const test = function() {
  return new mapboxgl.Marker(div1).setLngLat([-60.009151, 40.705086]).addTo(map)
}

marker("hotel", [-74.009151, 40.705086]).addTo(map)