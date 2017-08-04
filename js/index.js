// myshow1 = w3.slideshow(".metal", 0);
// myshow2 = w3.slideshow(".shingle", 0);
// myshow3 = w3.slideshow(".rubber", 0);

function openRightMenu() {
    document.getElementById("right-menu").style.display = "block";
}

function closeRightMenu() {
    document.getElementById("right-menu").style.display = "none";
}

// function openCity(evt, cityName) {
// 	var i, x, tablinks;
// 	x = document.getElementsByClassName("city");
// 	for (i = 0; i < x.length; i++) {
// 		x[i].style.display = "none";
// 	}
// 	tablinks = document.getElementsByClassName("tablink");
// 	for (i = 0; i < x.length; i++) {
// 		tablinks[i].className = tablinks[i].className.replace(" w3-border-green", "");
// 	}
// 	document.getElementById(cityName).style.display = "block";
// 	evt.currentTarget.firstElementChild.className += " w3-border-green";
// }