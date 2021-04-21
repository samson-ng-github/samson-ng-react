// variables:
var canvas, stage, spriteSheet, spritesheetHolder, middleContainer,movieClip1,movieClip2,movieClip3,movieSetHolder,glean,glean1, bottomContainer, topContainer, frame1_Copy1,frame2_Copy1,frame2_Copy,frame3_Copy,frame4_Copy,frame5_Copy1,frame5_Copy2, tx, sky_logo,skylogoWhite,skyBoxset_logo,peelShape1,peelShape2,cta, movieSet;
var separationLegalTop = 40;
var data;
var ctx;
var fps = 24;
var loader;
var loadedImages = {};
var manifest = [];
var devDynamicContent = {};

// **** init banner
function init(){
    //console.log('init');
    if (!Enabler.isInitialized()) {
              Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitialized);
        } else {
               enablerInitialized();
        }

        function enablerInitialized() {

            Enabler.setProfileId(1094625);

            devDynamicContent.Feed_728x90 = [{}];
            devDynamicContent.Feed_728x90[0]._id = 0;
            devDynamicContent.Feed_728x90[0].id = 1;
            devDynamicContent.Feed_728x90[0].reporting_label = "Reporting label";
            devDynamicContent.Feed_728x90[0].startDate = {};
            devDynamicContent.Feed_728x90[0].startDate.RawValue = "";
            devDynamicContent.Feed_728x90[0].startDate.UtcValue = 0;
            devDynamicContent.Feed_728x90[0].endDate = {};
            devDynamicContent.Feed_728x90[0].endDate.RawValue = "";
            devDynamicContent.Feed_728x90[0].endDate.UtcValue = 0;
            devDynamicContent.Feed_728x90[0].CTA = "Find out\nmore";
            devDynamicContent.Feed_728x90[0].content = {
                "spritesheet.jpg":{
                    "Type":"file",
                    "Url":"assets/spritesheet.jpg"
                },
                "frame1_copy1.png":{
                    "Type":"file",
                    "Url":"assets/frame1_copy1.png"
                },
                "frame1_copy2.png":{
                    "Type":"file",
                    "Url":"assets/frame1_copy2.png"
                },
                 "frame2_copy.png":{
                    "Type":"file",
                    "Url":"assets/frame2_copy.png"
                },
                "frame3_copy.png":{
                    "Type":"file",
                    "Url":"assets/frame3_copy.png"
                },
                "frame4_copy.png":{
                    "Type":"file",
                    "Url":"assets/frame4_copy.png"
                },
                "frame5_copy1.png":{
                    "Type":"file",
                    "Url":"assets/frame5_copy1.png"
                },
                "frame5_copy2.png":{
                    "Type":"file",
                    "Url":"assets/frame5_copy2.png"
                },
                "tx.png":{
                    "Type":"file",
                    "Url":"assets/tx.png"
                },
                "sky_logo.png":{
                    "Type":"file",
                    "Url":"assets/sky_logo.png"
                },
                "skylogoWhite.png":{
                    "Type":"file",
                    "Url":"assets/skylogoWhite.png"
                },
                "skyBoxset_logo.png":{
                    "Type":"file",
                    "Url":"assets/skyBoxset_logo.png"
                },

                 "peelShape.png":{
                    "Type":"file",
                    "Url":"assets/peelShape.png"
                },
                "movieSet.png":{
                    "Type":"file",
                    "Url":"assets/movieSet.png"
                },

                "BG_f1.jpg":{
                    "Type":"file",
                    "Url":"assets/BG_f1.jpg"
                },
                "BG_f2.jpg":{
                    "Type":"file",
                    "Url":"assets/BG_f2.jpg"
                },
                "BG_f4.jpg":{
                    "Type":"file",
                    "Url":"assets/BG_f4.jpg"
                },
                "BG_LD.jpg":{
                    "Type":"file",
                    "Url":"assets/BG_LD.jpg"
                },
                "glean.png":{
                    "Type":"file",
                    "Url":"assets/glean.png"
                }
            };
            devDynamicContent.Feed_728x90[0].legalsButton = "Click for legals";
            devDynamicContent.Feed_728x90[0].legalsCopy = "<strong>Lorem</strong> Ipsum";
            devDynamicContent.Feed_728x90[0].clickthrough = "http://www.sky.com/shop/sky-bundles/";
            devDynamicContent.Feed_728x90[0].frame4Option = true;
            devDynamicContent.Feed_728x90[0].DEFAULT = true;
            Enabler.setDevDynamicContent(devDynamicContent);

            if (Enabler.isPageLoaded()) {
                pageLoadedHandler();
            } else {
                 Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
            }

            data = dynamicContent.Feed_728x90[0];
        }
}

function pageLoadedHandler() {

     head.load(
       "https://s0.2mdn.net/ads/richmedia/studio/41060787/createjs_V_2015.11.26.min.js",
       "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js",
     "sheen.js",
     "legals.js",
     startLoading);
}

// **** load external assets:
function startLoading(){
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    ctx = stage.canvas.getContext('2d');

    stage.update();
    createjs.Ticker.setFPS(fps);
    TweenLite.ticker.fps(22);
    TweenLite.ticker.addEventListener("tick",function(){stage.update();});
    Enabler.counter("BANNER_STARTED");
    prepAssets();

}

function prepAssets(){

    document.getElementById('exitButton').addEventListener('click',onCtaClick);

    var manifest = [];
     // add all elements from the assets libs:
     console.log(data.content)
    for (var key in dynamicContent.Feed_728x90[0].content){
      console.log( dynamicContent.Feed_728x90[0].content[key]['Url']);

        var obj = {};
        obj.id = key;
        obj.src = dynamicContent.Feed_728x90[0].content[key]['Url'];
        manifest.push(obj);
    }

    loader = new createjs.LoadQueue(true,null,true);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(manifest);
}

function handleFileLoad(evt) {
    console.log(evt.item);
    if (evt.item.type == "image") { loadedImages[evt.item.id] = evt.result; }
}


function handleComplete(evt) {
  //adding elements to the canvas
    topContainer = new createjs.Container();
    bottomContainer = new createjs.Container();
    middleContainer = new createjs.Container();

    movieClip1 = new createjs.Container();
    movieClip2 = new createjs.Container();
    movieClip3 = new createjs.Container();
    movieSetHolder = new createjs.Container();

    stage.addChild(bottomContainer);
    stage.addChild(middleContainer);
    stage.addChild(topContainer);

    middleContainer.addChild(movieClip3);
    middleContainer.addChild(movieClip2);
    middleContainer.addChild(movieClip1);

    document.getElementById('preloader').style.visibility = 'hidden';
    console.log(data.content);
        spriteSheet = new createjs.SpriteSheet({
            framerate:24,
            "images": [loadedImages['spritesheet.jpg']],
            "frames": {
              "height": 90,
              "count": 180,
              "width": 728,
              "regX":0,
              "regY":0
            },

            "animations": {
              "anim_In_Fr1": [0, 179,'anim_in_Fr1_Stop'],
              "anim_in_Fr1_Stop": [179],

            }
          });

    sky_logo=new createjs.Bitmap(loadedImages['sky_logo.png']);

    skylogoWhite=new createjs.Bitmap(loadedImages['skylogoWhite.png']);
    skylogoWhite.alpha=0;

    skyBoxset_logo=new createjs.Bitmap(loadedImages['skyBoxset_logo.png']);

    topContainer.addChild(sky_logo);
    topContainer.addChild(skylogoWhite);
    topContainer.addChild(skyBoxset_logo);

/*Frame1*/
    BG_f1 = new createjs.Bitmap(loadedImages['BG_f1.jpg']);
    BG_f1.alpha = 1;
    BG_f1.x = 0;
    BG_f1.y = 0;
    movieClip1.addChild(BG_f1);

    frame1_Copy1 = new createjs.Bitmap(loadedImages['frame1_copy1.png']);
    frame1_Copy1.alpha = 1;
    frame1_Copy1.regX = canvas.width * 0.5;
    frame1_Copy1.regY = canvas.height * 0.5;
    frame1_Copy1.x = canvas.width * 0.5;
    frame1_Copy1.y = canvas.height * 0.5;
    frame1_Copy1.scaleX = frame1_Copy1.scaleY = .8;
    movieClip1.addChild(frame1_Copy1);

    frame1_Copy2 = new createjs.Bitmap(loadedImages['frame1_copy2.png']);
    frame1_Copy2.alpha = 1;
    frame1_Copy2.regX = canvas.width * 0.5;
    frame1_Copy2.regY = canvas.height * 0.5;
    frame1_Copy2.x = canvas.width * 0.5;
    frame1_Copy2.y = canvas.height * 0.5;
    frame1_Copy2.scaleX = frame1_Copy2.scaleY = .8;

    movieClip1.addChild(frame1_Copy2);

    peelShape1= new createjs.Bitmap(loadedImages['peelShape.png']);
    peelShape1.alpha = 1;
    peelShape1.x=canvas.width;
    movieClip1.addChild(peelShape1);


/*Frame2*/

    spritesheetHolder = new createjs.Sprite(spriteSheet);
    spritesheetHolder.alpha = 1;
    movieClip2.addChild(spritesheetHolder);
    movieClip2.x=canvas.width;

    tx = new createjs.Bitmap(loadedImages['tx.png']);
    movieClip2.addChild(tx);
    tx.alpha = 1;

    peelShape2= new createjs.Bitmap(loadedImages['peelShape.png']);
    movieClip2.addChild(peelShape2);
    peelShape2.alpha = 1;
    peelShape2.x=canvas.width;

    frame2_Copy = new createjs.Bitmap(loadedImages['frame2_copy.png']);
    frame2_Copy.alpha = 1;
    movieClip2.addChild(frame2_Copy);

    frame3_Copy = new createjs.Bitmap(loadedImages['frame3_copy.png']);
    frame3_Copy.alpha = 0;
    movieClip2.addChild(frame3_Copy);

/*Frame4*/


    BG_f4 = new createjs.Bitmap(loadedImages['BG_f4.jpg']);
    BG_f4.alpha = 1;
    BG_f4.x = 0;
    BG_f4.y = 0;
    movieClip3.addChild(BG_f4);
    movieClip3.x=canvas.width - 147;

    BG_endFrame = new createjs.Bitmap(loadedImages['BG_LD.jpg']);
    BG_endFrame.alpha = 0;
    BG_endFrame.x = 0;
    BG_endFrame.y = 0;
    movieClip3.addChild(BG_endFrame);

    frame4_Copy = new createjs.Bitmap(loadedImages['frame4_copy.png']);
    frame4_Copy.alpha = 1;
    movieClip3.addChild(frame4_Copy);


    movieSet = new createjs.Bitmap(loadedImages['movieSet.png']);
    movieSet.alpha = 1;
    movieSet.regX = 91;
    movieSet.regY = 543;
    movieSet.x=236;
    movieSet.y=483;
    movieSetHolder.addChild(movieSet);

    frame5_Copy1 = new createjs.Bitmap(loadedImages['frame5_copy1.png']);
    frame5_Copy1.alpha = 1;
    frame5_Copy1.regX = canvas.width * 0.5;
    frame5_Copy1.regY = canvas.height * 0.5;
    frame5_Copy1.x=236;
    frame5_Copy1.y=483;
    frame5_Copy1.scaleX = frame5_Copy1.scaleY = .467;
    movieSetHolder.addChild(frame5_Copy1);

    frame5_Copy2 = new createjs.Bitmap(loadedImages['frame5_copy2.png']);
    frame5_Copy2.alpha = 1;
    frame5_Copy2.regX = canvas.width * 0.5;
    frame5_Copy2.regY = canvas.height * 0.5;
    frame5_Copy2.x=236;
    frame5_Copy2.y=483;
    frame5_Copy2.scaleX = frame5_Copy2.scaleY = .467;
    movieSetHolder.addChild(frame5_Copy2);

    sheenCopy = new createjs.Bitmap(loadedImages['frame5_copy2.png']);
    sheenCopy.alpha = 0;
    topContainer.addChild(sheenCopy);

    movieClip3.addChild(movieSetHolder);
    frame_1();

    stage.update();

}

function frame_1()
{
    TweenLite.to([frame1_Copy1,frame1_Copy2], 2, {scaleX:1,scaleY:1});
    createLegals();

    TweenLite.delayedCall(1.7,function(){setSheen(frame1_Copy2, 1.5)})

    TweenLite.delayedCall(2,frame_2)

}
//
function frame_2()
{
    TweenLite.to(peelShape1, .1, {delay:0.3,x:canvas.width - 15,  ease:Cubic.easeIn, overwrite:0});
    TweenLite.to(movieClip1, 1.3, {delay:0.3,x:-canvas.width + 15,  ease:Cubic.easeIn, overwrite:0});
    TweenLite.to(movieClip2, 1.3, {delay:0.3,x:0,  ease:Cubic.easeIn, overwrite:0});

    TweenLite.delayedCall(1.5,function(){spritesheetHolder.gotoAndPlay("anim_In_Fr1")});
    TweenLite.delayedCall(2.5,frame_3);
}

function frame_3()
{
    TweenLite.to(frame2_Copy, 0.5, {delay:.5,alpha:0, ease:Cubic.easeOut, overwrite:0});
    TweenLite.to(frame3_Copy, 0.5, {delay:1,alpha:1, ease:Cubic.easeOut, overwrite:0});

    TweenLite.to([frame3_Copy, sky_logo], 0, {delay:4,alpha:0, ease:Cubic.easeOut});
    TweenLite.to(skylogoWhite, 0, {delay:4,alpha:1});

    TweenLite.to(movieClip1, 0.2, {delay:4,alpha:0,x:-canvas.width,ease:Cubic.easeOut, overwrite:0,onStart:function(){
        TweenLite.to(skylogoWhite, 0, {delay:1.9,alpha:0});
        TweenLite.to(sky_logo, 0, {delay:1.9,alpha:1});
    }});

     TweenLite.delayedCall(5.4,frame_4);
}

function frame_4()
{
    TweenLite.to(movieSet, 1, {delay:0.3, alpha: 1, ease:Cubic.easeOut, overwrite:0});
    TweenLite.to(movieClip2, 1, {delay:0.3,x: -canvas.width + 145, ease:Cubic.easeOut, overwrite:0});
    TweenLite.to(tx, 1, {delay:0.3, alpha: 0, ease:Cubic.easeOut, overwrite:0});
    TweenLite.to(movieClip3, 1, {delay:0.3,x:0, ease:Cubic.easeOut, overwrite:0});
    TweenLite.to(peelShape2, .2, {delay:0.3,x:canvas.width - 15,ease:Cubic.easeOut, overwrite:0});

    TweenLite.delayedCall(1.5,function(){
         TweenLite.to(movieSetHolder, 3, {y:-438,  ease:Quad.easeOut, overwrite:0});
         TweenLite.to(movieSetHolder, 0.5, {delay:3, y:-438,  ease:Quad.easeIn, overwrite:0});
    })
   TweenLite.delayedCall(6.5,frame_5);
}

function frame_5()
{
    TweenLite.to(frame4_Copy, .3, {alpha:0,  ease:Cubic.easeOut, overwrite:0});
    TweenLite.to(movieClip2, .75, {x:-canvas.width,  ease:Cubic.easeIn, overwrite:0});
    TweenLite.to(BG_f4, .75, {x:canvas.width,  ease:Cubic.easeIn, overwrite:0});

    TweenLite.to(movieSet, 1.5, {delay:0.5, scaleX:2.14, scaleY:2.14, x: canvas.width * 0.5, ease:Back.easeOut.config(2), overwrite:0});
    TweenLite.to([frame5_Copy1, frame5_Copy2], 1.5, {delay:0.5, scaleX: 1, scaleY:1, x: canvas.width * 0.5, ease:Back.easeOut.config(2), overwrite:0,onStart:function(){
         TweenLite.to(movieSet, .25, {delay:1,alpha:0,overwrite:0});
    }});

    TweenLite.to(BG_endFrame,.5,{delay:1.5, alpha:1,overwrite:0});
    TweenLite.to(sheenCopy, 0.1, {delay:2, alpha:0.1});
    TweenLite.delayedCall(3, function(){setSheen(sheenCopy, 2.5)})

    //TweenLite.to(movieClip2, 0.2, {delay:3.5,alpha:0,y:-canvas.height,ease:Cubic.easeOut, overwrite:0});

    var ctaGradient = new SkyGradient(["#e51c25","#3c0e44"],[0,0.700,0.95,1], [[0, 0],[1, 0]]);
    var fontName="";
    if(window.ActiveXObject || "ActiveXObject" in window)
    {
        fontName="16px SkyTextMedium"
    }
    else
        {
           fontName= "16px SkyTextRegular"
        }
    cta = new SkyCta(dynamicContent.Feed_728x90[0].CTA, fontName, false, ctaGradient, "rgba(255,255,255,0.6)" );
    cta.x = 585;
    cta.y = 45;
    cta.alpha = 0;
    stage.addChild(cta);


    glean = new createjs.Bitmap(loadedImages['glean.png']);
    glean.alpha = 0;
    glean.x = cta.x - 31;
    glean.y = cta.y - 33;
    stage.addChild(glean);

    glean1 = new createjs.Bitmap(loadedImages['glean.png']);
    glean1.alpha = 0;
    glean1.x = cta.x + 4;
    glean1.y = cta.y + 21;
    stage.addChild(glean1);

    stage.update();

     TweenLite.to(cta, .5, {delay:1.75,alpha:1, ease:Linear.easeOut, onComplete:function(){TweenLite.delayedCall(.5,
     function(){
        TweenLite.to(glean, .2, {alpha:1});
        TweenLite.to(glean, 1, {x:'+=35'});
        TweenLite.to(glean1, .2, {alpha:1});
        TweenLite.to(glean1, 1, {x:'-=35',onStart:function(){
             TweenLite.to([glean1,glean], .2, {delay:.75,alpha:0});
        }});

        //cta.playGlint();

    })}});

}

// EXIT:
function onCtaClick(){
     Enabler.exit('clickThrough', dynamicContent.Feed_728x90[0].clickthrough);
}

// LEGALS:
function setLegals(){
    // CONTAINER:
    this.container = document.getElementById('legalsContainer');
     document.getElementById("legalsContainer").style.zIndex = "900";
    // LEGALS BUTTON:
    this.container.innerHTML+="<div id='legalbtn' class='clicklegals'>"+dynamicContent.Feed_728x90[0].legalsButton+"</div>";
    // LEGALS COPY:
    this.container.innerHTML +="<div id='rollovercontent' class='legalscopy'>"+dynamicContent.Feed_728x90[0].legalsCopy+"</div>"

    this.container.innerHTML+="<div id='closeBtn' class='legalsClose'></div>"
    document.getElementById('legalbtn').style["top"] = '0px';
    document.getElementById('rollovercontent').style["top"] = -window.innerHeight+'px';

    document.getElementById('closeBtn').style["top"] = -window.innerHeight+'px';

    document.getElementById('legalbtn').style['text-align'] ='right';

    document.getElementById('legalbtn').addEventListener('click',onLegalsClick);
    document.getElementById('closeBtn').addEventListener('click',onLegalsClose);

}

onLegalsClick = function(){
    Enabler.counter('LegalsClicked')
    document.getElementById("borderDiv").style.zIndex = "900";
    TweenLite.to('#rollovercontent', .5, {ease:Cubic.easeInOut, top:0});
    TweenLite.to('#closeBtn', .5, {ease:Cubic.easeInOut, top: 5, right: 5});
}

onLegalsClose = function(){
    TweenLite.to('#rollovercontent', .5, {ease:Cubic.easeInOut, top:-window.innerHeight, onComplete:function(){ document.getElementById("borderDiv").style.zIndex = "500";}});
    TweenLite.to('#closeBtn', .5, {ease:Cubic.easeInOut, top:-window.innerHeight});
}

function SkyGradient(gradColourArray, gradRatioArray, gradRotationMatrix)
{
    console.log("SKY_GRADIANT");
    this.colours = gradColourArray;
    this.ratios = gradRatioArray;
    this.matrix = gradRotationMatrix;
}

function SkyCta(createjsText, font, double, gradient, glintColour) {
    console.log("SKY_CTA");
    var container = new createjs.Container(),
        backgroundGrad = new createjs.Shape(),
        highlightGrad = new createjs.Shape(),
        glint = new createjs.Shape(),
        textField = new createjs.Text(),
        star = new createjs.Shape(),
        styleIndex = 0;

    createjsText = createjsText.replace("\\n", "\n");

    if (double) {
        styleIndex = 1;
    }

    if (gradient === null || gradient === undefined) {
        gradient = new SkyGradient(["#ed1a43", "#f58120"], [0, 1], [
            [0, 0],
            [1, 1]
        ]);
    }

    if (glintColour === null || glintColour === undefined) {
        glintColour = "rgba(255,255,255,0.6)"
    }

    var backgroundGradPath = ["Akuj+IJdAAQBMAAAABLIAAFlQAABNhMAAIpdAAQhMAAAAhNIAAllQAAhLBMAAg",
        "An8CRQhLgBAAhKIAAiKQAAhMBLABIP5AAQBMgBAABMIAACKQAABKhMABg"
    ];
    var highlightGradPath = ["AlfACIgbgQQgBgxAegSQAQgKAfABIJdAAQAoACAPALQAVATABA0IgRAIQiUBZjSAAQjQAAiUhZg",
        "An8CRQhLgBAAhKIAAiKQAAhMBLABIP5AAQBMgBAABMIAACKQAABKhMABg"
    ];

    var styling = [{
        width: 129,
        height: 30,
        gradHeight: 14
    }, {
        width: 129,
        height: 32,
        gradHeight: 23
    }];

    var x1 = gradient.matrix[0][0] * styling[styleIndex].width - (styling[styleIndex].width * 0.5),
        y1 = gradient.matrix[0][1] * styling[styleIndex].height - (styling[styleIndex].height * 2.5),
        x2 = gradient.matrix[1][0] * styling[styleIndex].width - (styling[styleIndex].width * 0.5),
        y2 = gradient.matrix[1][1] * styling[styleIndex].height - (styling[styleIndex].height * 2.5);

    backgroundGrad.graphics.lf(gradient.colours, gradient.ratios, x1, y1, x2+25, y2).ss(1).s("rgba(255,255,255,1)")
        .p(backgroundGradPath[styleIndex]).cp().es().ef();
    //backgroundGrad.setBounds(0, 0, styling[styleIndex].width - 10, styling[styleIndex].height);
    backgroundGrad.shadow = new createjs.Shadow("rgba(-156,-255,-255,.3)", 1, 1, 8);

    highlightGrad.graphics.lf(["rgba(255,255,255,0.3)", "rgba(255,255,255,0.3)"], [1, 1],0, 0, 0, 1)
        .p(highlightGradPath[styleIndex]).cp().ef();
    highlightGrad.y=-16;
   // highlightGrad.setBounds(0, 0, styling[styleIndex].width, styling[styleIndex].gradHeight);

    textField.text = createjsText;
    textField.font = font;
    textField.color = "#ffffff";
    textField.letterSpacing="1";
    textField.textAlign = "center";
    textField.y="0.5";
    //textField.x="-1";


    //textField.shadow = new createjs.Shadow("rgba(0,0,0,0.4)", 0, 0, 5);
    // textField.y -= 2 + textField.getBounds().height * 0.5
    var nAgt = window.navigator.userAgent;
    var verOffset;


    if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
        var xbrowserName = "Firefox";
        console.log(textField.y);
        textField.y -=  textField.getBounds().height * 0.5
    } else {
        textField.y -= 2 + textField.getBounds().height * 0.5
    }

    star.graphics.f("rgba(255,255,255,0.8)").p("ADICqIC0AUIi0AKIgKC0IgUi0IiqgKICqgUIAUiqIAKCq").cp().ef();
    star.regX = 19;
    star.regY = 19;
    star.x = (styling[styleIndex].width * 0.5) - 45;
    star.y = 0 - styling[styleIndex].gradHeight-3;
    star.scaleX = 0.3;
    star.scaleY = 0.3;
    star.alpha = 0;

    glint.graphics.beginLinearGradientFill(["rgba(255,220,252,0)", glintColour, "rgba(255,220,252,0)"], [0, 0.9, 1], -50, 0, 15, 30).drawRect(-75, -50, 150, 100);
    glint.x = 0 - styling[styleIndex].width * 0.5 - 50;
    glint.mask = backgroundGrad;

    container.addChild(backgroundGrad, highlightGrad, textField, glint, star);

    container.playGlint = function() {
        TweenLite.to(glint, 1.2, {
            x: styling[styleIndex].width * 0.5 + 75,
            ease: Quad.easeOut
        });
        TweenLite.to(star, 0.6, {
            alpha: 1,
            scaleX: 1,
            scaleY: 1,
            ease: Quad.easeOut
        });
        TweenLite.to(star, 0.6, {
            delay: 0.6,
            alpha: 0,
            scaleX: 0.3,
            scaleY: 0.3,
            ease: Quad.easeOut
        });
        TweenLite.to(star, 1.2, {
            alpha: 1,
            x: (styling[styleIndex].width * 0.5) - 30,
            rotation: 360,
            ease: Quad.easeOut
        });
        TweenLite.delayedCall(1.2, function() {
            glint.x = 0 - styling[styleIndex].width * 0.5 - 50;
            star.x = (styling[styleIndex].width * 0.5) - 70;
        });
    }

    return container;
}



function SkyText(createjsText, font, lineWidth, lineHeight, align, gradient) {
    var canvas = document.getElementById("main"),
        container = new createjs.Container(),
        text1 = new createjs.Text(),
        gradientRect = new createjs.Shape(),
        text2 = new createjs.Text(),
        glint = new createjs.Shape();

    var x, y, width, height;

    var parsedText = createjsText.replace(/\$n/g, "\n");

    if (lineWidth === null || lineWidth === undefined) {
        lineWidth = canvas.width;
    }

    if (align === null || align === undefined) {
        align = "center";
    }

    if (gradient === null || gradient === undefined) {
        gradient = new SkyGradient(["#4c97ef", "#4c97ef", "#4c97ef"], [0, 0.5, 1], [
            [0, 0],
            [1, 0]
        ]);
    }

    container.playGlint = function() {
        TweenLite.to(glint, 0.6, {
            x: glint.x + 80 + width,
            ease: Linear.easeNone
        });
    };

    container.updateText = function(newText) {
        text1.uncache();
        newText = newText.replace("\n");
        text1.text = newText;

        if (align === "center")
            text1.x = lineWidth * 0.5;

        x = text1.getBounds().x;
        y = text1.getBounds().y;
        width = text1.getBounds().width;
        height = text1.getBounds().height + 10;

        text1.cache(x, y, width, height);

        if (align === "center")
            gradientRect.x = text1.x - width * 0.5;

        var x1 = gradient.matrix[0][0] * width,
            y1 = gradient.matrix[0][1] * height,
            x2 = gradient.matrix[1][0] * width,
            y2 = gradient.matrix[1][1] * height;

        gradientRect.uncache();
        gradientRect.graphics.clear().lf(gradient.colours, gradient.ratios, x1, y1, x2, y2).dr(0, 0, width, height);
        gradientRect.filters = [new createjs.AlphaMaskFilter(text1.cacheCanvas)];
        gradientRect.cache(0, 0, width, height);

        glint.x = text1.x + x - 40;
        glint.y = height * 0.5;

        text2.uncache();
        newText = newText.replace(/\$n/g, "\n");
        text2.text = newText;
        text2.x = text1.x;
        text2.cache(x, y, width, height);
    }

    text1.font = font;
    text1.color = "#4c97ef";
    text1.textAlign = align;
    text1.lineWidth = lineWidth;
    if (lineWidth !== null && lineWidth !== undefined) {
        text1.lineHeight = lineHeight;
    }

    text2.font = font;
    text2.color = "#ffffff";
    text2.textAlign = align;
    text2.lineWidth = lineWidth;
    if (lineWidth !== null && lineWidth !== undefined) {
        text1.lineHeight = lineHeight;
    }
    //text2.outline = 2;
    text2.shadow = new createjs.Shadow("#ffffff", 0, 0, 1);
    text2.alpha = 0.4;
    text2.mask = glint;

    container.updateText(parsedText);

    glint.graphics.f("#ffffff").de(-12, -height, 24, height * 2);
    glint.cache(-12, -height, 24, height * 2);
    glint.rotation = 30;

    container.addChild(gradientRect, text2);

    return container;
}
