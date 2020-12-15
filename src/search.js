
import get from './get'
import render from './render'
// import apiKey from './key'

let apiKey = '9a3f56db816fe284dd580a82176924f9'

let input = document.getElementById('autocomplete')

let autocomplete = new google.maps.places.Autocomplete(input, {types: ['(cities)']})

google.maps.event.addListener(autocomplete, 'place_changed', () => {
	
	let place = autocomplete.getPlace()
	document.getElementById('name').innerHTML = place.name
	
	// console.log(place)

	let lat = place.geometry.location.lat()
	let lng = place.geometry.location.lng()
	
	// console.log(lat, lng)

	get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${apiKey}`)
		.then(parsed => {

			render(parsed)

			// console.log(parsed)
		})
})

