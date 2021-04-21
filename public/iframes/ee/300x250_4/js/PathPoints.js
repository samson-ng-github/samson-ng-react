(function(window) {

	PathPoints = function(pathObj, spacing) {

		var path = pathObj;

		var spacing = spacing || 3;

		var sectionArray = [];

		this.points = [];


		// PUBLIC METHODS //
		///////////////////

		this.createPoints = function(sA) {

			//console.log("length "+sA.length);

			for (var i = 0; i<sA.length; i++)
			{

				var thisSegment;

				if (sA[i].length == 2)
				{
					thisSegment = new Segment(sA[i][0],sA[i][1]);
				}
				else if (sA[i].length == 3)
				{
					thisSegment = new Segment(sA[i][0],sA[i][1],sA[i][2]);
				}
				else
				{
					console.log("No segment length!");
				}

				var thisLength = thisSegment.length();

				var dotCount = parseInt(thisLength/spacing,10);

				for (var j = 0; j<dotCount; j++)
				{
					var pointX = thisSegment.subdivide(j/dotCount).end.x;
					var pointY = thisSegment.subdivide(j/dotCount).end.y;
					var newPoint = new createjs.Point(pointX,pointY);
					this.points.push(newPoint);
				}


			}
		}

		this.shuffle = function(arr) {

			for (var i = 0; i<arr.length; i++)
			{
				var tmp = arr[i];
				var rand = int(Math.random() * arr.length);
				arr[i] = arr[rand];
				arr[rand] = tmp;
			}

		}

		// PRIVATE METHODS //
		///////////////////

		function getSections(p) {

			var _C = p.com;
			var _P = p.dat;

			var j = 0;

			for (var i = 0; i< _C.length; i++)
			{

				var vect = []  ;

				if (_C[i] == 1) // 1 = moveTo
				{
					// *** DON'T NEED THIS POINT AS THE 'lineTo' TAKES THE FIRST POINT AS WELL ***
					j +=  2;

				}
				else if (_C[i]==2) // 2 = lineTo
				{
					// Get the coords of lineTo (including the starting position) and then skip j along to the next command set.
					vect.push(new createjs.Point(_P[j-2],_P[j-1]), new createjs.Point(_P[j],_P[j+1]));
					sectionArray.push(vect);
					j +=  2;

				}
				else if (_C[i]==3) // 3 = curveTo
				{
					// Get the coords of curveTo (including the starting position and control point) and then skip j along to the next command set.
					vect.push(new createjs.Point(_P[j-2],_P[j-1]), new createjs.Point(_P[j+2],_P[j+3]), new createjs.Point(_P[j],_P[j+1]));
					sectionArray.push(vect);
					j +=  4;

				}
				else
				{
					console.log("I wasn't expecting that...");
				}

			}

		}

		getSections(path);
		this.createPoints(sectionArray);


	}



})(window);