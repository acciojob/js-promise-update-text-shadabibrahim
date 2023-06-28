//your JS code here. If required.
let out = document.querySelector("#id");
	let data = new Promise((resolve,reject)=>{
		setTimeOut(()=>{
			resolve("Hello,world!")
		},1000)
	})

data.then((item)=>{
	out.innerHTML = item;
})

