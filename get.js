
function get(url, method = 'GET') {
	return new Promise((resolve, reject) => {

		let xhr = new XMLHttpRequest()
	
		xhr.open(method, url)

		xhr.send()

		xhr.onload = () => {
			if(xhr.status === 200) {
				try {
					let json = JSON.parse(xhr.response)

					return resolve(json)
	
				} catch (error) {
					reject()
					console.error(error);
				}
	
			} else {
				reject()
				console.log(xhr.status);
			}
		}

		xhr.onerror = event => {

			console.log(event.target.status)

			reject()
		}
	})

}

export default get
