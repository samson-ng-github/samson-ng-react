(function(window) {

	var pointSubtract = function(source,other) {
		return new createjs.Point(source.x -= other.x,source.y -= other.y);
	};

	var pointLength = function(source)
	{
		return Math.sqrt(source.x * source.x + source.y * source.y);
	};

	Segment = function(start,end,control) {

		this.start = start;
		this.end = end;
		this.control = control || null;

		this.subdivide = function(k) {
			/**
			 * Line/curve geometry and helpers
			 * @author Philippe / http://philippe.elsass.me
			 */
			var _end;

			var k1 = 1.0 - k;

			if (control)
			{
				
				var _control = new createjs.Point(
					k * control.x + k1 * start.x,
					k * control.y + k1 * start.y);
				
				var temp = new createjs.Point(
					k * end.x + k1 * control.x,
					k * end.y + k1 * control.y);
					
				_end = new createjs.Point(
					k * temp.x + k1 * _control.x,
					k * temp.y + k1 * _control.y);
				
				return {start:start, end:_end, control:_control};
			}
			else
			{
				_end = new createjs.Point(
					start.x + k * (end.x),
					start.y + k * (end.y));
				return {start:start, end:_end};
			}
		}

		this.length = function() {

			//console.log("She's lost control: "+control);

			if (control)
			{
				//console.log("so "+control);
				// code credit: The Algorithmist
				// http://algorithmist.wordpress.com/2009/01/05/quadratic-bezier-arc-length/
				var ax = start.x - 2*control.x + end.x;
				var ay = start.y - 2*control.y + end.y;
				var bx = 2 * control.x - 2 * start.x;
				var by = 2 * control.y - 2 * start.y;

				var a = 4 * (ax * ax + ay * ay);
				var b = 4 * (ax * bx + ay * by);
				var c = bx * bx + by * by;

				var abc = 2 * Math.sqrt(a + b + c);
				var a2  = Math.sqrt(a);
				var a32 = 2 * a * a2;
				var c2  = 2 * Math.sqrt(c);
				var ba  = b / a2;

				return (a32 * abc + a2 * b * (abc - c2) + (4 * c * a - b * b) 
				  * Math.log((2 * a2 + ba + abc) / (ba + c2))) / (4 * a32);
			} else {
				//console.log("else "+control);
				return pointLength(pointSubtract(end,start))
			}
		}
	}


})(window);