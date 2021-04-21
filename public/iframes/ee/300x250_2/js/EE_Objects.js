(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/bg2.png", id:"Particles_Static"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Particles_Static = function() {
	this.initialize(img.Particles_Static);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);

(lib.Small_Text = function() {
	this.initialize(img.Small_Text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);

//--

(lib.TickerHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ParticlesPNG = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Particles_Static();
	this.instance.setTransform(0,0,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.SmallTextPNG = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Small_Text();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);

//--
	
(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE600").s().p("Ak5VJQiQg8hwhxQhwhvg9iRQg/iWAAikQAAimBEibQBAiRB0h0IANgOQAFgHAAgHQAAgGgFgHIgNgOQh1hwhBiUQhCiZAAipQAAikA/iWQA9iRBwhvQBwhxCQg8QCWhACjAAQCjAACWBAQCRA8BwBxQBwBvA9CRQA/CWAACkQAACphCCZQhBCUh1BwIgNAOQgFAHAAAGQAAAHAFAHIANAOQB0B0BACRQBECbAACmQAACkg/CWQg9CRhwBvQhwBwiRA9QiWBAijAAQijAAiWhAgACFPeQAQALAUAAQAbAAATgUQAUgTAAgbQAAgbgUgUQgTgTgbAAQgUAAgQALQgQAKgIARQgIgRgQgKQgQgLgTAAQgUAAgQALQgOAKgIARQgIgRgQgKQgQgLgUAAQgQAAgPAHQgOAIgJAOQgIgKgJgHQAcgUAAgiQAAgigcgUQAcgUAAgiQAAgigcgUQAHgFAGgJQAVAZAfAAQARABAPgKQAPgIAJgOQAJAOAMAIQAQAKARgBQAkABAUggQAJAPAPAHQAPAKARgBQAcAAATgTQATgTAAgbQAAgcgTgTQgTgTgcAAQgRgBgPAJQgPAIgJAPQgUgggkABQgSgBgPAJQgMAIgJAPQgJgPgPgIQgPgJgRABQgggBgUAZQgIgIgFgEQAcgUAAgiQAAgigcgUQAcgUAAgiQAAgigcgUQAJgHAIgKQAIAOAPAHQAPAIAQAAQAUAAAQgKQAQgLAIgRQAIARAOALQAQAKAUAAQATAAAQgKQAQgLAIgRQAIARAQALQAQAKAUAAQAbAAATgTQAUgTAAgbQAAgcgUgTQgTgUgbAAQgUAAgQALQgQAKgIARQgIgRgQgKQgQgLgTAAQgUAAgQALQgOAKgIARQgIgRgQgKQgQgLgUAAQgQAAgPAIQgOAIgJAOQgJgOgPgIQgOgIgRAAQgcAAgTAUQgTATAAAcQAAAQAHAOQAIAPANAIQgNAJgIAPQgHAOAAAQQAAAiAcAUQgNAJgIAPQgHAOAAAQQAAAiAcAUQgcAUAAAiQAAAiAcAUQgcAUAAAiQAAAiAcAUQgcAUAAAiQAAAiAcAUQgcAUAAAiQAAAbATATQATAUAcAAQAjAAAUgeQAIAOAPAIQAPAIAQAAQAUAAAQgLQAQgKAIgRQAIARAOAKQAQALAUAAQATAAAQgLQAQgKAIgRQAIARAQAKgACFjnQAQAKAUAAQAbAAATgTQAUgTAAgcQAAgbgUgTQgTgTgbAAQgUAAgQAKQgQALgIARQgIgRgQgLQgQgKgTAAQgUAAgQAKQgOALgIARQgIgRgQgLQgQgKgUAAQgQAAgPAIQgPAHgIAOQgHgKgKgIQAcgTAAgiQAAgRgIgOQgHgPgNgIQAcgUAAgiQAAgigcgUQAHgGAGgHQAUAYAgAAQARAAAPgJQAPgIAJgOQAJAOAMAIQAPAJASAAQAkAAAUgfQAJAOAPAIQAPAJARAAQAcAAATgTQATgUAAgbQAAgbgTgTQgTgUgcAAQgRAAgPAJQgPAJgJAOQgUgggkAAQgSAAgPAJQgMAJgJAOQgJgOgPgJQgPgJgRAAQggAAgUAZQgIgIgFgEQAcgUAAgiQAAgigcgUQAcgUAAgiQAAgigcgUQAIgGAJgLQAIANAPAIQAPAIAQAAQAUAAAQgLQAQgKAIgRQAIARAOAKQAQALAUAAQATAAAQgLQAQgKAIgRQAIARAQAKQAQALAUAAQAbAAATgUQAUgSAAgcQAAgcgUgSQgTgUgbAAQgUAAgQALQgQAKgIARQgIgRgQgKQgQgLgTAAQgUAAgQALQgOAKgIARQgIgRgQgKQgQgLgUAAQgQAAgPAIQgPAIgIANQgUgdgjAAQgcAAgTAUQgTASAAAcQAAAiAcAUQgcAUAAAiQAAAiAcAUQgcAUAAAiQAAAiAcAUQgcAUAAAiQAAAiAcAUQgcAUAAAiQAAAiAcAUQgNAIgIAPQgHAOAAARQAAAiAcATQgNAKgIAOQgHAOAAAQQAAAcATATQATATAcAAQAjAAAUgdQAIAOAPAHQAPAIAQAAQAUAAAQgKQAQgKAIgRQAIARAOAKQAQAKAUAAQATAAAQgKQAQgKAIgRQAIARAQAKg");
	this.shape.setTransform(80.7,141.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161.4,283.5);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("At3EVIAAopIbvAAIAAIpg");
	mask.setTransform(88.9,27.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE700").s().p("AscEUQg5AAgXguQgHgOgDgRIgCgOIAAlwQABg6AtgXQAYgMAWABIY4AAQA6gBAXAvQAMAWAAAYIAAFwQAAA5gvAXQgOAHgRADIgPABg");
	this.shape.setTransform(88.9,27.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,177.8,55.4);


(lib.Fade2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00A9A7","rgba(0,169,167,0.859)","rgba(0,169,167,0)"],[0,0.459,1],517.7,-1.2,0,517.7,-1.2,2397.6).s().p("EhWPHBpMgABuDRMCshAAAMAAAODRg");
	this.shape.setTransform(12.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-539.3,-2877.7,1104.3,5755.5);


(lib.Fade1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00A6A2","rgba(0,166,162,0.82)","rgba(0,166,162,0)"],[0,0.412,1],-209.3,-5.7,0,-209.3,-5.7,491.2).s().p("EgtJA/qMAAAh/TMBaTAAAMAAAB/Tg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289,-407.4,578.2,814.9);

/*
(lib.CtaButton = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#656C71").s().p("AGjBYQgGgEgCgIIgiiZIAAgDQAAgEACgEQADgCAFgBQAJABABAHIAhCbQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIAniSQACgIAFgFQAFgEAHAAQAGAAAFAEQAGAGABAHIAnCSIAAABIABgBIAiibQACgHAJgBQAEABADADQADACAAAFIglCdQgCAHgFAEQgFAEgHABQgGgBgFgEQgFgEgCgGIgniUQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgnCUQgCAGgFAEQgFAFgGAAQgHAAgFgFgAEABbIgOgEQgNgFgKgKQgKgKgGgNQgFgIgDgVQgBgUABgUQABgKAHgSQAGgNAKgLQAKgJANgGIAPgEIAOgBQALAAATAFQANAGALAKQAJAKAHANQAGASABAKQACAUgCAUQgDAVgEAIQgHANgJAKQgLAKgNAFQgTAGgLAAgAD7hDQgKADgHAHQgIAHgEAKQgEAKgBALQgCATACATQABALAEALQAEAKAIAHQAHAHAKAEQAJADALAAQALAAAKgDQAKgEAIgHQAHgHAEgKQAFgLABgLQACgTgCgTQgBgLgFgKQgEgKgHgHQgIgHgKgDQgKgFgLAAQgLAAgJAFgAlzBbIgOgEIgMgHIgLgJIgJgKIgHgNIgEgPIgCgRIAAhgQAAgEAEgEQADgDAEAAQAEAAAEADQADAEAAAEIAABgQAAANAEALQADAKAIAIQAGAHAKAEQAKADALAAQAMAAAJgDQAKgEAGgHQAIgIADgKQAFgLAAgNIAAhgQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEIAABgIgCARIgEAPIgHANIgIAKQgPAMgJAEQgTAGgKAAgAAHBYQgDgDAAgFIAAiYQAAgHAFgGQAFgGAIAAQAFAAAFACQAEADADAFIBbCSIABAAIgBiRQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEIAACYQAAAIgFAGQgFAFgHAAQgFAAgFgDQgEgCgDgFIhciTIgBAAIABCSQAAAFgDADQgDADgFAAQgEAAgDgDgAi2BYQgEgDAAgFIAAhDQAAgHgHgGIg7hJQgDgDAAgEQAAgEADgEQAEgCAEgBQAFAAAEAEIA8BNIA9hNQADgEAFAAQAFAAADADQADAEAAAEQAAAEgCADIg8BJQgHAHAAAGIAABDQAAAFgDADQgDADgFAAQgEAAgDgDgApGBaQgJABgFgGQgFgFAAgIIAAiQQAAgHAFgGQAFgFAJAAIA5AAQANAAAKAEQAJAEAHAHQAGAFAEAJQADAIAAAKQAAAIgCAIQgBAGgEAFQgDAFgFADQgEADgFACIAAACQAHABAFABQAFAEAFAFQADAGACAIQACAGAAAJQAAANgEAKQgEAKgIAGQgHAGgKAEQgJACgMAAgApDBFIA2AAQAJAAAHgBQAHgCAEgFQAEgDADgGQACgGAAgIQAAgIgCgGQgDgFgEgEQgFgEgGgDQgGgCgHABIg5AAgApDgLIA1AAQAIAAAGgCIAKgGQAEgEACgFQACgGAAgGQAAgIgCgFQgCgGgEgDQgEgEgGgBQgGgDgIAAIg1AAg");
	this.shape.setTransform(75,23.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(64.4,23.4,0.847,0.847,0,0,0,76,27.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#656C71").s().p("AgLAcQgMgFgEgMQgFgLAFgKQAEgMAMgFQAHgCAEAAQASAAAJAPQAIAOgJAPQgFAJgKAEQgGACgFAAQgFAAgGgCg");
	this.shape_1.setTransform(32.3,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.5,46.9);
*/

(lib.BackgroundGradientSCOOP = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	//this.shape.graphics.f("#000").dr(0,0,300,250);
	this.shape.graphics.f("#00A09B").dr(0,0,300,250);
	//this.shape_2.setTransform(485,213.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314,0,1319.1,600.2);


// stage content:
(lib.EE_Tickbox_300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	//this.ctaButton = new lib.CtaButton();
	//this.ctaButton.setTransform(305.8,260,0.559,0.558,0,0,0,528.5,31.7);
	//this.ctaButton.alpha = 0;
	//this.ctaButton.on("click", function(evt) {console.log("XXXXXXXXXXXXXD");});

	this.instance = new lib.Logo();
	this.instance.setTransform(250,15,0.218,0.218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}/*,{t:this.ctaButton}*/]}).wait(1));

	// Layer 6
	this.tickerHolder = new lib.TickerHolder();
	this.timeline.addTween(cjs.Tween.get(this.tickerHolder).wait(1));
	
	
	// iPhone
	this.SmallText = new lib.SmallTextPNG();
	this.timeline.addTween(cjs.Tween.get(this.SmallText).wait(1));

	// Particles
	this.ParticlesStatic = new lib.ParticlesPNG();
	this.ParticlesStatic.setTransform(0,0,1,1);
	//this.ParticlesStatic.alpha = 0.699;
	this.timeline.addTween(cjs.Tween.get(this.ParticlesStatic).wait(1));
	
	
	// Layer 2
	this.bg = new lib.BackgroundGradientSCOOP();
	//this.bg.setTransform(-24.2,-11,0.198,1.14);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,278.7,328.8,694.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;