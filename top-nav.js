var topNav = document.getElementById("topNav");
var topNavValue = topNav.getAttribute("value");
console.log(topNavValue);

var uiux = document.createElement("span");
uiux.setAttribute("onclick", "window.open('index.html', '_self')");
uiux.innerHTML = "UI/UX";

var visual = document.createElement("span");
visual.setAttribute("onclick", "window.open('visual.html', '_self')");
visual.innerHTML = "Visual";

var coded = document.createElement("span");
coded.setAttribute("onclick", "window.open('coded.html', '_self')");
coded.innerHTML = "Coded";

var logos = document.createElement("span");
logos.setAttribute("onclick", "window.open('logos.html', '_self')");
logos.innerHTML = "Logos";

var podcast = document.createElement("span");
podcast.setAttribute("onclick", "window.open('podcast.html', '_self')");
podcast.innerHTML = "Podcast";

var archive = document.createElement("span");
archive.setAttribute("onclick", "window.open('archive.html', '_self')");
archive.innerHTML = "Archives";

if (topNavValue == "uiuxValue") {
uiux.setAttribute("class", "title-active");
visual.setAttribute("class", "title-inactive");
coded.setAttribute("class", "title-inactive");
logos.setAttribute("class", "title-inactive");
podcast.setAttribute("class", "title-inactive");
archive.setAttribute("class", "title-inactive");
}

else if (topNavValue == "visualValue") {
uiux.setAttribute("class", "title-inactive");
visual.setAttribute("class", "title-active");
coded.setAttribute("class", "title-inactive");
logos.setAttribute("class", "title-inactive");
podcast.setAttribute("class", "title-inactive");
archive.setAttribute("class", "title-inactive");
}

else if (topNavValue == "codedValue") {
uiux.setAttribute("class", "title-inactive");
visual.setAttribute("class", "title-inactive");
coded.setAttribute("class", "title-active");
logos.setAttribute("class", "title-inactive");
podcast.setAttribute("class", "title-inactive");
archive.setAttribute("class", "title-inactive");
}

else if (topNavValue == "logosValue") {
uiux.setAttribute("class", "title-inactive");
visual.setAttribute("class", "title-inactive");
coded.setAttribute("class", "title-inactive");
logos.setAttribute("class", "title-active");
podcast.setAttribute("class", "title-inactive");
archive.setAttribute("class", "title-inactive");
}

else if (topNavValue == "podcastValue") {
uiux.setAttribute("class", "title-inactive");
visual.setAttribute("class", "title-inactive");
coded.setAttribute("class", "title-inactive");
logos.setAttribute("class", "title-inactive");
podcast.setAttribute("class", "title-active");
archive.setAttribute("class", "title-inactive");
}

else if (topNavValue == "archiveValue") {
uiux.setAttribute("class", "title-inactive");
visual.setAttribute("class", "title-inactive");
coded.setAttribute("class", "title-inactive");
logos.setAttribute("class", "title-inactive");
podcast.setAttribute("class", "title-inactive");
archive.setAttribute("class", "title-active");
}

topNav.append(uiux);
topNav.append(visual);
topNav.append(coded);
topNav.append(logos);
topNav.append(podcast);
topNav.append(archive);