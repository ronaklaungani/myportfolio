document.addEventListener('DOMContentLoaded', function() {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction 
  window.addEventListener('scroll', myFunction);

// Get the navbar
var navbar = document.getElementById("segment-menu-main");

// Get the offset position of the navbar
var offset = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= offset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
});


function changeclassname(idname, classname) {
			document.getElementById("" + idname + "").className = "" + classname + "";
}

function changedisplay(idname, displaytype) {
			document.getElementById("" + idname + "").style.display = "" + displaytype + "";
}


function switchsegment(fetchedSegmentId) { 
			if (fetchedSegmentId == 'about-segment-id') {
										changeclassname('about-segment-id', 'title-active');
										changeclassname('research-segment-id', 'title-inactive');
										changeclassname('design-segment-id', 'title-inactive');

										changedisplay('about-segment', 'block');
										changedisplay('research-segment', 'none');
										changedisplay('design-segment', 'none');
										}

			else if (fetchedSegmentId == 'research-segment-id') {
										changeclassname('about-segment-id', 'title-inactive');
										changeclassname('research-segment-id', 'title-active');
										changeclassname('design-segment-id', 'title-inactive');

										changedisplay('about-segment', 'none');
										changedisplay('research-segment', 'block');
										changedisplay('design-segment', 'none');
										}

			else if (fetchedSegmentId == 'design-segment-id') {
										changeclassname('about-segment-id', 'title-inactive');
										changeclassname('research-segment-id', 'title-inactive');
										changeclassname('design-segment-id', 'title-active');

										changedisplay('about-segment', 'none');
										changedisplay('research-segment', 'none');
										changedisplay('design-segment', 'block');
										}
			
			var element = document.getElementById("header-end");

			element.scrollIntoView({behavior: "smooth", block: "start", inline: "end"});



			}