/*@author JAY SUKHIJA
// SapientNitro 2016
// dependencies: createjs, TweenLite
//


// USAGE API:
var bitmap = new createAssetBitmap(bitmap:Bitmap, parentContainer:Container);
setSheen(bitmap:Bitmap, time:integer);

*/
var createAssetBitmap = function(ref, parent){
    var container = new createjs.Container();
    var img = new createjs.Bitmap(ref);
    container.addChild(img);
    parent.addChild(container);
    return img;
}


function setSheen(img,speed){
    var sheenImg,
    sheenImgClone,
    sheenImgWidth,
    sheenImgHeight,
    sheenContainer,
    sheenImgHeight,sheenSpeed,sheenRect,sheenGlint;

    sheenImg = img.clone();
    sheenImgClone = sheenImg.clone();
    sheenImgClone.alpha = 0;

     var w = sheenImg.getBounds().width;
     var h = sheenImg.getBounds().height;


    //console.log(sheenImg.getBounds().height)

     //ctx.drawImage(sheenImg.image, 0, 0, w, h);


    var idata = ctx.getImageData(0,0,w,h),
        buffer = idata.data,
        buffer32 = new Uint32Array(buffer.buffer),
        x, y,
        x1 = w, y1 = h, x2 = 0, y2 = 0;

    // get left edge
    for(y = 0; y < h; y++) {
        for(x = 0; x < w; x++) {
            if (buffer32[x + y * w] > 0) {
                if (x < x1) x1 = x;
            }
        }
    }

    // get right edge
    for(y = 0; y < h; y++) {
        for(x = w; x >= 0; x--) {
            if (buffer32[x + y * w] > 0) {
                if (x > x2) x2 = x;
            }
        }
    }

    // get top edge
    for(x = 0; x < w; x++) {
        for(y = 0; y < h; y++) {
            if (buffer32[x + y * w] > 0) {
                if (y < y1) y1 = y;
            }
        }
    }

    // get bottom edge
    for(x = 0; x < w; x++) {
        for(y = h; y >= 0; y--) {
            if (buffer32[x + y * w] > 0) {
                if (y > y2) y2 = y;
            }
        }
    }

    sheenSpeed = (typeof speed !=='undefined'?speed:1);
    sheenRect = new createjs.Rectangle(x1+0.5, y1+0.5, x2-x1, y2-y1);
    //console.log(sheenRect);

    // GLINT:
    sheenGlint = new createjs.Shape();		    sheenGlint.graphics.beginLinearGradientFill(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.5,1],0,0,60,0);
    sheenGlint.graphics.drawRect(sheenRect.x,sheenRect.y,50,sheenRect.height);
    sheenGlint.cache(sheenRect.x,sheenRect.y,50,sheenRect.height);

    // create a container:
    sheenContainer = new createjs.Container();
    sheenContainer.addChild(sheenImg);
    sheenContainer.alpha=.8;

    sheenContainer.filters = [
          new createjs.ColorFilter(0,0,0,100, 255,255,255,0),
          new createjs.AlphaMaskFilter(sheenGlint.cacheCanvas)
        ];
    sheenContainer.cache(0, 0, w, h);

    img.parent.addChild(sheenContainer);
    //console.log('img.parent ?>>>>>>>> '+img.parent);

    TweenLite.set(sheenContainer,{x:-sheenRect.x*2, y:sheenRect.y})
    TweenLite.to(sheenContainer,sheenSpeed,{ x:Math.abs(sheenRect.width+sheenRect.x+50),onUpdate:function(){
        sheenImg.x = sheenImgClone.x - sheenContainer.x;
        sheenImg.y = sheenImgClone.y - sheenContainer.y;
        sheenContainer.updateCache();
    },onComplete:function(){
        img.parent.removeChild(sheenContainer);
        sheenImgClone = null;
        sheenContainer = null;
     }});
}
