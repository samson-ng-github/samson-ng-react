var canvas, stage, logo/*, ctaButton*/;

console.log("Actions");

var particleHolder = new createjs.Container();
particleHolder.y -= 0;
particleHolder.x += 0;
particleHolder.scaleX = particleHolder.scaleY = 1;

var screenParticles = new ControlParticles(screen, "#eeeeee", 1, !1, !0);
var graphParticles = new ControlParticles(graph, "#eeeeee", 1, !1, !0);

createDotImage(screenParticles, 100, 62, 0.45);
createDotImage(graphParticles, 100, 62, 0.45);

var text1 = new ParticleText(new EENobbleeRegular(), 18, ["GOALS ARE IMPORTANT"], "left");
var text1Particles = new ControlParticles(text1.points, "#FFE600", 1);
console.log(text1Particles);
text1Particles.x = 15;
text1Particles.y = 15;

var text2 = new ParticleText(new EENobbleeRegular(), 18, ["IN BUSINESS"], "left");
var text2Particles = new ControlParticles(text2.points, "#FFFFFF", 1);
console.log(text2Particles);
text2Particles.x = 15;
text2Particles.y = 33;

//

var text3 = new ParticleText(new EENobbleeRegular(), 18, ["GET THE BT SPORT APP"], "left");
var text3Particles = new ControlParticles(text3.points, "#FFE600", 1);
text3Particles.x = 15;
text3Particles.y = 15;

var text4 = new ParticleText(new EENobbleeRegular(), 18, ["INCLUDED"], "left");
var text4Particles = new ControlParticles(text4.points, "#FFFFFF", 1);
text4Particles.x = 15;
text4Particles.y = 33;

//

var text5 = new ParticleText(new EENobbleeRegular(), 18, ["AND 20GB DATA FOR"], "left");
var text5Particles = new ControlParticles(text5.points, "#FFE600", 1);
console.log(text5Particles);
text5Particles.x = 15;
text5Particles.y = 15;

var text6 = new ParticleText(new EENobbleeRegular(), 18, ["ONLY £17 A MONTH"], "left");
var text6Particles = new ControlParticles(text6.points, "#FFFFFF", 1);
text6Particles.x = 15;
text6Particles.y = 33;

//

var text7 = new ParticleText(new EENobbleeRegular(), 18, ["WITH OUR GREAT SIM", "ONLY BUSINESS DEAL"], "left");
var text7Particles = new ControlParticles(text7.points, "#FFE600", 1);
text7Particles.x = 15;
text7Particles.y = 15;

var text8 = new ParticleText(new EENobbleeRegular(), 18, ["INCLUDING:"], "left");
var text8Particles = new ControlParticles(text8.points, "#FFFFFF", 1);
text8Particles.x = 15;
text8Particles.y = 15 + 18*2;




function doConfig() {

	console.log("doing config");


	ticking = new Background(300, 250);
	e.tickerHolder.addChild(ticking);
	ticking.generate();
	ticking.animate();
	setPosition(ticking, -4, -12);
	
	e.SmallText.alpha = 0;
	
	text1Particles.generate();
	text2Particles.generate();
	text3Particles.generate();
	text4Particles.generate();
	text5Particles.generate();
	text6Particles.generate();
	text7Particles.generate();
	text8Particles.generate();

}


function doBanner() {

	console.log("doing banner");

	e.addChild(text1Particles, text2Particles, text3Particles, text4Particles, text5Particles, text6Particles, text7Particles, text8Particles, particleHolder);

	//e.addChild(ctaButton);

	TweenMax.delayedCall(0.5, frame_1);
	
	var cta = document.getElementById("cta");
	var sim = document.getElementById("sim");
	var bullets = document.getElementById("bullets");
	var root = document.getElementById("root");
	var limited_time = document.getElementById("limited-time");

	//TweenMax.delayedCall(15, stopBackground);

	//bob();


	function frame_1() {

		TweenMax.delayedCall(2, text1Particles.form, [7,1], text1Particles);
		TweenMax.delayedCall(5, text1Particles.tick, [], text1Particles);
		
		TweenMax.delayedCall(2, text2Particles.form, [7,1], text2Particles);
		TweenMax.delayedCall(5, text2Particles.tick, [], text2Particles);
		
		TweenMax.delayedCall(0, screenParticles.form, [300,2,false], screenParticles);
		TweenMax.delayedCall(5, screenParticles.tick, [], screenParticles);
		
		TweenMax.delayedCall(0, graphParticles.form, [300,2,false], graphParticles);
		TweenMax.delayedCall(5, graphParticles.tick, [], graphParticles);

		TweenMax.delayedCall(8, frame_2, [], this);
		
		TweenMax.to(limited_time, 1, {delay: 2, css:{opacity:1}});
	}

	function frame_2() {

		text1Particles.disperse(0,0,"small",1,10);
		text2Particles.disperse(0,0,"small",1,10);
		graphParticles.disperse(0,0,"small",2,100);
		screenParticles.transform(1);

		TweenMax.delayedCall(0.5, text3Particles.form, [7,0.5], text3Particles);
		TweenMax.delayedCall(3.5, text3Particles.tick, [], text3Particles);
		
		TweenMax.delayedCall(0.5, text4Particles.form, [7,0.5], text4Particles);
		TweenMax.delayedCall(3.5, text4Particles.tick, [], text4Particles);
		
		TweenMax.delayedCall(3.5, screenParticles.tick, [], screenParticles);
		
		TweenMax.delayedCall(6.5, frame_3, [], this);
	}

	function frame_3() {

		text3Particles.disperse(0,0,"small",1,10);
		text4Particles.disperse(0,0,"small",1,10);

		TweenMax.delayedCall(0.5, text5Particles.form, [7,0.5], text5Particles);
		TweenMax.delayedCall(3.5, text5Particles.tick, [], text5Particles);
		
		TweenMax.delayedCall(0.5, text6Particles.form, [7,0.5], text6Particles);
		TweenMax.delayedCall(3.5, text6Particles.tick, [], text6Particles);
		
		TweenMax.delayedCall(0.5, screenParticles.tick, [], screenParticles);
		TweenMax.delayedCall(3.5, screenParticles.tick, [], screenParticles);
		
		TweenMax.delayedCall(6.5, frame_4, [], this);
	}
	
	function frame_4() {

		text6Particles.disperse(0,0,"small",1,10);
		text5Particles.disperse(0,0,"small",1,10);
		screenParticles.disperse(0,0,"small",2,100);

		TweenMax.delayedCall(0.5, text7Particles.form, [7,0.5], text7Particles);
		TweenMax.delayedCall(0.5, text8Particles.form, [7,0.5], text8Particles);
		
		TweenMax.to(sim, 1, {delay: 1.5, css:{left:218}});
		TweenMax.to(bullets, 1, {delay: 1.5, css:{opacity:1}});
		TweenMax.to(cta, 1, {delay: 2.5, css:{opacity:1}});
		TweenMax.to(root, 1, {delay: 2.5, css:{opacity:1}});
	}



}

/// DOUBLECLICK ENABLER CODE ////

window.onload = function() {
	console.log("waiting for Enabler");
  	if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
}


function enablerInitHandler() {
	console.log("Enabler has loaded");
    function bgExitHandler(e) {
		Enabler.exit('Background Exit', 'http://ee.co.uk/');
	}
	
	document.getElementById('bg-exit').addEventListener('click', bgExitHandler, false);

	init();

}

function setPosition(obj, x, y) {
	obj.x = x;
	obj.y = y;
}

function stopBackground() {
	ticking.canAnimate = false;
}

function createDotImage(image, xPos, yPos, scale) {
    particleHolder.addChild(image), image.y = yPos, image.x = xPos, image.scaleX = scale, image.scaleY = scale, image.generate();
}

function bob() {
    console.log("bob"), TweenMax.to(particleHolder, .5 * Math.random() + 2, {
        y: "-=" + 5 * Math.random(),
        yoyo: !0,
        repeat: 1,
        ease: Sine.easeInOut,
        onComplete: bob
    })
}


