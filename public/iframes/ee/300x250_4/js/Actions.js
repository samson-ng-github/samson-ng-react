var canvas, stage, logo/*, ctaButton*/;
var clickTag = "http://ee.co.uk/";

console.log("Actions");

var particleHolder = new createjs.Container();
particleHolder.y -= 0;
particleHolder.x += 0;
particleHolder.scaleX = particleHolder.scaleY = 1;

//var screenParticles = new ControlParticles(screen, "#eeeeee", 1, !1, !0);
//var axisParticles = new ControlParticles(axis, "#eeeeee", 1, !1, !0);
/*particleHolder.x = 300;
particleHolder.y = 853.553;
particleHolder.rotation = 202.5;
createDotImage(screenParticles, 400, 400, 0.4);*/
//createDotImage(screenParticles, 100, 60, 0.45);
//createDotImage(axisParticles, 100, 60, 0.45);

var text1 = new ParticleText(new EENobbleeRegular(), 18, ["SMART PHONE"], "left");
var text1Particles = new ControlParticles(text1.points, "#FFE600", 1);
console.log(text1Particles);
text1Particles.x = 15;
text1Particles.y = 12;

var text2 = new ParticleText(new EENobbleeRegular(), 18, ["SMART BUSINESS"], "left");
var text2Particles = new ControlParticles(text2.points, "#FFFFFF", 1);
console.log(text2Particles);
text2Particles.x = 15;
text2Particles.y = 12 + 18;

//

var text3 = new ParticleText(new EENobbleeRegular(), 18, ["GET THE", "GOOGLE PIXEL 2"], "left");
var text3Particles = new ControlParticles(text3.points, "#FFE600", 1);
text3Particles.x = 15;
text3Particles.y = 12;

var text4 = new ParticleText(new EENobbleeRegular(), 18, ["WITH 4G IN MORE", "PLACES THAN", "ANY OTHER", "UK NETWORK"], "left");
var text4Particles = new ControlParticles(text4.points, "#FFFFFF", 1);
text4Particles.x = 15;
text4Particles.y = 12 + 18 * 2;

//

var text5 = new ParticleText(new EENobbleeRegular(), 18, ["EE BUSINESS PLANS", "FROM ONLY"], "left");
var text5Particles = new ControlParticles(text5.points, "#FFFFFF", 1);
console.log(text5Particles);
text5Particles.x = 15;
text5Particles.y = 12;

var text6 = new ParticleText(new EENobbleeRegular(), 18, ["£28 A MONTH"], "left");
var text6Particles = new ControlParticles(text6.points, "#FFE600", 1);
text6Particles.x = 15;
text6Particles.y = 12 + 18 * 2;




function doConfig() {

	console.log("doing config");


	ticking = new Background(300, 250);
	e.tickerHolder.addChild(ticking);
	ticking.generate();
	ticking.animate();
	setPosition(ticking, -4, -12);
	
	//e.SmallText.alpha = 0;
	
	text1Particles.generate();
	text2Particles.generate();
	text3Particles.generate();
	text4Particles.generate();
	text5Particles.generate();
	text6Particles.generate();

}


function doBanner() {

	console.log("doing banner");

	e.addChild(text1Particles, text2Particles, text3Particles, text4Particles, text5Particles, text6Particles, particleHolder);

	//e.addChild(ctaButton);

	TweenMax.delayedCall(0, frame_1);

	//bob();


	function frame_1() {
		//TweenMax.delayedCall(0, boxParticles.form, [150,0.25], boxParticles);
		TweenMax.delayedCall(0, text1Particles.form, [7,1], text1Particles);
		TweenMax.delayedCall(0, text2Particles.form, [7,1], text2Particles);
		//TweenMax.delayedCall(0, screenParticles.form, [300,2,false], screenParticles);
		//TweenMax.delayedCall(0, axisParticles.form, [300,2,false], axisParticles);
		
		TweenMax.delayedCall(2, text1Particles.tick, [], text1Particles);
		TweenMax.delayedCall(2, text2Particles.tick, [], text2Particles);
		//TweenMax.delayedCall(4, screenParticles.tick, [], screenParticles);
		//TweenMax.delayedCall(4, axisParticles.tick, [], axisParticles);
		//TweenMax.delayedCall(4, screenParticles.tick, [], screenParticles);
		//TweenMax.to(e.SmallText, 1.5, {alpha: 1, delay: 2.5});
		TweenMax.delayedCall(4, frame_2, [], this);

	}

	function frame_2() {
		//boxParticles.disperse(0,0,"small",1,200);
		//screenParticles.disperse(0,0,"small",1,200);

		//TweenMax.delayedCall(0.75, boxParticles.form, [150,0.25], boxParticles);
		text1Particles.disperse(0,0,"small",1,10);
		text2Particles.disperse(0,0,"small",1,10);
		//TweenMax.to(e.SmallText, 1, {alpha: 0});
		TweenMax.delayedCall(0.5, text3Particles.form, [7,1], text3Particles);
		TweenMax.delayedCall(2.5, text3Particles.tick, [], text3Particles);
		TweenMax.delayedCall(4.5, text3Particles.tick, [], text3Particles);
		
		TweenMax.delayedCall(0.5, text4Particles.form, [7,1], text4Particles);
		TweenMax.delayedCall(2.5, text4Particles.tick, [], text4Particles);
		TweenMax.delayedCall(4.5, text4Particles.tick, [], text4Particles);
		
		//screenParticles.tick();
		//TweenMax.delayedCall(3, screenParticles.tick, [], screenParticles);
		//TweenMax.delayedCall(5, screenParticles.tick, [], screenParticles);
		
		//axisParticles.tick();
		//TweenMax.delayedCall(3, axisParticles.tick, [], axisParticles);
		//TweenMax.delayedCall(5, axisParticles.tick, [], axisParticles);

		//TweenMax.delayedCall(1.5, screenParticles.form, [150,0.25,false], screenParticles);


		TweenMax.delayedCall(6.5, frame_3, [], this);
	}

	function frame_3() {
		//boxParticles.disperse(0,0,"small",1,200);
		//screenParticles.disperse(0,0,"small",1,200);
		text3Particles.disperse(0,0,"small",1,10);
		text4Particles.disperse(0,0,"small",1,10);
		//text4Particles.disperse(0,0,"small",1,10);
		//text5Particles.disperse(0,0,"small",1,10);

		//TweenMax.delayedCall(0.75, boxParticles.form, [150,0.25], boxParticles);
		TweenMax.delayedCall(0.5, text5Particles.form, [7,0.5], text5Particles);
		TweenMax.delayedCall(0.5, text6Particles.form, [7,0.5], text6Particles);
		//screenParticles.tick();
		//axisParticles.tick();

		TweenMax.delayedCall(2.5, text5Particles.tick, [], text5Particles);
		TweenMax.delayedCall(2.5, text6Particles.tick, [], text6Particles);
		//TweenMax.delayedCall(2.5, screenParticles.tick, [], screenParticles);
		//TweenMax.delayedCall(2.5, axisParticles.tick, [], axisParticles);

		//TweenMax.delayedCall(1.5, screenParticles.form, [150,0.25,false], screenParticles);
		
		//var interval = setInterval( function() { text5Particles.tick(); text6Particles.tick(); screenParticles.tick(); //axisParticles.tick();}, 3500);
		
		//setTimeout(function(){ clearInterval(interval); }, 20000);
		
		var cta = document.getElementById("cta");
		TweenMax.to(cta, 1, {delay:2, css:{opacity:1}});
		
		var root = document.getElementById("root");
		TweenMax.to(root, 1, {delay:2, css:{opacity:1}});
		
		var upfront = document.getElementById("upfront");
		TweenMax.to(upfront, 1, {delay:2.5, css:{opacity:1}});
		
		TweenMax.delayedCall(4, stopBackground);
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
		Enabler.exit('Background Exit', clickTag);
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


