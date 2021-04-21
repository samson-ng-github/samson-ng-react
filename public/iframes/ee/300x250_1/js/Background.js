(function(window) {
	Background = function(bannerWidth, bannerHeight, horizontalPadding, verticalPadding) {
		this.Container_constructor();
		this.circlesArray = [];
		this.holder = new createjs.Container();
		this.addChild(this.holder);
		this.wobbleFactor = 0.08;
		this.verticalPadding = verticalPadding || 40;
		this.horizontalPadding = horizontalPadding || 40;
		this.columnCount = Math.ceil(bannerWidth/this.horizontalPadding);
		this.rowCount = Math.ceil(bannerHeight/this.verticalPadding);
		this.canAnimate = true;
	}
	var _p = createjs.extend(Background, createjs.Container);

		_p.generate = function(){
			var dotCount = this.columnCount*this.rowCount;
			for (var i = 0; i < dotCount; i++) {
				var radius = (Math.random()*0.5) + 1;
	 			var s = this.makeCircle("#FFFFFF", radius);
	 			//s.cache(-radius, -radius, radius*2, radius*2);
	 			this.holder.addChild(s);

	 			s.x = this.horizontalPadding * ( i % this.columnCount ) + ((this.getRandomNumber(-1, 1)*this.wobbleFactor));
    			s.y = this.horizontalPadding * Math.floor( i / this.columnCount )+ ((this.getRandomNumber(-1, 1)*this.wobbleFactor));
	 			s.alpha = 0.1;
	 			this.circlesArray.push(s);
 			};
 		};

 		_p.makeCircle = function(colour, radius){
 			fillColour = colour || "#FFFFFF" ;
 			var g = new createjs.Graphics();
    		g.setStrokeStyle(1);
    		g.beginFill(fillColour);
    		g.drawCircle(0,0,radius || 1);

    		var s = new createjs.Shape(g);
    		return s;
 		};

 		_p.clearUp = function(){
 			this.holder.removeAllChildren();
 			this.circlesArray.length = 0;
 			this.generate();
 			this.animate();
 		};

 		_p.makeCirclesToMove= function(circle){
 			
 			
 			var vertOrHori = this.getRandomNumber(0, 1);
 			

 			if (vertOrHori == 0){
 				this.animateFirefliesHorizontally(circle);
 			}else {
 				this.animateFirefliesVertically(circle);
 			}
 			
 		};

 		_p.animateFirefliesHorizontally = function (circle){
 			var moveArray = [];
 			var direction = this.getRandomNumber(0, 1);
 			if (direction == 0){
 				direction = -1
 			}
 			var numberOfCircles = this.getRandomNumber(2, 6);
 			for (var i = 0; i < numberOfCircles; i++) {
 				var radius = (Math.random()*0.5) + 1;
 				var moveCircle = this.makeCircle("#FFFFFF", radius);
 				this.holder.addChild(moveCircle);
 				
 				moveCircle.x = circle.x - (this.verticalPadding*i);
 				moveCircle.y = circle.y;
 				moveCircle.alpha = (Math.random()*0.2) + 0.3;

 				moveArray.push(moveCircle);
 			};
 			

 			for (var j = 0; j < moveArray.length; j++) {
 				var speed = this.getSpeed();
 				var easing = this.getEasing();
 				if (j == moveArray.length-1){
 					TweenMax.to(moveArray[j], speed, {x:moveArray[j].x + this.verticalPadding *direction, delay:j*0.1, onComplete:this.endCircleAnimation, onCompleteScope:this, onCompleteParams:[moveArray]})
 				}else {
 					TweenMax.to(moveArray[j], speed, {x:moveArray[j].x + this.verticalPadding *direction, delay:j*0.1})
 				}
 				
 			};
 		}

 		_p.animateFirefliesVertically = function (circle){
 			var moveArray = [];
 			var direction = this.getRandomNumber(0, 1);
 			if (direction == 0){
 				direction = -1
 			}
 			var numberOfCircles = this.getRandomNumber(2, 6);
 			for (var i = 0; i < numberOfCircles; i++) {
 				var radius = (Math.random()*0.5) + 1;
 				var moveCircle = this.makeCircle("#FFFFFF", radius);
 				this.holder.addChild(moveCircle);
 				moveCircle.x = circle.x 
 				moveCircle.y = circle.y - (this.verticalPadding*i);;
 				moveCircle.alpha = (Math.random()*0.2) + 0.3;
 				moveArray.push(moveCircle);
 			};
 			

 			for (var j = 0; j < moveArray.length; j++) {
 				var speed = this.getSpeed();
 				var easing = this.getEasing();
 				if (j == moveArray.length-1){
 					
 					TweenMax.to(moveArray[j], speed, {y:moveArray[j].y + this.verticalPadding *direction, delay:j*0.1, easing:easing, onComplete:this.endCircleAnimation, onCompleteScope:this, onCompleteParams:[moveArray]})
 				}else {
 					TweenMax.to(moveArray[j], speed, {y:moveArray[j].y + this.verticalPadding *direction, delay:j*0.1, easing:easing})
 				}
 				
 			};
 		}

 		_p.endCircleAnimation = function(moveArray){
 			for (var i = 0; i < moveArray.length; i++) {
 				this.holder.removeChild(moveArray[i]);
 			};
 			if (this.canAnimate){
 				this.moveCircles();
 			}	
 		}

 		_p.moveCircles = function(){
 			var rand = this.getRandomNumber(0, this.circlesArray.length-1);
 			var circle = this.circlesArray[rand];
 			this.makeCirclesToMove(circle);
 		}

 		_p.animate = function(){
 			for (var i = 0; i < 7; i++) {
 				TweenMax.to(this, 0.1*i, {onComplete:this.moveCircles, onCompleteScope:this});
 			}
 		};

 		
 		_p.getRandomNumber = function(min, max){
 			return Math.floor(Math.random()*(max-min+1)+min);
 		}


		_p.getSpeed = function(){
			var rand = Math.random();
			var speed = 0.2 + (rand*0.3);
			return speed;
		}

		_p.getEasing = function(){
			var easingArray = [Power2.easeInOut,Power3.easeInOut,Sine.easeInOut,Power1.easeInOut]
			var min = 0;
 			var max = 3;
 			var rand = Math.floor(Math.random()*(max-min+1)+min);
 			return easingArray[rand];
		}

	window.Background = createjs.promote(Background, "Container");
})(window);