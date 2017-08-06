(function () {
	loadMap();
})();

function openRightMenu() {
    document.getElementById("right-menu").style.display = "block";
}

function closeRightMenu() {
    document.getElementById("right-menu").style.display = "none";
}

function loadMap() {
	var mapOptions = {
	   center:new google.maps.LatLng(39.5411164,-82.3972868), zoom:12,
	   mapTypeId:google.maps.MapTypeId.ROADMAP
	};
		
	var map = new google.maps.Map(document.getElementById("sample"),mapOptions);
	 var marker = new google.maps.Marker({
	   position: new google.maps.LatLng(39.5411164,-82.3972868),
	   map: map,
	});
}