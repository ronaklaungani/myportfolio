// Header data

var intro = document.getElementById("intro");

var introData = document.createElement("p");
introData.innerHTML = "Hi! I'm<br>Ronak Laungani,<br><i><span id='my-designation' class='tooltip' onclick='changetext1()'>Product Designer<span class='tooltiptext'>Click me</span></span></i> by the day<br><i><span id='magic-words' class='tooltip' onclick='changetext2()'>sleep enthusiast<span class='tooltiptext'>Click me</span></span></i> by the night.<br><br><br class='desktop-only'><br class='desktop-only'>View my <a class='highlight-bttn tooltip' href='https://drive.google.com/file/d/1zEQLlW3F_tTjjbpKD6gxL3yQglFLrxPA/view?usp=sharing' target='_blank'>Résumé<span class='tooltiptext'>Google Drive</span></a><br>& here's my <a class='highlight-bttn' href='https://github.com/ronaklaungani' target='_blank'>GitHub</a><br><br><br class='desktop-only'><br class='desktop-only'>Contact me on<br><span class='highlight-bttn tooltip' style='cursor: pointer;' onclick='copy_function()' id='mytext' value='launganironak@gmail.com'>launganironak@gmail.com<span class='tooltiptext'>Click to copy</span></span><br>Connect with me on<br><a class='highlight-bttn' href='https://www.linkedin.com/in/ronaklaungani/' target=_blank'>LinkedIn</a> or <a class='highlight-bttn' href='https://www.facebook.com/launganironak/' target='_blank'>Facebook</a>.<br>"
introData.className = "title";

intro.append(introData);

// 


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


function copy_function(){
var emailComponent = document.getElementById("mytext");
var email = emailComponent.getAttribute("value");
var input_temp = document.createElement("input");
input_temp.value = email;
document.body.appendChild(input_temp);
input_temp.select();
document.execCommand("copy");
document.body.removeChild(input_temp);
alert("Email copied to clipboard");

}