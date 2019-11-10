let xhr = new XMLHttpRequest()

let apiKey = '9a3f56db816fe284dd580a82176924f9'
let q = 'Moscow,ru'

xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${q}&APPID=${apiKey}`)

xhr.send()

 

xhr.onload = function() {

	let parsed = JSON.parse(xhr.response)

	console.log(parsed)

}

