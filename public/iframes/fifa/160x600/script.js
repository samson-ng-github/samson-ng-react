
var Banner = Banner || {}, addListeners, exitHandler, mainExit = document.getElementById('mainExit');
	
function $(el) {
		return document.querySelector(el);
}

Banner.init = function(){
    
	mainExit.addEventListener('click', exitHandler, false);
	Banner.animate();		
};

Banner.animate = function(){
    //Reset positioning
	TweenMax.set('#branding', {x:0, y:-70})
    TweenMax.set('#rating', {right:6, bottom:218, autoAlpha:0})
    TweenMax.set('#logo', {x:30, y:417})
    TweenMax.set('#ctaCont', {x:160, y:557})
//    TweenMax.set('#legal', {x:13, y:600})
    TweenMax.set('#hero', {x:-235, y:14})
    TweenMax.set('#copy1', {x:30, y:498})
    TweenMax.set('#copy2', {x:30, y:498})
    TweenMax.set('#copy3', {left:-169, top:315})
    TweenMax.set('#underline', {x:30, y:542})
    TweenMax.set('#strokeFarTop', {x:15, y:45})
	//TweenMax.to(cover, 0.5, {autoAlpha:0, ease:Power1.easeOut})
    TweenMax.delayedCall(0, frame1)

	function frame1() {			
        TweenMax.to('#bing', 0, {autoAlpha:0, delay:1})
        TweenMax.from(['#copy1',"#underline"], 0.5, {x:160, delay:1})
        TweenMax.to('#strokeCont', 0.5, {width:"160px", delay:1})
        TweenMax.to('#hero', 4.75, {x:-203, rotation:0.01, delay:1})
        TweenMax.to('#copy1', 0.5, {clip:"rect(0px 82px 0px 0px)", ease: Linear.easeOut, delay:3.75})
        TweenMax.to('#underline', 0.5, {y:495, ease: Linear.easeOut, delay:3.75})
        TweenMax.to('#underline', 0.5, {autoAlpha: 0, ease: Linear.easeOut, delay:4.25})
        TweenMax.delayedCall(4.8, frame2)
	}

	function frame2() {
        TweenMax.to('#rating', 0.7, {autoAlpha:1, delay:0})
        TweenMax.to('#branding', 0.7, {y:0, delay:0})
        TweenMax.to('#hero', 0.7, {y:50, x:-190, rotation:0.01, scale:0.75, delay:0})
//        TweenMax.to('#logo', 0.7, {y:40, delay:0})
        TweenMax.to('#ctaCont', 0.5, {x:32, delay:0})
        TweenMax.to('#copy2', 0.5, {clip:"rect(0px 101px 40px 0px)", ease: Linear.easeOut, delay:0, onComplete:addListeners})
//        TweenMax.to('#legal', 0.25, {y:573, delay:0.5})
        //TweenMax.delayedCall(3, checkLoop)
	}
};

var counter = 0;

function checkLoop() {
	counter++;
	if (counter >= 2) {
		//console.log("ended");
	} else {
		//console.log("restart");
        mainExit.removeEventListener('mouseover', rollover)
	    mainExit.removeEventListener('mouseout', rollout)
		//TweenMax.to(cover, 0.5, {autoAlpha:1, ease:Power1.easeOut});
		TweenMax.delayedCall(0.5, reset);
								
	}
}

function reset(){
    var allElements = ['#branding','#logo','#ctaCont','#copy1','#copy2', '#copy3','#legal', '#hero','#underline','#strokeFarTop','#bing','#bgCopy'];
    TweenMax.set(allElements, {clearProps:"all"});
	Banner.animate();
}

function addListeners() {

	mainExit.addEventListener('mouseover', rollover)
	mainExit.addEventListener('mouseout', rollout)
};

function rollover() {
    var delay = 0;
    TweenMax.set('#copy3', {left:-169})
    TweenMax.to('#copy3', 0.3, {left:7, delay:delay})
    TweenMax.to('#divider', 0.1, {autoAlpha:0, delay:0})
    TweenMax.to('#bgCopy', 0.3, {scaleY:3, transformOrigin:"50% 95%", delay:delay})
    TweenMax.to('#strokeTop', 0.3, {x:-134, y:100, delay:delay})
    TweenMax.to('#branding', 0.3, {y:-70, delay:delay})
//    TweenMax.to('#legal', 0.3, {y:600, delay:0})
    TweenMax.to('#copy2', 0.3, {clip:"rect(0px 101px 40px 101px)", delay:delay})
    TweenMax.to('#hero', 0.3, {x:-410, rotation:0.01, delay:delay})
    TweenMax.to('#logo', 0.3, {x:27, y:180, scale:1.35, delay:delay})
    TweenMax.to('#ctaCont', 0.3, {x:23, y:400, scale:1.3, delay:delay})
    TweenMax.set('#strokeFarTop', {x:15, y:45 , delay:delay})
    TweenMax.to('#strokeFarTop', 0.3, {x:120, y:-5, delay:delay})
}
    
function rollout() {
    var delay = 0;
    TweenMax.to('#copy3', 0.1, {left:160, delay:delay})
    TweenMax.to('#divider', 0.1, {autoAlpha:1, delay:0.3})
    TweenMax.to('#bgCopy', 0.3, {scaleY:1, delay:delay})
    TweenMax.set('#strokeTop', {x:-100, y:50, delay:delay})
    TweenMax.to('#strokeTop', 0.3, {x:0, y:0, delay:delay})
    TweenMax.to('#branding', 0.3, {y:0, delay:delay})
//    TweenMax.to('#legal', 0.3, {y:573, delay:delay})
    TweenMax.to('#copy2', 0.3, {clip:"rect(0px, 101px, 40px, 0px)", delay:delay})
    TweenMax.to('#hero', 0.3, {x:-203, rotation:0.01, delay:delay})
    TweenMax.to('#logo', 0.3, {x:30, y:417, scale:1, delay:delay})
    TweenMax.to('#ctaCont', 0.3, {x:32, y:557, scale:1, delay:delay})
    TweenMax.to('#strokeFarTop', 0.3, {x:200, y:-85, delay:delay})
}
function exitHandler() {
	//console.log("clicked")
	window.open(window.clickTag);

}