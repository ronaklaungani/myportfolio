const menuList = document.getElementById("menu-list");

const li1 = document.createElement("li");
li1.innerHTML = '<a href="index.html" onclick="closemenu()">UI/UX</a>';

const li2 = document.createElement("li");
li2.innerHTML = '<a href="visual.html" onclick="closemenu()">Visual</a>';

const li3 = document.createElement("li");
li3.innerHTML = '<a href="coded.html" onclick="closemenu()">Coded</a>';

const li4 = document.createElement("li");
li4.innerHTML = '<a href="logos.html" onclick="closemenu()">Logos</a>';

const li5 = document.createElement("li");
li5.innerHTML = '<a href="podcast.html" onclick="closemenu()">Podcast</a>';

const li6 = document.createElement("li");
li6.innerHTML = '<a href="archive.html" onclick="closemenu()">Archives</a>';

const li7 = document.createElement("li");
li7.innerHTML = 'Close Menu';
li7.setAttribute("onclick", "closemenu()");
li7.style.color = 'red';
li7.style.cursor = 'pointer';



menuList.append(li1);
menuList.append(li2);
menuList.append(li3);
menuList.append(li4);
menuList.append(li5);
menuList.append(li6);
menuList.append(li7);