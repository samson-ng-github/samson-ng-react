var BT = {};
var tlM = new TimelineMax();

/**
 * Window onload handler.
 */
function preInit() {
  setupBanner();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}

// Runs when Enabler is ready.
function init() {
  if (Enabler.isPageLoaded()) {
    politeInit();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
  }
};

// Runs when the page is completely loaded.   
function politeInit(){    
  startBanner();
};
 	

/**
 * Initializes the ad components
 */
function setupBanner() {
  BT.banner = {};
  BT.banner.banner = document.getElementById('banner');
  BT.banner.exit = document.getElementById('exit');
  BT.banner.preload = document.getElementById('preload');
  
  BT.banner.finalframe = document.getElementById('Final-frame');
  
  BT.banner.BTvideo = {};
  BT.banner.BTvideo.container = document.getElementById('container');
  BT.banner.BTvideo.vidContainer = document.getElementById('video-container');
  BT.banner.BTvideo.vid          = document.getElementById('video-BT');
  BT.banner.BTvideo.vidPlayBtn   = document.getElementById('play-btn');
  BT.banner.BTvideo.vidPlayBtniPad   = document.getElementById('PLAY-iPad');
  BT.banner.BTvideo.vidPauseBtn  = document.getElementById('pause-btn');
  BT.banner.BTvideo.vidStopBtn   = document.getElementById('stop-btn');
  BT.banner.BTvideo.vidReplayBtn = document.getElementById('replay-btn');
  BT.banner.BTvideo.vidUnmuteBtn = document.getElementById('unmute-btn');
  BT.banner.BTvideo.vidMuteBtn   = document.getElementById('mute-btn');
  BT.banner.BTvideo.vidReplaySideBtn   = document.getElementById('replay-side-btn');
  BT.banner.BTvideo.vidProgressBar   = document.getElementById('progress-bar');
  //BT.banner.BTvideo.cta   = document.getElementById('BT-CTA');
  //BT.banner.BTvideo.shimmer   = document.getElementById('shimmer');

  BT.banner.BTvideo.cue_point_1 = 0.500;
  BT.banner.BTvideo.cue_point_2 = 1.500;

  BT.banner.BTvideo.cue_point_3 = 25.500;
  BT.banner.BTvideo.cue_point_4 = 26.500;

  BT.banner.BTvideo.cue_point_5 = 0.000; //change this cue point if you want to skip the intro text for iPad
}


/**
 * Banner over
 */
 
var btnReplay = document.getElementById('replay-side-btn');
btnReplay.onmouseover = function() {
  TweenMax.to('#replay-side-btn', 0.6, {rotation:360, ease: Expo.easeOut});
}
btnReplay.onmouseout = function() {
  TweenMax.set('#replay-side-btn', {rotation:0});
}


/**
 * Ad initialisation.
 */
function startBanner() {
  // You can update the autoplay flag to 'true' to enable muted
  // autoplay although it won't work on iOS.
  BT.autoplay = true;
  
  tlM.set('#Video-controls', {autoAlpha:0});
   
  BT.banner.BTvideo.vidPlayBtniPad.style.visibility  = 'hidden';    	 	
  //tlM.add('logo', '2.0')    	
  //tlM.to('#BT-LOGO', 0.7, {autoAlpha:1, ease: Sine.easeIn},'logo');
  BT.banner.preload.style.visibility  = 'hidden';
  
  
  BT.isClick0 = false;

  // iOS
  if ((navigator.userAgent.match(/iPhone/i)) ||
    (navigator.userAgent.match(/iPad/i)) ||
    (navigator.userAgent.match(/Android/i)) ||
    (navigator.userAgent.match(/iPod/i))) {
    BT.banner.BTvideo.vidUnmuteBtn.style.opacity = 0;
    BT.banner.BTvideo.vidMuteBtn.style.opacity = 0;

    BT.banner.BTvideo.vidUnmuteBtn.style.display = 'none';
    BT.banner.BTvideo.vidMuteBtn.style.display = 'none';

    BT.banner.BTvideo.vidUnmuteBtn.style.visibility = 'hidden';
    BT.banner.BTvideo.vidMuteBtn.style.visibility = 'hidden';

    BT.autoplay = false;
    setTimeout(function() {
    	tlM.to('#PLAY-iPad', 0.5, {autoAlpha:1, ease: Sine.easeIn});
    }, 1500);
    
  }

  addVideoTracking();

  addListeners();
  
  show();
  
}

/**
 * Adds appropriate listeners at initialization time
 */
function addListeners() {
  BT.banner.exit.addEventListener('click', exitClickHandler);
  
  BT.banner.BTvideo.vidPlayBtn.addEventListener('click', pausePlayHandler, false);
  BT.banner.BTvideo.vidPauseBtn.addEventListener('click', pausePlayHandler, false);
  BT.banner.BTvideo.vidMuteBtn.addEventListener('click', muteUnmuteHandler, false);
  BT.banner.BTvideo.vidUnmuteBtn.addEventListener('click', muteUnmuteHandler, false);
  BT.banner.BTvideo.vidReplayBtn.addEventListener('click', replayHandler, false);
  BT.banner.BTvideo.vidReplaySideBtn.addEventListener('click', replayBannerHandler, false);
  BT.banner.BTvideo.vidStopBtn.addEventListener('click', stopHandler, false);
  BT.banner.BTvideo.vidPlayBtniPad.addEventListener('click', iPadPlayHandler, false);
  BT.banner.BTvideo.vid.addEventListener('ended', videoEndHandler, false);
  BT.banner.BTvideo.vid.addEventListener('timeupdate', videoTimeUpdateHandler, false);

  //BT.banner.BTvideo.cta.addEventListener('mouseenter', rolloverHandler);
}

/**
 *  Shows the ad.
 */
function show() {
  BT.banner.exit.style.display = "block";
  TweenMax.to(BT.banner.BTvideo.vidUnmuteBtn, 0.1, {alpha:1});
  TweenMax.to(BT.banner.BTvideo.vidMuteBtn, 0.1, {alpha:0});
  TweenMax.to(BT.banner.BTvideo.vidPauseBtn, 0.1, {alpha:0});
  TweenMax.to(BT.banner.BTvideo.vidPlayBtn, 0.1, {alpha:1});
  //BT.banner.finalframe.style.visibility  = 'hidden';
  
  if (BT.autoplay) {
    if (BT.banner.BTvideo.vid.readyState >= 2) {
      startMuted(null);
    }
    else {
      BT.banner.BTvideo.hasCanPlay = true;
      BT.banner.BTvideo.vid.addEventListener('canplay', startMuted, false);
    }

  }
  else {
    TweenMax.to(BT.banner.BTvideo.vidMuteBtn, 0.1, {alpha:1});
    TweenMax.to(BT.banner.BTvideo.vidUnmuteBtn, 0.1, {alpha:0});
    TweenMax.to(BT.banner.BTvideo.vidPauseBtn, 0.1, {alpha:0});
    TweenMax.to(BT.banner.BTvideo.vidPlayBtn, 0.1, {alpha:1});
  }
  	BT.banner.BTvideo.vidContainer.style.visibility  = 'visible';
  	BT.banner.BTvideo.container.style.visibility  = 'visible';     	
      		
}


// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

/*
function rolloverHandler() {
  TweenMax.killTweensOf(BT.banner.BTvideo.shimmer);
  BT.banner.BTvideo.shimmer.style.left = "-120px";
  BT.banner.BTvideo.shimmer.style.opacity = 1;
  TweenMax.to(BT.banner.BTvideo.shimmer, 1, {"left":180});
  TweenMax.to(BT.banner.BTvideo.shimmer, 0.7, {alpha:0});
}
*/

function exitClickHandler() {
  // Reset video
  
  if (BT.banner.BTvideo.vid.readyState > 0) {
    BT.banner.BTvideo.vid.currentTime = 29.5;
  }
  BT.banner.BTvideo.vid.pause();


  TweenMax.to(BT.banner.BTvideo.vidPauseBtn, 0, {alpha:0});
  TweenMax.to(BT.banner.BTvideo.vidPlayBtn, 0, {alpha:1});
  Enabler.exit('BackgroundExit', "http://bt.com/businessmoments/");
  
  //BT.banner.BTvideo.vidContainer.style.visibility = 'hidden';
	
  /*
  if (BT.banner.finalframe.style.visibility  == 'hidden'){
  	  BT.banner.finalframe.style.visibility  = 'visible';
  	  //tlM.to('#BT-CTA', 0, {autoAlpha:1, ease: Sine.easeIn});
  }*/
  
  tlM.set('#Video-controls', {autoAlpha:0});
  
  TweenMax.to(BT.banner.BTvideo.vidReplaySideBtn, 1, {alpha: 1});
  BT.banner.BTvideo.vidReplaySideBtn.style.pointerEvents = "auto";
}
/**
 * Triggered once the video player is ready to play the video on expansion.
 */
function startMuted(e) {
  // Leaving the listener can cause issues on Chrome / Firefox
  if (BT.banner.BTvideo.hasCanPlay) {
    BT.banner.BTvideo.vid.removeEventListener('canplay', startMuted);
    BT.banner.BTvideo.hasCanPlay = false;
  }
  // If paused then play
  BT.banner.BTvideo.vid.volume       = 0; // Muted by default
  BT.banner.BTvideo.vid.currentTime  = 0;
  BT.banner.BTvideo.vid.play();
  TweenMax.to(BT.banner.BTvideo.vidPauseBtn, 0.1, {alpha:1});
  TweenMax.to(BT.banner.BTvideo.vidPlayBtn, 0.1, {alpha:0});
}

/**
 * Play pause toggle.
 */
function pausePlayHandler(e) {
  // Under IE10, a video is not 'paused' after it ends.
  if (BT.banner.BTvideo.vid.paused || BT.banner.BTvideo.vid.ended) {
    if (BT.isClick0) {
      BT.banner.BTvideo.vid.volume = 1.0;
      TweenMax.to(BT.banner.BTvideo.vidMuteBtn, 0.1, {alpha:1});     
      TweenMax.to(BT.banner.BTvideo.vidUnmuteBtn, 0.1, {alpha:0});
      BT.isClick0 = false;
    }
    // If paused then play
    BT.banner.BTvideo.vid.play();
    TweenMax.to(BT.banner.BTvideo.vidPauseBtn, 0.1, {alpha:1});
    TweenMax.to(BT.banner.BTvideo.vidPlayBtn, 0.1, {alpha:0});
  }
  else {
    BT.banner.BTvideo.vid.pause();
    TweenMax.to(BT.banner.BTvideo.vidPauseBtn, 0.1, {alpha:0});
    TweenMax.to(BT.banner.BTvideo.vidPlayBtn, 0.1, {alpha:1});
  }
  
  if(BT.banner.BTvideo.vidContainer.style.visibility == 'hidden'){
  	 BT.banner.BTvideo.vidContainer.style.visibility = 'visible';
  }
  /*
  if (BT.banner.finalframe.style.visibility  == 'visible'){
  	  BT.banner.finalframe.style.visibility  = 'hidden';
  	  //tlM.set('#BT-CTA', {autoAlpha:0});
  } else {
  	  BT.banner.finalframe.style.visibility  = 'hidden'
  }*/
}

/**
 * Mutes or unmute the video player.
 */
function muteUnmuteHandler(e) {
  if (BT.banner.BTvideo.vid.volume == 0.0) {
    Enabler.counter("Unmute video 0", true);
	console.log("fired");
    BT.banner.BTvideo.vid.volume = 1.0;
    TweenMax.to(BT.banner.BTvideo.vidMuteBtn, 0.1, {alpha:1});
    TweenMax.to(BT.banner.BTvideo.vidUnmuteBtn, 0.1, {alpha:0});
  } else {
    Enabler.counter("Mute video 0", true);
	console.log("fired");
    BT.banner.BTvideo.vid.volume = 0.0;
    TweenMax.to(BT.banner.BTvideo.vidUnmuteBtn, 0.1, {alpha:1});
    TweenMax.to(BT.banner.BTvideo.vidMuteBtn, 0.1, {alpha:0});    
  }
}

/**
 * iPad Play.
 */
function iPadPlayHandler(e) {
  Enabler.counter("iPad Play", true);
  
  BT.banner.BTvideo.vidPlayBtniPad.style.visibility = 'hidden';

    TweenMax.to(BT.banner.BTvideo.vidPauseBtn, 0.1, {alpha:1});
    TweenMax.to(BT.banner.BTvideo.vidPlayBtn, 0.1, {alpha:0});  

  //BT.banner.BTvideo.vid.currentTime = BT.banner.BTvideo.cue_point_5;
  BT.banner.BTvideo.vid.play();
  BT.banner.BTvideo.vid.volume = 1.0;
  BT.banner.BTvideo.vidPlayBtniPad.style.opacity = 0;
}

/**
 * Stops the video.
 */
function stopHandler(e) {
  Enabler.counter("Video 0 stopped", true);
  BT.banner.BTvideo.vid.currentTime = 29.5;
  BT.banner.BTvideo.vid.pause();
  TweenMax.to(BT.banner.BTvideo.vidPauseBtn, 0.1, {alpha:0});
  TweenMax.to(BT.banner.BTvideo.vidPlayBtn, 0.1, {alpha:1});

  //BT.banner.BTvideo.vidContainer.style.visibility = 'hidden';
  
  tlM.set('#Video-controls', {autoAlpha:0});
  
  /*
    if (BT.banner.finalframe.style.visibility  =='hidden'){
  	  BT.banner.finalframe.style.visibility  = 'visible';
  	  //tlM.to('#BT-CTA', 0.5, {autoAlpha:1, ease: Sine.easeIn});
  } else {
  	  BT.banner.finalframe.style.visibility  = 'hidden'
  }*/
	
  TweenMax.to(BT.banner.BTvideo.vidReplaySideBtn, 1, {alpha: 1});
  BT.banner.BTvideo.vidReplaySideBtn.style.pointerEvents = "auto";

}

/**
 * Relaunches the banner from the beginning.
 */
function replayBannerHandler(e) {
  Enabler.counter("Replay video 0", true);
  
  tlM.set('#Video-controls', {autoAlpha:0});
  
  TweenMax.to(BT.banner.BTvideo.vidUnmuteBtn, 0.1, {alpha:0});
  TweenMax.to(BT.banner.BTvideo.vidMuteBtn, 0.1, {alpha:1});
  TweenMax.to(BT.banner.BTvideo.vidPauseBtn, 0.1, {alpha:1});
  TweenMax.to(BT.banner.BTvideo.vidPlayBtn, 0.1, {alpha:0});

  /*
  if (BT.banner.finalframe.style.visibility  == 'visible'){
  	  BT.banner.finalframe.style.visibility  = 'hidden';	  
  }*/
  //TweenMax.to('#final-frame', 0.5, {autoAlpha:0});
  timeoutvideo = setTimeout(replayVideo, 0);
	
  TweenMax.to(BT.banner.BTvideo.vidReplaySideBtn, 1, {alpha: 0});
  BT.banner.BTvideo.vidReplaySideBtn.style.pointerEvents = "none";

}

function replayHandler(){ 

  BT.banner.BTvideo.vid.currentTime = 0;
  BT.banner.BTvideo.vid.play(); 
  
  tlM.set('#Video-controls', {autoAlpha:0});
  
  TweenMax.to(BT.banner.BTvideo.vidPauseBtn, 0.1, {alpha:1});
  TweenMax.to(BT.banner.BTvideo.vidPlayBtn, 0.1, {alpha:0});
   
}

function replayVideo(){
  TweenMax.to(BT.banner.BTvideo.vidContainer, 0.5, {autoAlpha:1});

  BT.banner.BTvideo.vid.currentTime = 0;
  BT.banner.BTvideo.vid.play();
  BT.banner.BTvideo.vid.volume = 1.0;  

  tlM.set('#Video-controls', {autoAlpha:0});
  
  TweenMax.to(BT.banner.BTvideo.vidUnmuteBtn, 0.1, {alpha:0});
  TweenMax.to(BT.banner.BTvideo.vidMuteBtn, 0.1, {alpha:1});
  TweenMax.to(BT.banner.BTvideo.vidPauseBtn, 0.1, {alpha:1});
  TweenMax.to(BT.banner.BTvideo.vidPlayBtn, 0.1, {alpha:0});
}

/**
 * Handler triggered when the video has finished playing.
 */
function videoEndHandler(e) {
  //BT.banner.BTvideo.vid.currentTime = 0;
  BT.banner.BTvideo.vid.pause();
  
  //BT.banner.BTvideo.vidContainer.style.visibility = 'hidden';
  /*
  if (BT.banner.finalframe.style.visibility  == 'hidden'){
  	  BT.banner.finalframe.style.visibility  = 'visible';	  
  }*/

  //TweenMax.to(BT.banner.BTvideo.vidContainer, 0.5, {autoAlpha:0});
  //TweenMax.set('#final-frame', {autoAlpha:1});
  TweenMax.to('#Video-controls', 0.5, {autoAlpha:0});        
	
  TweenMax.to(BT.banner.BTvideo.vidReplaySideBtn, 1, {alpha: 1});
  BT.banner.BTvideo.vidReplaySideBtn.style.pointerEvents = "auto";
  
  //tlM.to('#BT-CTA', 0.5, {autoAlpha:1, ease: Sine.easeIn});
  //TweenMax.to('#BT-CTA', 0.5, {scale: 1.1, repeat:3.0, force3D:false, yoyo:true, ease: Power1.easeInOut, delay: 1.5});
  
  //setTimeout(rolloverHandler, 3500);
  
  BT.isClick0 = true;
}

/**
 * Handler triggered when the video has timeUpdates.
 */
function videoTimeUpdateHandler(e) {
 var perc = BT.banner.BTvideo.vid.currentTime / BT.banner.BTvideo.vid.duration;
 BT.banner.BTvideo.vidProgressBar.style.width = Math.round(100*perc) + '%';
 
 
 	if (this.currentTime >= BT.banner.BTvideo.cue_point_1 && this.currentTime <= BT.banner.BTvideo.cue_point_2){
  		tlM.to('#Video-controls', 0.3, {autoAlpha:1, ease: Sine.easeIn});
	}

}

/**
 * Add video metrics to the HTML5 video elements by loading in video module, and assigning to videos.
 */
function addVideoTracking() {
  // Add in the video files.
  // These are 3 different codecs due to different browser specifications ; we recommend you have all 3 filetypes.
  var srcNode = document.createElement('source');
  //srcNode.setAttribute('type', 'video/webm');
  //srcNode.setAttribute('src', Enabler.getUrl('./video/BT-video-20s.webm'));
  //BT.banner.BTvideo.vid.appendChild(srcNode);

  srcNode = document.createElement('source');
  srcNode.setAttribute('type', 'video/mp4');
  srcNode.setAttribute('src', Enabler.getUrl('BT-video.mp4'));
  BT.banner.BTvideo.vid.appendChild(srcNode);

  BT.banner.BTvideo.vid.appendChild(srcNode);

  Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
    studio.video.Reporter.attach('Video Report BT Video', BT.banner.BTvideo.vid);
  }.bind(this));
}


/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);

 
 
 