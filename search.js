
let input = document.getElementById('autocomplete')

let searchBox = new google.maps.places.Autocomplete(input, { types: ['(cities)' ] })

let xhr = new XMLHttpRequest()

let apiKey = '9a3f56db816fe284dd580a82176924f9'
let q = 'Moscow,ru'

xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${q}&APPID=${apiKey}`)

let api = 'https://api.openweathermap.org/data/2.5/weather?Moscow,ru=${q}&APPID=9a3f56db816fe284dd580a82176924f9'

xhr.send()

searchBox.addListener('places_changed', function() {
	let locale = searchBox.getPlaces()[0]
	let lat = place.geometry.location.lat()
	let lng = place.geometry.location.lng()
	console.log(lat, lng)
})

