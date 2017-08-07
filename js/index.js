var ACTIVATED_CAROUSEL = 0;
var carousel_metal_roof = {
		element: document.getElementById("carousel-metal-roof"),
		index: 0
	},
	carousel_shingle_roof = {
		element: document.getElementById("carousel-shingle-roof"),
		index: 0
	},
	carousel_rubber_roof = {
		element: document.getElementById("carousel-rubber-roof"),
		index: 0
	},
	CAROUSELS = [ carousel_metal_roof, carousel_shingle_roof, carousel_rubber_roof ],
	CAROUSEL_TABS = document.getElementsByClassName('carousel-tab');

(function () {
	loadMap();
})();

function activateCarousel(el, num) {
	// Set Tab
	console.log(CAROUSEL_TABS[ACTIVATED_CAROUSEL], el);
	if(ACTIVATED_CAROUSEL != num) {
		CAROUSEL_TABS[ACTIVATED_CAROUSEL].classList.remove('active');
		el.classList.add('active');
	}
	// Set Carousel
	CAROUSELS[ACTIVATED_CAROUSEL].element.classList.remove('carousel-on');
	CAROUSELS[ACTIVATED_CAROUSEL].element.classList.add('carousel-off');
	ACTIVATED_CAROUSEL = num;
	CAROUSELS[ACTIVATED_CAROUSEL].element.classList.remove('carousel-off');
	CAROUSELS[ACTIVATED_CAROUSEL].element.classList.add('carousel-on');
}

function carouselSlideNext(carousel) {
	if(carousel.element.children.length > 1) {
		carousel.element.children[carousel.index].classList.remove('visible');
		carousel.element.children[carousel.index].classList.add('hidden');
		++carousel.index;
		if(carousel.index > (carousel.element.children.length - 2)) {
			carousel.index = 0;
		}
		carousel.element.children[carousel.index].classList.remove('hidden');
		carousel.element.children[carousel.index].classList.add('visible');
	}
}

function carouselSlidePrevious(carousel) {
	if(carousel.element.children.length > 1) {
		carousel.element.children[carousel.index].classList.remove('visible');
		carousel.element.children[carousel.index].classList.add('hidden');
		--carousel.index;
		if(carousel.index < 0) {
			carousel.index = carousel.element.children.length - 2;
		}
		carousel.element.children[carousel.index].classList.remove('visible');
		carousel.element.children[carousel.index].classList.remove('hidden');
	}
}

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
		
	var map = new google.maps.Map(document.getElementById("google-map"),mapOptions);
	 var marker = new google.maps.Marker({
	   position: new google.maps.LatLng(39.5411164,-82.3972868),
	   map: map,
	});
}