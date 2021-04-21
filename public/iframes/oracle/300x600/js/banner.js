var Animation_tl, typewriter_tl, cursor_tl;
var cursorStartX, cursorStartY; 
var copy_SplitText, copy_Elements; 
var currentFrame = 0;
var totalFrames = copyArray.length;
var stageWidth = document.getElementById("container").offsetWidth;

var DomID = {};
// AUTOMATICALLY GENERATES VARS FOR DOM ELEMENTS. ID MUST MATCH.
DomID.createDomIDsFromDivs = function () {
    
    console.log("|| DomID: Create DOM Elements");

    var arrDivs = document.getElementsByTagName("div");
    var currDiv;
    var currID;
    for (currDiv = 0; currDiv < arrDivs.length; ++currDiv) {
        currID = arrDivs[currDiv].id;
        try {
            // ONLY CREATE IF DIV HAS AN ID
            if (currID)
                DomID[currID] = DomID.id(currID);
        } catch (err) {
            console.log(err);
        }
    }
}

DomID.id = function (ele) {
    return document.getElementById(ele);
}

function politeInit() {
  console.log("|| Preload: Init");

    // get initial cursor position
    cursorStartX = document.getElementById("cursor").getBoundingClientRect().left;
    cursorStartY = document.getElementById("cursor").getBoundingClientRect().top;


  DomID.createDomIDsFromDivs();
  preload = new createjs.LoadQueue(false);

    for (var i = 0; i < manifest.length; i++) {
        DomID[manifest[i].id].appendChild(dynamicImg(manifest[i].src));
    }

    preload.addEventListener("complete", handleManifastLoadComplete);
    preload.addEventListener("fileload", handleFileLoaded);
    preload.loadManifest(manifest);
}

dynamicImg = function (src) {
    var dImg = document.createElement("img");
    dImg.setAttribute("src", src);
    return dImg;
}

function handleFileLoaded(event) {
    console.log("|| Preload: File Complete");
 }

function handleManifastLoadComplete(event) {
      console.log("|| Preload: Manifest Complete");
      init();
}

function init() {
    console.log('|| Main: Init');
    setSources();
    addEventListeners();
    setupAnimations();
    
    tl_reset();
    tl_play(); 
}

function setSources() {
    console.log('|| Main: Set Content Sources');
    
    DomID.container.style.backgroundColor = backgroundColor;
}

function addEventListeners() {
    console.log("|| Main: Add Event Listeners")
    DomID.btn_exit.addEventListener('click', bgExitHandler, false);
}

function setupAnimations() {
    
  console.log("|| Animation: Create Timelines") 
    
  // Cursor Timeline
  cursor_tl = new TimelineMax({paused:false, repeat:-1});
  cursor_tl.from( DomID.cursor, .2, { opacity: 0 })
  cursor_tl.to( DomID.cursor, .2, { opacity: 0 })
  
  // Main Timeline
  Animation_tl = new TimelineMax({paused:true, repeat:0, repeatDelay:3});
  Animation_tl.timeScale(1);

  Animation_tl.addLabel( "start")
  //START ------------------------------------------------------------------
  .set( DomID.container, { autoAlpha: 1 } , "start" )
  .to( DomID.logo, 1, { autoAlpha: 1, onComplete: function() {
      Animation_tl.pause();
      createTypewriterFrame();
  } } , "start" )
  
  //FRAME END------------------------------------------------------------------
  Animation_tl.addLabel("frameEnd")
  .to( DomID.cursor, 0.2, { autoAlpha: 0 } , "frameEnd" )
  if(redlines==1){
    Animation_tl.from( DomID.endCopyHolder01, 0.75, { width: 0, ease: Power1.easeInOut } , "frameEnd+=.5" )
      .to( DomID.highlightHolder01, 0.75, { x: stageWidth, ease: Power1.easeInOut } , "frameEnd+=1.75" )
      .to( DomID.highlight01, 0.75, { x: -stageWidth, ease: Power1.easeInOut, onComplete: function() {
                DomID.cursor.style.top = cursorEndPosTop+"px";
                DomID.cursor.style.left = cursorEndPosLeft+"px";
                TweenMax.set( DomID.cursor, { autoAlpha: 1 } );
       } } , "frameEnd+=1.75" )
       .to( [DomID.cta, DomID.ctaArrow, DomID.replayImg], 0.75, { autoAlpha: 1, ease: Power1.easeInOut, onComplete:enableReplay } )
       .to( DomID.ctaArrow, 0.25, { x: 2, ease: Power1.easeOut } )
       .to( DomID.ctaArrow, 0.25, { x: 0, ease: Power1.easeOut } )
       .to( DomID.cursor, 0.25, { opacity: 1, onStart: function() {
           cursor_tl.pause();
       } }, "frameEnd+=5" )  
  }else if(redlines==2){
  // Highlight Line 1
  Animation_tl.from( DomID.endCopyHolder01, 0.75, { width: 0, ease: Power1.easeInOut } , "frameEnd" )
  .to( DomID.highlightHolder01, 0.75, { x: stageWidth, ease: Power1.easeInOut } , "frameEnd+=1.25" )
  .to( DomID.highlight01, 0.75, { x: -stageWidth, ease: Power1.easeInOut} , "frameEnd+=1.25" )
  .from( DomID.endCopyHolder02, 0.75, { width: 0, ease: Power1.easeInOut } , "frameEnd+=.5" )
  .to( DomID.highlightHolder02, 0.75, { x: stageWidth, ease: Power1.easeInOut } , "frameEnd+=1.75" )
  .to( DomID.highlight02, 0.75, { x: -stageWidth, ease: Power1.easeInOut, onComplete: function() {
            DomID.cursor.style.top = cursorEndPosTop+"px";
            DomID.cursor.style.left = cursorEndPosLeft+"px";
            TweenMax.set( DomID.cursor, { autoAlpha: 1 } );
   } } , "frameEnd+=1.75" )
  .to( [DomID.cta, DomID.ctaArrow, DomID.replayImg], 0.75, { autoAlpha: 1, ease: Power1.easeInOut, onComplete:enableReplay } )
  .to( DomID.ctaArrow, 0.25, { x: 4, ease: Power1.easeOut } )
  .to( DomID.ctaArrow, 0.25, { x: 0, ease: Power1.easeOut } )
  .to( DomID.cursor, 0.25, { opacity: 1, onStart: function() {
      cursor_tl.pause();
  } }, "frameEnd+=5" )
}else if(redlines==3){
  // Highlight Line 1
  Animation_tl.from( DomID.endCopyHolder01, 0.75, { width: 0, ease: Power1.easeInOut } , "frameEnd" )
  .to( DomID.highlightHolder01, 0.75, { x: stageWidth, ease: Power1.easeInOut } , "frameEnd+=1.25" )
  .to( DomID.highlight01, 0.75, { x: -stageWidth, ease: Power1.easeInOut} , "frameEnd+=1.25" )
  // Highlight Line 2
  .from( DomID.endCopyHolder02, 0.75, { width: 0, ease: Power1.easeInOut } , "frameEnd+=.25" )
  .to( DomID.highlightHolder02, 0.75, { x: stageWidth, ease: Power1.easeInOut } , "frameEnd+=1.5" )
  .to( DomID.highlight02, 0.75, { x: -stageWidth, ease: Power1.easeInOut} , "frameEnd+=1.5" )
   // Highlight Line 3
  .from( DomID.endCopyHolder03, 0.75, { width: 0, ease: Power1.easeInOut } , "frameEnd+=.5" )
  .to( DomID.highlightHolder03, 0.75, { x: stageWidth, ease: Power1.easeInOut } , "frameEnd+=1.75" )
  .to( DomID.highlight03, 0.75, { x: -stageWidth, ease: Power1.easeInOut, onComplete: function() {
            DomID.cursor.style.top = cursorEndPosTop+"px";
            DomID.cursor.style.left = cursorEndPosLeft+"px";
            TweenMax.set( DomID.cursor, { autoAlpha: 1 } );
   } } , "frameEnd+=1.75" )
  .to( [DomID.cta, DomID.ctaArrow, DomID.replayImg], 0.75, { autoAlpha: 1, ease: Power1.easeInOut, onComplete:enableReplay } )
  .to( DomID.ctaArrow, 0.25, { x: 4, ease: Power1.easeOut } )
  .to( DomID.ctaArrow, 0.25, { x: 0, ease: Power1.easeOut } )
  .to( DomID.cursor, 0.25, { opacity: 1, onStart: function() {
      cursor_tl.pause();
  } }, "frameEnd+=5" )
}else if(redlines==4){
    // Highlight Line 1
    Animation_tl.from( DomID.endCopyHolder01, 0.75, { width: 0, ease: Power1.easeInOut } , "frameEnd" )
    .to( DomID.highlightHolder01, 0.75, { x: stageWidth, ease: Power1.easeInOut } , "frameEnd+=1.25" )
    .to( DomID.highlight01, 0.75, { x: -stageWidth, ease: Power1.easeInOut} , "frameEnd+=1.25" )
    // Highlight Line 2
    .from( DomID.endCopyHolder02, 0.75, { width: 0, ease: Power1.easeInOut } , "frameEnd+=.25" )
    .to( DomID.highlightHolder02, 0.75, { x: stageWidth, ease: Power1.easeInOut } , "frameEnd+=1.5" )
    .to( DomID.highlight02, 0.75, { x: -stageWidth, ease: Power1.easeInOut} , "frameEnd+=1.5" )
    // Highlight Line 3
    .from( DomID.endCopyHolder03, 0.75, { width: 0, ease: Power1.easeInOut } , "frameEnd+=.5" )
    .to( DomID.highlightHolder03, 0.75, { x: stageWidth, ease: Power1.easeInOut } , "frameEnd+=1.75" )
    .to( DomID.highlight03, 0.75, { x: -stageWidth, ease: Power1.easeInOut} , "frameEnd+=1.75" )
     // Highlight Line 4
    .from( DomID.endCopyHolder04, 0.75, { width: 0, ease: Power1.easeInOut } , "frameEnd+=.75" )
    .to( DomID.highlightHolder04, 0.75, { x: stageWidth, ease: Power1.easeInOut } , "frameEnd+=2" )
    .to( DomID.highlight04, 0.75, { x: -stageWidth, ease: Power1.easeInOut, onComplete: function() {
              DomID.cursor.style.top = cursorEndPosTop+"px";
              DomID.cursor.style.left = cursorEndPosLeft+"px";
              TweenMax.set( DomID.cursor, { autoAlpha: 1 } );
     } } , "frameEnd+=2" )
    .to( [DomID.cta, DomID.ctaArrow, DomID.replayImg], 0.75, { autoAlpha: 1, ease: Power1.easeInOut, onComplete:enableReplay } )
    .to( DomID.ctaArrow, 0.25, { x: 4, ease: Power1.easeOut } )
    .to( DomID.ctaArrow, 0.25, { x: 0, ease: Power1.easeOut } )
    .to( DomID.cursor, 0.25, { opacity: 1, onStart: function() {
        cursor_tl.pause();
    } }, "frameEnd+=5.25" )
  }

  Animation_tl.eventCallback("onComplete", tl_complete, null, this);

  console.log("|| Animation: Timeline Duration: " + Math.floor(Animation_tl.duration()));

}

function createTypewriterFrame() {
    console.log("|| Animation: Typewriter Frame: " + (currentFrame+1));
    if (currentFrame < totalFrames) {
        createSplitText(currentFrame);
    }
}

function createSplitText(num) {

  DomID.copy.innerHTML = copyArray[num];
  var typeSpeed = .02; 
  var spaceCount = (copyArray[num].split(" ").length - 1)*3;
  var charCount = copyArray[num].length*typeSpeed;
  
  // Split Text
  copy_SplitText = new SplitText(DomID.copy, {type:"chars"}),
  copy_Elements = copy_SplitText.chars;
    
  typewriter_tl = new TimelineMax({paused:false, repeat:0});
  typewriter_tl.addLabel( "start")
  .set( [DomID.copyHolder,DomID.cursor], { autoAlpha: 1} , "start" )
  .staggerFrom(copy_Elements, .2, {autoAlpha:0, ease: SteppedEase.config(1), onStart: function() {
      placeCursor(this);
  }}, typeSpeed, "start")
  
  .to( DomID.logo, 1, { autoAlpha: 1, onComplete: function() {
      currentFrame++;
      if (currentFrame == totalFrames) {
            setTimeout(function(){
                Animation_tl.gotoAndPlay("frameEnd");
                typewriter_tl.pause()
            },eDelay*1000)
      }
  } } , "start" )
  
  typewriter_tl.addLabel( "copyOut", "+="+frameDelay)  
  .set( [DomID.copyHolder, DomID.cursor], { autoAlpha: 0, ease:Power3.easeInOut, onComplete: function() {
      createTypewriterFrame();
  } } , "copyOut" )
  
}

function placeCursor(targetLetter){
  var thisLetter = targetLetter.target //target of the current tween
  var bodyRect = document.body.getBoundingClientRect(),
    elemRect = thisLetter.getBoundingClientRect(),
    offsetY   = elemRect.top - bodyRect.top,
    offsetX   = elemRect.left - bodyRect.left,
    offsetWidth = thisLetter.offsetWidth;
    DomID.cursor.style.top = offsetY+2+"px";
    DomID.cursor.style.left = offsetX+offsetWidth+3+"px";
}

function tl_reset () {
  console.log("|| Animation: Reset Elements")
  Animation_tl.kill();
  Animation_tl.gotoAndStop(0);
  // Hide Everything
  for (var i = 0; i < manifest.length; i++) {
    TweenMax.set(DomID[manifest[i].id], { autoAlpha: 0, x: 0 } );
  }
  
  DomID.container.style.visibility = "visible";
  //TweenMax.set([DomID.endCopyHolder, DomID.endcopy, DomID.highlight], {autoAlpha:1}); 
  
  switch(redlines){
    case 1 : console.log("red highlight 1") 
        TweenMax.set([
            DomID.endCopyHolder01, DomID.endcopy01, DomID.highlight01
        ], {autoAlpha:1}); 
    break;
    case 2 : console.log("red highlight 2") 
        TweenMax.set([
            DomID.endCopyHolder01, DomID.endCopyHolder02,
            DomID.endcopy01, DomID.endcopy02, DomID.highlight01, DomID.highlight02
        ], {autoAlpha:1}); 
    break;    
    case 3 : console.log("red highlight 3")  
        TweenMax.set([
                DomID.endCopyHolder01, DomID.endCopyHolder02, DomID.endCopyHolder03,
                DomID.endcopy01, DomID.endcopy02, DomID.endcopy03, 
                DomID.highlight01, DomID.highlight02, DomID.highlight03
        ], {autoAlpha:1}); 
    break;
    case 4 : console.log("red highlight 4")  
        TweenMax.set([
            DomID.endCopyHolder01, DomID.endCopyHolder02, DomID.endCopyHolder03, DomID.endCopyHolder04,
            DomID.endcopy01, DomID.endcopy02, DomID.endcopy03, DomID.endcopy04,
            DomID.highlight01, DomID.highlight02, DomID.highlight03, DomID.highlight04
        ], {autoAlpha:1}); 
    break;      
  }
}

function tl_play() {
    console.log("|| Animation: Play Main Timeline")
    Animation_tl.gotoAndPlay(0);
}

function tl_complete() {
    console.log("|| Animation: Complete")
    Animation_tl.pause(); 
}

function bgExitHandler(e) {
    console.log("|| Main: Clickthrough");
    window.open(window.clickTag);
}


// Replay functions
function enableReplay(){
    DomID.replay_btn.style.display = "block";
   DomID.replay_btn.addEventListener("click", resetBanner); 
}


function resetBanner(e){
    DomID.replay_btn.removeEventListener("click", resetBanner); 
    TweenMax.set([DomID.replayImg], {autoAlpha:0});
    DomID.replay_btn.style.display = "none";
    currentFrame = 0;
    DomID.copy.innerHTML = "";
    DomID.cursor.style.opacity = 0;
    tl_reset();
    TweenMax.set(DomID.cursor, {css:{left:cursorStartX, top:cursorStartY}});
    cursor_tl.play();
    tl_play(); 
}

window.addEventListener('load', politeInit);
