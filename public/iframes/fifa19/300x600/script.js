
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
	TweenMax.set('#branding', {x:0, y:-84})
    TweenMax.set('#rating', {right:6, bottom:147, autoAlpha:0})
    TweenMax.set('#logo', {x:30, y:480})
    TweenMax.set('#ctaCont', {x:300, y:560})
//    TweenMax.set('#legal', {x:0, y:600})
    TweenMax.set('#hero', {x:-164, y:21})
    TweenMax.set('#copy1', {x:162, y:498})
    TweenMax.set('#copy2', {x:155, y:498})
//    TweenMax.set('#copy3', {x:-169, y:128})
    TweenMax.set('#underline', {x:163, y:550})
    TweenMax.set('#strokeFarTop', {x:15, y:45})
    copy3Cont.style.left = "-300px";
    copy3Cont.style.top= "298px";
	//TweenMax.to(cover, 0.5, {autoAlpha:0, ease:Power1.easeOut})
    TweenMax.delayedCall(0, frame1)

	function frame1() {			
        TweenMax.to('#bing', 0, {autoAlpha:0, delay:1})
        TweenMax.from(['#copy1',"#underline"], 0.5, {x:300, delay:1})
        TweenMax.to('#strokeCont', 0.5, {height: 141, delay:1})
        TweenMax.to('#hero', 4.75, {x:-148, rotation:0.01, delay:1})
        TweenMax.to('#copy1', 0.5, {clip:"rect(0px 100px 0px 0px)", ease: Linear.easeOut, delay:3.75})
        TweenMax.to('#underline', 0.5, {y:493, ease: Linear.easeOut, delay:3.75})
        TweenMax.to('#underline', 0.5, {autoAlpha: 0, ease: Linear.easeOut, delay:4.25})
        TweenMax.delayedCall(4.8, frame2)
	}

	function frame2() {
        TweenMax.to('#rating', 0.7, {autoAlpha:1, delay:0})
        TweenMax.to('#branding', 0.7, {y:0, delay:0})
        TweenMax.to('#hero', 0.7, {y:100, rotation:0.01, delay:0})
//        TweenMax.to('#logo', 0.7, {y:471, delay:0})
        TweenMax.to('#ctaCont', 0.5, {x:0, delay:0})
        TweenMax.to('#copy2', 0.5, {clip:"rect(0px 120px 50px 0px)", ease: Linear.easeOut, delay:0, onComplete:addListeners})
//        TweenMax.to('#legal', 0.25, {y:583, delay:0.5})
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
    copy3Cont.style.left = "-300px";
    copy3Cont.style.top= "298px";
//  TweenMax.set('#copy3', {x:-169, y:128})  
    TweenMax.to('#copy3Cont', 0.3, {left:0, delay:delay})
    TweenMax.to('#divider', 0.1, {autoAlpha:0, delay:0})
    TweenMax.to('#bgCopy', 0.3, {scaleY:4.5, transformOrigin:"50% 95%", delay:delay})
    TweenMax.to('#strokeTop', 0.3, {x:-134, y:100, delay:delay})
    TweenMax.to('#branding', 0.3, {y:-84, delay:delay})
//    TweenMax.to('#legal', 0.3, {y:600, delay:delay})
    TweenMax.to('#copy2', 0.3, {clip:"rect(0px 120px 50px 120px)", delay:delay})
    TweenMax.to('#hero', 0.3, {x:-410, rotation:0.01, delay:delay})
    TweenMax.to('#logo', 0.3, {x:103, y:125, scale:2, delay:delay})
    TweenMax.to('#ctaCont', 0.3, {y:415, scale:1.4, delay:delay})
    TweenMax.set('#strokeFarTop', {x:15, y:45 , delay:delay})
    TweenMax.to('#strokeFarTop', 0.3, {x:128, y:0, delay:delay})
}
    
function rollout() {
    var delay = 0;
    TweenMax.to('#copy3Cont', 0.3, {left:300, delay:delay})
    TweenMax.to('#divider', 0.1, {autoAlpha:1, delay:0.3})
    TweenMax.to('#bgCopy', 0.3, {scaleY:1, delay:0.15})
    TweenMax.set('#strokeTop', {x:-100, y:50, delay:delay})
    TweenMax.to('#strokeTop', 0.3, {x:0, y:0, delay:0.15})
    TweenMax.to('#branding', 0.3, {y:0, delay:delay})
//    TweenMax.to('#legal', 0.3, {y:583, delay:delay})
    TweenMax.to('#copy2', 0.3, {clip:"rect(0px, 120px, 50px, 0px)", delay:delay})
    TweenMax.to('#hero', 0.3, {x:-148, rotation:0.01, delay:delay})
    TweenMax.to('#logo', 0.3, {x:30, y:480, scale:1, delay:delay})
    TweenMax.to('#ctaCont', 0.3, {y:560, scale:1, delay:delay})
    TweenMax.to('#strokeFarTop', 0.3, {x:180, y:-80, delay:delay})
}
function exitHandler() {
	//console.log("clicked")
	window.open(window.clickTag);

}