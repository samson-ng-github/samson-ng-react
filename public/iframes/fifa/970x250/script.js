
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
    TweenMax.set('#rating', {left:599, bottom:8, autoAlpha: 0})
	TweenMax.set('#branding', {y:-96})
    TweenMax.set('#logo', {x:24, y:123})
    TweenMax.set('#ctaCont', {x:970, y:164})
//    TweenMax.set('#legal', {x:25, y:250})
    TweenMax.set('#hero', {x:221, y:0})
    TweenMax.set('#copy1Cont', {x:640, y:90})
//    TweenMax.set('#copy1', {x:585, y:14+3})
    TweenMax.set('#copy2', {x: 735, y:62})
//    TweenMax.set('#copy3', {x:-169, y:128})
    TweenMax.set('#underline', {top: 80})
    TweenMax.set('#strokeFarTop', {x:-215, y:45})
    TweenMax.set('#copy3', {x:583, y:56, autoAlpha: 0});
    //copy3.style.top= "0px";
	//TweenMax.to(cover, 0.5, {autoAlpha:0, ease:Power1.easeOut})
    TweenMax.delayedCall(0, frame1)

	function frame1() {			
        TweenMax.to('#bing', 0, {autoAlpha:0, delay:1})
        TweenMax.from(['#copy1Cont'], 0.5, {x:970, delay:1})
        TweenMax.to('#strokeCont', 0.5, {width:325, delay:1})
        TweenMax.to('#hero', 4.75, {x:258, rotation:0.01, delay:1})
        TweenMax.to('#copy1', 0.5, {clip:"rect(0px 155px 0px 0px)", ease: Linear.easeOut, delay:3.75})
        TweenMax.to('#underline', 0.5, {top:-5, ease: Linear.easeOut, delay:3.75})
        TweenMax.to('#underline', 0.5, {autoAlpha: 0, ease: Linear.easeOut, delay:4.25})
        TweenMax.delayedCall(4.8, frame2)
	}

	function frame2() {
        TweenMax.to('#rating', 0.7, {autoAlpha:1, delay:0})
        TweenMax.to('#branding', 0.7, {y:0, delay:0})
//        TweenMax.to('#hero', 0.7, {x:45, delay:0})
//        TweenMax.to('#logo', 0.7, {x:142, y:12, scale:0.74, delay:0})
        TweenMax.to('#ctaCont', 0.5, {x:735, delay:0})
        TweenMax.to('#copy2', 0.5, {clip:"rect(0px 182px 77px 0px)", ease: Linear.easeOut, delay:0, onComplete:addListeners})
//        TweenMax.to('#legal', 0.25, {y:228, delay:0.5,})
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
    TweenMax.set('#copy3', {x:341, y:56, autoAlpha: delay});
    TweenMax.to('#copy3', 0.3, {x:583, autoAlpha: 1, delay:delay})
    TweenMax.to('#divider', 0.1, {autoAlpha:0, delay:delay})
    TweenMax.to('#bgCopy', 0.3, {scaleX:3, transformOrigin:"100% 50%", delay:delay})
    TweenMax.to('#strokeTop', 0.3, {x:160, y:-109, delay:delay})
    TweenMax.to('#branding', 0.3, {y:-96, delay:delay})
//    TweenMax.to('#legal', 0.3, {y:250, delay:delay})
    TweenMax.to('#copy2', 0.3, {clip:"rect(0px 182px 77px 182px)", delay:delay})
    TweenMax.to('#hero', 0.3, {x:-450, rotation:0.01, delay:delay})
    TweenMax.to('#logo', 0.3, {x:138, y:85, scale:1.35, delay:delay})
    TweenMax.to('#ctaCont', 0.3, {x:620, y:139, scale:1.7, delay:delay})
    TweenMax.set('#strokeFarTop', {x:-215, y:45})
    TweenMax.to('#strokeFarTop', 0.3, {x:-57, y:-24, delay:delay})
}
    
function rollout() {
    var delay = 0;
    TweenMax.to('#copy3', 0.3, {x:970, autoAlpha: 0, delay:delay})
    TweenMax.to('#divider', 0.1, {autoAlpha:1,  delay:0.3})
    TweenMax.to('#bgCopy', 0.3, {scaleX:1, delay:delay})
    TweenMax.set('#strokeTop',  {x:-100, y:50, delay:delay})
    TweenMax.to('#strokeTop', 0.3, {x:0, y:0, delay:delay})
    TweenMax.to('#branding', 0.3, {y:0, delay:delay})
//    TweenMax.to('#legal', 0.3, {y:228, delay:delay})
    TweenMax.to('#copy2', 0.3, {clip:"rect(0px 182px 77px 0px)", delay:delay})
    TweenMax.to('#hero', 0.3, {x:258, rotation:0.01, delay:delay})
    TweenMax.to('#logo', 0.3, {x:24, y:123, scale:1, delay:delay})
    TweenMax.to('#ctaCont', 0.3, {x:735, y:164, scale:1, delay:delay})
    TweenMax.to('#strokeFarTop', 0.3, {x:-215, y:45, delay:delay})
}
function exitHandler() {
	//console.log("clicked")
	window.open(window.clickTag);

}