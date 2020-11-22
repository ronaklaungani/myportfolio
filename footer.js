// Footer data

var footer = document.getElementById("footer");

var a = document.createElement("a");
a.className = "highlight-bttn";
a.setAttribute("href", "#top");
a.innerHTML = 'Go to top <i class="las la-arrow-up"></i>';

var endOfPage = document.createElement("p");
endOfPage.className = "title";
endOfPage.innerHTML = '<span>Designed & Developed by<br>©Ronak Laungani 2020</span>';

footer.append(a);
footer.append(endOfPage);