function closemenu() {
							document.getElementById('menu-list').style.display = 'none';
						}

							function openmenu() {
							document.getElementById('menu-list').style.display = 'block';
							document.getElementById('menu-list').style.opacity = '100%';
						}


						function changetext1() {

								 function randomtext() {
								 	var x = ['Product Designer', 'UI Designer', 'UX Designer', 'Interaction Designer', 'Graphic Designer', 'Podcaster', 'Sketch User', 'Jared Spool follower', 'Don Norman preacher', 'Behance screener', 'Font collector', 'Fake User Persona'];
								 	var randomNumber = Math.floor(Math.random()*x.length);
								 	let y = x[randomNumber];
								 	return y;
								 }
								document.getElementById('my-designation').innerHTML = randomtext();
							}


						function changetext2() {

								 function randomtext() {
								 	var x = ['sandwich maker', 'sleep enthusiast', 'dedicated Netflix user', 'professional whistler', 'cheeseball eater', 'food explorer', 'stress taker', 'The Office fan', 'bathroom comedian', 'cajon owner'];
								 	var randomNumber = Math.floor(Math.random()*x.length);
								 	let y = x[randomNumber];
								 	return y;
								 }
								document.getElementById('magic-words').innerHTML = randomtext();
							}


						function copy_function(id){
  							var value = document.getElementById(id).innerHTML;
  							var input_temp = document.createElement("input");
 							input_temp.value = value;
  							document.body.appendChild(input_temp);
 							input_temp.select();
  							document.execCommand("copy");
  							document.body.removeChild(input_temp);
  							alert("Email copied to clipboard");
							
							}