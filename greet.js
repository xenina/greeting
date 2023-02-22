	btn.onclick=function generateGreeting(){
		//console.log("click");
		
		let name = document.getElementById('name').value;
		
		
		let greetings=[`С днем рождения, ${name}!`, `С праздником, ${name}!`, `С новым годом рождения, ${name}!`];
		
		let randomGreeting=Math.floor(Math.random() * greetings.length);
		//document.getElementById('greeting').innerHTML = Math.floor(Math.random() * greetings.length);
		
		document.getElementById('greeting').innerHTML = greetings[randomGreeting];
		}
