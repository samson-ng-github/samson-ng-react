var video = document.getElementById("video");
var closeBtn = document.getElementById("closeBtn");
var muteBtn = document.getElementById("muteBtn");
var endFrame = document.getElementById("endFrame");


var rolloverActive = false;
var videoReady = false;
var videoPlaying = false;

video.load();
video.addEventListener('canplay', onVideoLoaded);


console.log("doe");
var animal = document.getElementById("animal");
var txt = document.getElementById("txt");
var spot1 = document.getElementById("spot1");
var spot2 = document.getElementById("spot2");
var spot3 = document.getElementById("spot3");
var button = document.getElementById("button");
//var url1 = "https://www.britishgas.co.uk/products-and-services/gas-and-electricity/";
//var url2 = "http://www.britishgas.co.uk/smarter-living/control-energy/smart-meters.html";
//var url3 = "http://www.britishgas.co.uk/products-and-services/hive-active-heating.html";
var spots_disabled = false;
var current_spot = 0;

turn_on_spot(spot1);

var timer = setInterval(rotate_animal, 5000);

spot1.addEventListener("click", function () {show_squirrel(); clearInterval(timer); timer = setInterval(rotate_animal, 5000);});
spot2.addEventListener("click", function () {show_mouse(); clearInterval(timer); timer = setInterval(rotate_animal, 5000);});
spot3.addEventListener("click", function () {show_magpie(); clearInterval(timer); timer = setInterval(rotate_animal, 5000);});

function rotate_animal() {
	current_spot++;
	current_spot %= 3;
	if (current_spot==0) show_squirrel();
	if (current_spot==1) show_mouse();
	if (current_spot==2) show_magpie();
}

function show_squirrel() {
	current_spot = 0;
	if (!spots_disabled) run_graphics(spot1, "squirrel", "txt1");
}

function show_mouse() {
	current_spot = 1;
	if (!spots_disabled) run_graphics(spot2, "mouse", "txt2");
}

function show_magpie() {
    current_spot = 2;
    if (!spots_disabled) run_graphics(spot3, "magpie", "txt3");
}

function run_graphics(spot, animal_type, text_type) {
	
	console.log(current_spot + " ran");
	turn_on_spot(spot);
    var left = parseInt(window.getComputedStyle(animal,null).getPropertyValue("left"));
    var opacity = window.getComputedStyle(txt,null).getPropertyValue("opacity");
    
	function frame() {
		left -= 3;
		opacity -= 0.02;
		animal.style.left = left + 'px';
		txt.style.opacity = opacity;
		if (left <= -143) {
			clearInterval(interval);
			animal.style.left = "-143px";
			txt.style.opacity = 0;
			change_text(animal_type, text_type);
			show_animal(animal_type, text_type);
			spots_disabled = true;
		}
	}
	var interval = setInterval(frame, 10);
}

function change_text(animal_type, text_type) {
    animal.setAttribute("src", "assets/img/" + animal_type + ".png");
    txt.setAttribute("src", "assets/img/" + text_type + ".png");
}

function show_animal(animal_type, text_type) {
	var left = parseInt(window.getComputedStyle(animal,null).getPropertyValue("left"));
    //var opacity = parseInt(window.getComputedStyle(txt,null).getPropertyValue("opacity"));
    
	function frame() {
		left += 2.5;
		//opacity += 0.02;
		animal.style.left = left + 'px';
		//txt.style.opacity = opacity;
		if (left >= 15) {
			clearInterval(interval);
			animal.style.left = "15px";
			//txt.style.opacity = 1;
			spots_disabled = false;
			fadein_text();
		}
	}
	var interval = setInterval(frame, 10);
}

function fadein_text() {
    var opacity = parseInt(window.getComputedStyle(txt,null).getPropertyValue("opacity"));
    
	function frame() {
		opacity += 0.02;
		txt.style.opacity = opacity;
		if (opacity >= 1) {
			clearInterval(interval);
			txt.style.opacity = 1;
		}
	}
	var interval = setInterval(frame, 10);
}


function turn_on_spot(spot) {
	spot1.style.webkitTransform = "scale(1)";
	spot1.style.mozTransform = "scale(1)";
	spot1.style.msTransform = "scale(1)";
	spot1.style.oTransform = "scale(1)";
	spot1.style.transform = "scale(1)";
	spot1.style.backgroundColor = "#ffffff";
	spot1.classList.add("pulsate");
	
	spot2.style.webkitTransform = "scale(1)";
	spot2.style.mozTransform = "scale(1)";
	spot2.style.msTransform = "scale(1)";
	spot2.style.oTransform = "scale(1)";
	spot2.style.transform = "scale(1)";
	spot2.style.backgroundColor = "#ffffff";
	spot2.classList.add("pulsate");
	
	spot3.style.webkitTransform = "scale(1)";
	spot3.style.mozTransform = "scale(1)";
	spot3.style.msTransform = "scale(1)";
	spot3.style.oTransform = "scale(1)";
	spot3.style.transform = "scale(1)";
	spot3.style.backgroundColor = "#ffffff";
	spot3.classList.add("pulsate");

	spot.style.webkitTransform = "scale(1.5)";
	spot.style.mozTransform = "scale(1.5)";
	spot.style.msTransform = "scale(1.5)";
	spot.style.oTransform = "scale(1.5)";
	spot.style.transform = "scale(1.5)";
	spot.style.backgroundColor = "#53a7ea";
	spot.classList.remove("pulsate");
}


muteBtn.onclick = function(data)
{
	if(video.muted)
	{
		video.muted=false;
		muteBtn.src = "assets/img/sound_on.png";
	}
	else
	{
		video.muted=true;
		muteBtn.src = "assets/img/sound_off.png";
	}
};

video.onclick = function(data)
{
	if(videoReady && !videoPlaying)
	{
		video.play();
		videoPlaying = true;
	}
};


function onVideoLoaded(data)
{
	video.removeEventListener('canPlay', onVideoLoaded);
	video.addEventListener('timeupdate', onVideoUpdated);
	video.addEventListener('ended', onVideoEnded);
	//console.log("play");
	video.play();
	videoReady = true;
}


function onVideoEnded(data)
{
	video.currentTime = 0;
	
	video.removeEventListener('ended', onVideoEnded);
}