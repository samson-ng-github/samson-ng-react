
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
    TweenMax.set('#rating', {left:6, bottom:6, autoAlpha:0})
	TweenMax.set('#branding', {x:0, y:-70})
    TweenMax.set('#logo', {x:180, y:30})
    TweenMax.set('#ctaCont', {x:300, y:187})
//    TweenMax.set('#legal', {x:180, y:250})
    TweenMax.set('#hero', {x:-50, y:5})
    TweenMax.set('#copy1', {x:177.5, y:105})
    TweenMax.set('#copy2', {x:181, y:123})
//    TweenMax.set('#copy3', {x:-169, y:128})
    TweenMax.set('#underline', {x:178.5, y:149})
    TweenMax.set('#strokeFarTop', {x:15, y:45})
    copy3.style.left = "-169px";
    copy3.style.top= "132px";
	//TweenMax.to(cover, 0.5, {autoAlpha:0, ease:Power1.easeOut})
    TweenMax.delayedCall(0, frame1)

	function frame1() {			
        TweenMax.to('#bing', 0, {autoAlpha:0, delay:1})
        TweenMax.from(['#copy1',"#underline"], 0.5, {x:300, delay:1})
        TweenMax.to('#strokeCont', 0.5, {width:143, delay:1})
        TweenMax.to('#hero', 4.75, {x:0, rotation:0.01, delay:1})
        TweenMax.to('#copy1', 0.5, {clip:"rect(0px 82px 0px 0px)", ease: Linear.easeOut, delay:3.75})
        TweenMax.to('#underline', 0.5, {y:103, ease: Linear.easeOut, delay:3.75})
        TweenMax.to('#underline', 0.5, {autoAlpha: 0, ease: Linear.easeOut, delay:4.25})
        TweenMax.delayedCall(4.8, frame2)
	}

	function frame2() {
        TweenMax.to('#rating', 0.7, {autoAlpha:1, delay:0, autoAlpha:1})
        TweenMax.to('#branding', 0.7, {y:0, delay:0})
        TweenMax.to('#hero', 0.7, {y:50, delay:0})
        TweenMax.to('#logo', 0.7, {y:45, delay:0})
        TweenMax.to('#ctaCont', 0.5, {x:180, delay:0})
        TweenMax.to('#copy2', 0.5, {clip:"rect(0px 101px 40px 0px)", ease: Linear.easeOut, delay:0, onComplete:addListeners})
//        TweenMax.to('#legal', 0.25, {y:231, delay:0.5})
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
    var delay = 0.1;
    copy3.style.left = "-169px";
    copy3.style.top= "132px";
//  TweenMax.set('#copy3', {x:-169, y:128})
    TweenMax.set('#rating', {zIndex:-1})
    TweenMax.to('#copy3', 0.3, {left:71, delay:delay})
    TweenMax.to('#divider', 0.1, {autoAlpha:0, delay:0})
    TweenMax.to('#bgCopy', 0.3, {scaleX:2.1, transformOrigin:"100% 50%", delay:delay})
    TweenMax.to('#strokeTop', 0.3, {x:160, y:-109, delay:delay})
    TweenMax.to('#branding', 0.3, {y:-70, delay:delay})
//    TweenMax.to('#legal', 0.3, {y:250, delay:delay})
    TweenMax.to('#copy2', 0.3, {clip:"rect(0px 101px 40px 101px)", delay:delay})
    TweenMax.to('#hero', 0.3, {x:-180, rotation:0.01, delay:delay})
    TweenMax.to('#logo', 0.3, {x:106, y:35, scale:1.4, delay:delay})
    TweenMax.to('#ctaCont', 0.3, {x:90, y:189, scale:1.2, delay:delay})
    TweenMax.set('#strokeFarTop', {x:15, y:45 , delay:delay})
    TweenMax.to('#strokeFarTop', 0.3, {x:108, y:-20, delay:delay})
}
    
function rollout() {
    var delay = 0.1;
    TweenMax.set('#rating', {zIndex:0, delay:0.2})
    TweenMax.to('#copy3', 0.3, {left:311, delay:delay})
    TweenMax.to('#divider', 0.1, {autoAlpha:1, delay:0.3})
    TweenMax.to('#bgCopy', 0.3, {scaleX:1, delay:delay})
    TweenMax.set('#strokeTop',  {x:-100, y:50, delay:delay})
    TweenMax.to('#strokeTop', 0.3, {x:0, y:0, delay:delay})
    TweenMax.to('#branding', 0.3, {y:0, delay:delay})
//    TweenMax.to('#legal', 0.3, {y:231, delay:delay})
    TweenMax.to('#copy2', 0.3, {clip:"rect(0px 101px 40px 0px)", delay:delay})
    TweenMax.to('#hero', 0.3, {x:0, rotation:0.01, delay:delay})
    TweenMax.to('#logo', 0.3, {x:180, y:40, scale:1, delay:delay})
    TweenMax.to('#ctaCont', 0.3, {x:180, y:187, scale:1, delay:delay})
    TweenMax.to('#strokeFarTop', 0.3, {x:200, y:-85, delay:delay})
}
function exitHandler() {
	//console.log("clicked")
	window.open(window.clickTag);

}