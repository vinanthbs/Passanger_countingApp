let count = 0
  
function increment() {
    count += 1
    console.log("button was clicked")
    console.log(count)
    document.getElementById("demo").innerText = count
}

function save(){
	console.log("save")
	let b = " -" +count 
	document.getElementById("save").textContent += b
	console.log(count)
	count=0 
	console.log(count)
}  

let name = "Vinanth"
let greetings = "welcome back "
let message = greetings + name
//console.log(message)
//document.getElementById("welcome").innerText = message + "😍"