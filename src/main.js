
let widget = document.querySelector('#widget')

let apiKey = '9a3f56db816fe284dd580a82176924f9'
let q = 'Moscow,ru'
let url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&APPID=${apiKey}`

let form = document.getElementById('search-form')
form.onsubmit = e => e.preventDefault()



// hearts.classList.add('#widget')
// hearts.classList.remove('#widget')

