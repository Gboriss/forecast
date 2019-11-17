let xhr = new XMLHttpRequest()

let apiKey = '9a3f56db816fe284dd580a82176924f9'
let q = 'Moscow,ru'

let K = 273.15

xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${q}&APPID=${apiKey}`)

xhr.send()

xhr.onload = function() {
	let parsed = JSON.parse(xhr.response)
	console.log(parsed)
	render(parsed)
} 

let render = parsed => {
	let temp = parsed.main.temp
	document.getElementById('current-temp').innerHTML = `${Math.floor(temp - K)}°C`
	
	let name = parsed.name
	document.getElementById('name').innerHTML = name
	
	let description = parsed.weather[0].main
	document.getElementById('description').innerHTML = description

	let sunrise = parsed.sys.sunrise
	let date = new Date(sunrise * 1000)
	let timestr  = date.getHours()

	// let hours = ( (sunrise / (1000 * 60 * 60)) % 24)
	let minutes = Math.floor( (sunrise / 1000 / 60) % 60 )
	document.getElementById('sunrise').innerHTML = timestr + ':' + minutes
	
	let sunset = parsed.sys.sunset
	let datenight = new Date(sunset * 1000)
	let hours  = datenight.getHours()
	let min = Math.floor( (sunset / 1000 / 60) % 60 )
	document.getElementById('sunset').innerHTML = hours + ':' + min
}
