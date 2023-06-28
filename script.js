//your JS code here. If required.
function greet() {
	let data = new Promise((resolve,reject)=>{
		setTimeOut(()=>{
			resolve("Hello,world!")
		},1000)
	})
	return data
}

// function call

greet(){
	.then((item)=>{
		let result = document.querySelector("#output");
		result.textContent = item;
	})
	.catch(error => {
    console.error(error);
}
