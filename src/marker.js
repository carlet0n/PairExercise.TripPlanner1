const mapboxgl = require('mapbox-gl');

const iconURLs =  {
	activity: 'url(http://i.imgur.com/WbMOfMl.png)',
	hotel: 'url(http://i.imgur.com/D9574Cu.png)',
	restaurant: 'url(http://i.imgur.com/cqR6pUI.png)',
}

const buildMarker = (type, coords) => {
	const newMarker = document.createElement("div")
	newMarker.style.width = "32px"
	newMarker.style.height = "39px"
	console.log(coords)
	console.log(type)
	if (type === "activity") newMarker.style.backgroundImage = iconURLs.activity
	if (type === "hotel") newMarker.style.backgroundImage = iconURLs.hotel
	if (type === "restaurant") newMarker.style.backgroundImage = iconURLs.restaurant
	return new mapboxgl.Marker(newMarker).setLngLat(coords)
}
		

//console.log(buildMarker("hotel"));

module.exports = buildMarker
// return new mapboxgl.Marker(div1).setLngLat([-60.009151, 40.705086]).addTo(map)