//your JS code here. If required.
function greet() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Hello,world!")
		}, 1000)
	})
	 
}

// function call

greet()
	.then((item) => {
		let result = document.querySelector("#output");
		result.textContent = item;
	})
	.catch(error => {
		console.error(error);

	})

	