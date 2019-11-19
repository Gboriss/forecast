function componentDidMount() {
let input = document.getElementById('autocomplete');

let autocomplete = new google.maps.places.Autocomplete(input, {types: ['(cities)']});

  google.maps.event.addListener(autocomplete, 'place_changed', () => {
	let place = autocomplete.getPlace();

	let lat = place.geometry.location.lat();
	let lng = place.geometry.location.lng();
	console.log(place)
	// this.setState({
	// 	lat,
	// 	lng
	// });

	// this.onSubmit(lat, lng);
});
}
componentDidMount()

