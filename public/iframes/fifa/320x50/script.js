
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
    TweenMax.set('#copy1', {x:200, y:26})
    TweenMax.set('#copy2', {x:200, y:26})
//    TweenMax.set('#legal', {x:42, y:34})

    TweenMax.delayedCall(0, frame1)

	function frame1() {		
               
//        TweenMax.set('#copy2', {clip:"rect(20px 100px 20px 0px)"})
        TweenMax.to('#copy1', 0.5, {clip:"rect(0px 100px 0px 0px)", ease: Linear.easeOut, delay:2})
        TweenMax.to('#copy2', 0.5, {clip:"rect(0px 100px 20px 0px)", ease: Linear.easeOut, delay:2.2})
        TweenMax.delayedCall(5, frame2)
	}

	function frame2() {
         TweenMax.set('#copy1', {clip:"rect(20px 100px 20px 0px)"})
        TweenMax.to('#copy2', 0.5, {clip:"rect(0px 100px 0px 0px)", ease: Linear.easeOut, delay:0})
        TweenMax.to('#copy1', 0.5, {clip:"rect(0px 100px 20px 0px)", ease: Linear.easeOut, delay:0.2})
        TweenMax.delayedCall(1, checkLoop)
	}
};

var counter = 0;

function checkLoop() {
	counter++;
	if (counter >= 10) {
		console.log("ended");
        TweenMax.set('#copy1', {clip:"rect(0px 100px 20px 0px)"})
        TweenMax.set('#copy2', {clip:"rect(20px 100px 20px 0px)"})
        TweenMax.to('#copy1', 0.5, {clip:"rect(0px 100px 0px 0px)", ease: Linear.easeOut, delay:2})
        TweenMax.to('#copy2', 0.5, {clip:"rect(0px 100px 20px 0px)", ease: Linear.easeOut, delay:2.2})
	} else {
		console.log("restart");
		//TweenMax.to(cover, 0.5, {autoAlpha:1, ease:Power1.easeOut});
		TweenMax.delayedCall(0, reset);
								
	}
}

function reset(){
    var allElements = ['#copy1','#copy2'];
    TweenMax.set(allElements, {clearProps:"all"});
	Banner.animate();
}

function exitHandler() {
	//console.log("clicked")
	window.open(window.clickTag);

}