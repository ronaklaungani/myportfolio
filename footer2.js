// Footer2 data

var footer2 = document.getElementById("footer2");

var a2 = document.createElement("a");
a2.className = "highlight-bttn";
a2.setAttribute("href", "#top");
a2.innerHTML = 'Go to top <i class="las la-arrow-up"></i></a><a class="highlight-bttn" href="logos.html" style="float: right;"> Back to Logos';

var endOfPage2 = document.createElement("p");
endOfPage2.className = "title";
endOfPage2.innerHTML = '<span>Designed & Developed by<br>©Ronak Laungani 2020</span>';

pageState = footer2.getAttribute("value");

if (pageState == "logos") {
	a2.innerHTML = 'Go to top <i class="las la-arrow-up"></i></a><a class="highlight-bttn" href="logos.html" style="float: right;"> Back to Logos';
}

else if (pageState == "uiux") {
	a2.innerHTML = 'Go to top <i class="las la-arrow-up"></i></a><a class="highlight-bttn" href="index.html" style="float: right;"> Back to UI/UX';
}

else if (pageState == "visual") {
	a2.innerHTML = 'Go to top <i class="las la-arrow-up"></i></a><a class="highlight-bttn" href="visual.html" style="float: right;"> Back to Visuals';
}

else if (pageState == "coded") {
	a2.innerHTML = 'Go to top <i class="las la-arrow-up"></i></a><a class="highlight-bttn" href="logos.html" style="float: right;"> Back to Logos';
}

else if (pageState == "archive") {
	a2.innerHTML = 'Go to top <i class="las la-arrow-up"></i></a><a class="highlight-bttn" href="archive.html" style="float: right;"> Back to Archives';
}

footer2.append(a2);
footer2.append(endOfPage2);