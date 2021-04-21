var canvas_w = 970-2;
var canvas_h = 250-2;
var bg_color = "#FFFFFF";
var border_color = "#000000";
var border_thickness = 1;

var renderer = new WASTE.Renderer(canvas_w,canvas_h, {bgColor:bg_color,borderColor:border_color,borderThickness:border_thickness});
var stage = renderer.stage;
var timeline = renderer.timeline;

var loader = new WASTE.Loader([
	"assets/bg.jpg", "assets/t1.png", "assets/pot_green.png", "assets/pot_blue.png", "assets/pot_olive.png",
	"assets/b1.png", "assets/b2.png", "assets/b3.png", "assets/b4.png", "assets/b5.png", "assets/t2.png",
	"assets/cta1.png", "assets/cta2.png"
]);
loader.onComplete = onAssetsReady;
loader.load();

function onAssetsReady()
{
	//OBJECTS
	var bg = new WASTE.Sprite(0);
	stage.addChild(bg);

	var t1 = new WASTE.Sprite(1);
	stage.addChild(t1);

	var pot_green = new WASTE.Sprite(2);
	stage.addChild(pot_green);

	var pot_olive = new WASTE.Sprite(3);
	stage.addChild(pot_olive);

	var pot_blue = new WASTE.Sprite(4);
	stage.addChild(pot_blue);

	var b1 = new WASTE.Sprite(5);
	stage.addChild(b1);

	var b3 = new WASTE.Sprite(7);
	stage.addChild(b3);
	
	var b2 = new WASTE.Sprite(6);
	stage.addChild(b2);


	var b4 = new WASTE.Sprite(8);
	stage.addChild(b4);

	var b5 = new WASTE.Sprite(9);
	stage.addChild(b5);

	var t2 = new WASTE.Sprite(10);
	stage.addChild(t2);
	
	var cta1 = new WASTE.Sprite(11);
	stage.addChild(cta1);
	var cta2 = new WASTE.Sprite(12);
	stage.addChild(cta2);
	

	cta2.interactive = true;
	cta2.onClick = function() {
		console.log("cta clicked");
		window.location.href = 'https://www.philadelphia.co.uk', '_blank';
	};
	
	var fade_in, fade_out;
	
	cta2.onOver = function() {
		console.log("over");
		cta2.alpha = 0;
		clearInterval(fade_out);
		fade_in  = setInterval(function(){ cta2.alpha += 0.1; if (cta2.alpha > 1) cta2.alpha = 1; }, 40);
	};
	
	cta2.onOut = function() {
		console.log("out");
		cta2.alpha = 1;
		clearInterval(fade_in);
		fade_out = setInterval(function(){ cta2.alpha -= 0.1; if (cta2.alpha < 0) cta2.alpha = 0; }, 40);
	};
	
	//INITIAL SETTINGS
	//Background
	bg.x = 0; 
	bg.y = 0; 

	bg.interactive=true;

	pot_blue.x = -150; 
	pot_blue.y = canvas_h/2;
	pot_blue.anchor.x = 0.5;
	pot_blue.anchor.y = 0.5;
	
	pot_olive.x = -150; 
	pot_olive.y = canvas_h/2;
	pot_olive.anchor.x = 0.5;
	pot_olive.anchor.y = 0.5;
	
	pot_green.x = -150; 
	pot_green.y = canvas_h/2;
	pot_green.anchor.x = 0.5;
	pot_green.anchor.y = 0.5;
	
	t1.x = canvas_w/2; 
	t1.y = canvas_h/2;
	t1.anchor.x = 0.5;
	t1.anchor.y = 0.5;
	
	t1.mask.x = -150-canvas_w;
	t1.mask.y = 0;
	t1.mask.width = canvas_w;
	t1.mask.height = canvas_h;
	
	b1.x = 105; 
	b1.y = canvas_h;
	
	b2.x = 216; 
	b2.y = -canvas_h;
	
	b3.x = 342;  
	b3.y = canvas_h;
	
	b4.x = 472; 
	b4.y = -canvas_h*2;
	
	b5.x = 620; 
	b5.y = canvas_h;
	
	t2.x = 112; 
	t2.y = 38;
	t2.anchor.x = 0;
	t2.anchor.y = 0;
	t2.alpha = 0;
	
	cta1.x = 296 + canvas_w;
	cta1.y = 145;
	cta1.alpha = 0;
	
	cta2.x = 296 + canvas_w;
	cta2.y = 145;
	cta2.alpha = 0;
	
	
	
	//ACTIONS
	
	timeline.addTween(pot_blue, 1, {x: 880, rotation: 360}, false, "easeOut");
	timeline.addTween(pot_olive, 1, {x: 880, rotation: 360}, 0.5, false, "easeOut");
	timeline.addTween(pot_green, 1, {x: 880, rotation: 360}, 1, false, "easeOut");
	timeline.addTween(t1.mask, 1, {x: 880-canvas_w}, 1, false, "easeOut");
	timeline.addTween(t1, 1, {alpha: 0}, 4, false, "easeOut");
	
	timeline.addParam(b1, {y: 20}, 5, false);
	timeline.addParam(b2, {y: 17}, 5+0.5, false);
	timeline.addParam(b3, {y: 16}, 5+0.5*2, false);
	timeline.addParam(b4, {y: -40}, 5+0.5*3, false);
	timeline.addParam(b5, {y: 16}, 5+0.5*4, false);

	timeline.addTween(b1, 0.25, {y: 7+canvas_h}, 9, false, "easeOut");
	timeline.addTween(b2, 0.25, {y: 7+canvas_h}, 9, false, "easeOut");
	timeline.addTween(b3, 0.25, {y: 7+canvas_h}, 9, false, "easeOut");
	timeline.addTween(b4, 0.25, {y: 7+canvas_h}, 9, false, "easeOut");
	timeline.addTween(b5, 0.25, {y: canvas_h+canvas_h}, 9, false, "easeOut");

	timeline.addTween(t2, 1, {alpha: 1}, 10, false, "easeOut");
	timeline.addParam(cta1, {x:296}, 10, false);
	timeline.addParam(cta2, {x:296}, 10, false);
	timeline.addTween(cta1, 1, {alpha:1}, 10, false, "easeOut");

	//START
	timeline.play();
	renderer.ready = true;
	timeline.play();
}

//Animation Frame Handler
function updateFrames() {
     
    requestAnimationFrame(updateFrames);
   	
   	renderer.render();
}


updateFrames();