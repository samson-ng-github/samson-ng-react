
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
    TweenMax.set('#rating-text', {left:6, bottom:6, autoAlpha:0})
	TweenMax.set('#branding', {x:-188, y:0})
    TweenMax.set('#logo', {x:42, y:16})
    TweenMax.set('#ctaCont', {x:560, y:90})
//    TweenMax.set('#legal', {x:133, y:90})
    TweenMax.set('#hero', {x:260, y:0})
    TweenMax.set('#copy1', {x:560, y:17})
    TweenMax.set('#copy2', {x:560, y:12})
//    TweenMax.set('#copy3', {x:-169, y:128})
    TweenMax.set('#underline', {x:561, y:61})
    TweenMax.set('#strokeFarTop', {x:15, y:45})
    TweenMax.set('#copy3', {x:480-30, y:30-6, autoAlpha: 0});
    //copy3.style.top= "0px";
	//TweenMax.to(cover, 0.5, {autoAlpha:0, ease:Power1.easeOut})
    TweenMax.delayedCall(0, frame1)

	function frame1() {			
        TweenMax.to('#bing', 0, {autoAlpha:0, delay:1})
        TweenMax.from(['#copy1',"#underline"], 0.5, {x:728, delay:1})
        TweenMax.to('#strokeCont', 0.5, {width:237, delay:1})
        TweenMax.to('#hero', 4.75, {x:267, rotation:0.01, delay:1})
        TweenMax.to('#copy1', 0.5, {clip:"rect(0px 82px 0px 0px)", ease: Linear.easeOut, delay:3.75})
        TweenMax.to('#underline', 0.5, {y:13, ease: Linear.easeOut, delay:3.75})
        TweenMax.to('#underline', 0.5, {autoAlpha: 0, ease: Linear.easeOut, delay:4.25})
        TweenMax.delayedCall(4.8, frame2)
	}

	function frame2() {
        TweenMax.to('#rating-text', 0.7, {autoAlpha:1, delay:0})
        TweenMax.to('#branding', 0.7, {x:0, delay:0})
        TweenMax.to('#hero', 0.7, {x:300, rotation:0.01, delay:0})
        TweenMax.to('#logo', 0.7, {x:112, y:17, scale:0.74, delay:0})
        TweenMax.to('#ctaCont', 0.5, {y:61, delay:0})
        TweenMax.to('#copy2', 0.5, {clip:"rect(0px 101px 40px 0px)", ease: Linear.easeOut, delay:0, onComplete:addListeners})
//        TweenMax.to('#legal', 0.25, {y:75, delay:0.5})
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
    TweenMax.set('#copy3', {x:480-30, y:30-6, autoAlpha: 0});
    TweenMax.to('#copy3', 0.3, {x:480, autoAlpha: 1, delay:delay})
    TweenMax.to('#divider', 0.1, {autoAlpha:0, delay:0})
    TweenMax.to('#bgCopy', 0.3, {scaleX:3.64, transformOrigin:"100% 50%", delay:delay})
    TweenMax.to('#strokeTop', 0.3, {x:160, y:-109, delay:delay})
    TweenMax.to('#branding', 0.3, {x:-188, delay:delay})
//    TweenMax.to('#legal', 0.3, {y:90, delay:delay})
    TweenMax.to('#copy2', 0.3, {clip:"rect(0px 101px 40px 101px)", delay:delay})
    TweenMax.to('#hero', 0.3, {x:-209, rotation:0.01, delay:delay})
    TweenMax.to('#logo', 0.3, {x:42, y:17.5, scale:1, delay:delay})
    TweenMax.to('#ctaCont', 0.3, {x:290, y:28, scale:1.7, delay:delay})
    TweenMax.set('#strokeFarTop', {x:15, y:45 , delay:delay})
    TweenMax.to('#strokeFarTop', 0.3, {x:108, y:-20, delay:delay})
}
    
function rollout() {
    var delay = 0;
    TweenMax.to('#copy3', 0.3, {x:480+30, autoAlpha: 0, delay:delay})
    TweenMax.to('#divider', 0.1, {autoAlpha:1, delay:0.3})
    TweenMax.to('#bgCopy', 0.3, {scaleX:1, delay:delay})
    TweenMax.set('#strokeTop',  {x:-100, y:50, delay:delay})
    TweenMax.to('#strokeTop', 0.3, {x:0, y:0, delay:delay})
    TweenMax.to('#branding', 0.3, {x:0, delay:delay})
//    TweenMax.to('#legal', 0.3, {y:76, delay:delay})
    TweenMax.to('#copy2', 0.3, {clip:"rect(0px 101px 40px 0px)", delay:delay})
    TweenMax.to('#hero', 0.3, {x:300, rotation:0.01, delay:delay})
    TweenMax.to('#logo', 0.3, {x:112, y:17, scale:0.74, delay:delay})
    TweenMax.to('#ctaCont', 0.3, {x:560, y:61, scale:1, delay:delay})
    TweenMax.to('#strokeFarTop', 0.3, {x:200, y:-85, delay:delay})
}
function exitHandler() {
	//console.log("clicked")
	window.open(window.clickTag);

}