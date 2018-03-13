// const mapboxgl = require('mapbox-gl');

class buildMarker {
	constructor(type) {
		// this.ele = document.createElement('div');
		this.type = this.assignType();
	}

	assignType(type) {
		const activity = 'http://i.imgur.com/WbMOfMl.png';
		const hotel = 'http://i.imgur.com/D9574Cu.png';
		const restaurant = 'http://i.imgur.com/cqR6pUI.png';

		if (type === 'activity') {
			return activity;
		}

		if (type === 'hotel') {
			return hotel;
		}

		if (type === 'restaurant') {
			return restaurant;
		}
	}
}

console.log(new buildMarker('hotel'));
