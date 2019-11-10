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

	let { temp, humidity } = parsed.main

	document.getElementById('current-temp').innerHTML = `${Math.floor(temp - K)}°C`
}
