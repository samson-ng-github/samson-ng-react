
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
    TweenMax.set('#rating', {left:541, bottom:6, autoAlpha:0})
	TweenMax.set('#branding', {x:-188, y:0})
    TweenMax.set('#logo', {x:58, y:8})
    TweenMax.set('#ctaCont', {x:801, y:74})
//    TweenMax.set('#legal', {x:147, y:70})
    TweenMax.set('#hero', {x:281, y:-4})
    TweenMax.set('#copy1', {x:642, y:15})
    TweenMax.set('#copy2', {x:642, y:5})
//    TweenMax.set('#copy3', {x:-169, y:128})
    TweenMax.set('#underline', {x:643, y:45})
    TweenMax.set('#strokeFarTop', {x:-165, y:25})
    TweenMax.set('#copy3', {x:665-80, y:17, autoAlpha: 0});
    //copy3.style.top= "0px";
	//TweenMax.to(cover, 0.5, {autoAlpha:0, ease:Power1.easeOut})
    TweenMax.delayedCall(0, frame1)

	function frame1() {			
        TweenMax.to('#bing', 0, {autoAlpha:0, delay:1})
        TweenMax.from(['#copy1',"#underline"], 0.5, {x:970, delay:1})
        TweenMax.to('#strokeCont', 0.5, {width:385, delay:1})
        TweenMax.to('#hero', 4.75, {x:323, rotation:0.01, delay:1})
        TweenMax.to('#copy1', 0.5, {clip:"rect(0px 160px 0px 0px)", ease: Linear.easeOut, delay:3.75})
        TweenMax.to('#underline', 0.5, {y:12, ease: Linear.easeOut, delay:3.75})
        TweenMax.to('#underline', 0.5, {autoAlpha: 0, ease: Linear.easeOut, delay:4.25})
        TweenMax.delayedCall(4.8, frame2)
	}

	function frame2() {
        TweenMax.to('#rating', 0.7, {autoAlpha:1, delay:0})
        TweenMax.to('#branding', 0.7, {x:0, delay:0})
//        TweenMax.to('#hero', 0.7, {x:323, delay:0})
        TweenMax.to('#logo', 0.7, {x:144, y:9, scale:0.85, delay:0})
        TweenMax.to('#ctaCont', 0.5, {y:23, delay:0})
        TweenMax.to('#copy2', 0.5, {clip:"rect(0px 135px 55px 0px)", ease: Linear.easeOut, delay:0, onComplete:addListeners})
//        TweenMax.to('#legal', 0.25, {y:52, delay:0.5})
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
    TweenMax.set('#copy3', {x:665-80, y:12, autoAlpha: 0});
    TweenMax.to('#copy3', 0.3, {x:665, autoAlpha: 1, delay:delay})
    TweenMax.to('#divider', 0.1, {autoAlpha:0, delay:0})
    TweenMax.to('#bgCopy', 0.3, {scaleX:3.64, transformOrigin:"100% 50%", delay:delay})
    TweenMax.to('#strokeTop', 0.3, {x:160, y:-109, delay:delay})
    TweenMax.to('#branding', 0.3, {x:-188, delay:delay})
//    TweenMax.to('#legal', 0.3, {y:70, delay:delay})
    TweenMax.to('#copy2', 0.3, {clip:"rect(0px 135px 55px 135px)", delay:delay})
    TweenMax.to('#hero', 0.3, {x:-213, delay:delay})
    TweenMax.to('#logo', 0.3, {x:103, y:8.5, scale:1, delay:delay})
    TweenMax.to('#ctaCont', 0.3, {x:420, y:21, scale:1.3, delay:delay})
    TweenMax.set('#strokeFarTop', {x:48, y:-100, delay:delay})
    TweenMax.to('#strokeFarTop', 0.3, {x:-52, y:-28, delay:delay})
}
    
function rollout() {
    var delay = 0;
    TweenMax.to('#copy3', 0.3, {x:665+180, autoAlpha: 0, delay:delay})
    TweenMax.to('#divider', 0.1, {autoAlpha:1, delay:0.3})
    TweenMax.to('#bgCopy', 0.3, {scaleX:1, delay:delay})
    TweenMax.set('#strokeTop',  {x:-100, y:50, delay:delay})
    TweenMax.to('#strokeTop', 0.3, {x:0, y:0, delay:delay})
    TweenMax.to('#branding', 0.3, {x:0, delay:delay})
//    TweenMax.to('#legal', 0.3, {y:52, delay:delay})
    TweenMax.to('#copy2', 0.3, {clip:"rect(0px 135px 55px 0px)", delay:delay})
    TweenMax.to('#hero', 0.3, {x:323, delay:delay})
    TweenMax.to('#logo', 0.3, {x:144, y:9, scale:0.85, delay:delay})
    TweenMax.to('#ctaCont', 0.3, {x:801, y:23, scale:1, delay:delay})
    TweenMax.to('#strokeFarTop', 0.3, {x:48, y:-100, delay:delay})
}
function exitHandler() {
	//console.log("clicked")
	window.open(window.clickTag);

}