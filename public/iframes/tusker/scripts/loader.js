var shape;
var degree = 0;

function setup_loader() {
  
  var c = new createjs.Container();
  c.rotation = -90;
  c.x = original_width/2;
  c.y = original_height/2;
  
  shape = new createjs.Shape();
  c.addChild(shape);
  stage.addChild(c);
	
  createjs.Ticker.addEventListener("tick", progress);
}

function progress() {

  
  if ((degree/360)<(totalLoaded/manifest.length)) degree += 10;
  if (degree > 360) degree = 360;
  
  shape.graphics.clear();
  draw_ring(shape.graphics, 'rgb(255, 109, 181)', 0, 0, 268/2, 236/2, 0, degree);
  
  stage.update();
  
  
  if (360 === degree ) {
    createjs.Ticker.removeEventListener('tick', progress);
	setupStage();
  }
}

function draw_ring(graphics, color, x, y, outerRadius, innerRadius, fromDegree, toDegree) {
  var strokeWidth = outerRadius - innerRadius,
      offset = strokeWidth / 2;
  
  graphics
    .setStrokeStyle(strokeWidth)
    .beginStroke(color)
    .arc(x, y, outerRadius, _d2r(fromDegree), _d2r(toDegree))
    .endFill();
}

function _d2r(degree) {
  return (degree / 360) * 2 * Math.PI;
}