var canvas = document.createElement("canvas");
canvas.width = 300;
canvas.height = 250;
var context = canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.style.zIndex = "-100";

var goalkeeper = new Goalkeeper();
var football = new Football();
var keysDown = {};
var missed = 0;
var caught = 0;
var game_running = false;

TweenLite.to(document.getElementById("phantom"), 3, {alpha:1});
TweenLite.to(document.getElementById("p"), 2, {delay:0.7, ease: Circ.easeOut, y:94+27});
TweenLite.to(document.getElementById("h"), 2, {delay:0.6, ease: Circ.easeOut, y:84+28});
TweenLite.to(document.getElementById("a"), 2, {delay:0.5, ease: Circ.easeOut, y:97+26});
TweenLite.to(document.getElementById("n"), 2, {delay:0.4, ease: Circ.easeOut, y:84+28});
TweenLite.to(document.getElementById("t"), 2, {delay:0.3, ease: Circ.easeOut, y:103+27});
TweenLite.to(document.getElementById("o"), 2, {delay:0.2, ease: Circ.easeOut, y:87+35});
TweenLite.to(document.getElementById("m"), 2, {delay:0.1, ease: Circ.easeOut, y:89+27});
TweenLite.to(document.getElementById("football"), 2, {delay:0.8, ease: Circ.easeOut, y:141-250});
TweenLite.to(document.getElementById("space"), 1, {delay:1, ease: Circ.easeOut, alpha:1});
	
window.addEventListener('keydown', function(event) {
	if (event.keyCode == 32) {
		document.getElementById("stage").style.display = "none";
		setTimeout(function(){ game_running = true; }, 1000);
		missed = 0;
		caught = 0;
	}
}, false);

function Goalkeeper() {
    this.width = 40;
    this.height = 20;
	this.pos_x = (canvas.width - this.width)/2;
    this.pos_y = canvas.height - this.height - 50;
}

Goalkeeper.prototype.render = function () {
	context.fillStyle = "#666";
    context.fillRect(this.pos_x, this.pos_y, this.width, this.height);
};

Goalkeeper.prototype.move = function (offset) {
    this.pos_x += offset;
    if (this.pos_x < 0) this.pos_x = 0;
    else if (this.pos_x + this.width > canvas.width) this.pos_x = canvas.width - this.width;
};

Goalkeeper.prototype.update = function () {
    for (var key in keysDown) {
        var value = Number(key);
        if (value == 37) this.move(-4, 0);
        else if (value == 39) this.move(4);
        else this.move(0);
    }
};

function Football() {
	this.radius = 10;
    this.origin_x = canvas.width/2;
    this.origin_y = -this.radius;
    this.pos_x = this.origin_x;
    this.pos_y = this.origin_y;
    this.speed = 6;
    this.vel_x = (Math.random() - 0.5)*this.speed;
    this.vel_y = this.speed;
}

Football.prototype.render = function () {
    context.beginPath();
    context.arc(this.pos_x, this.pos_y, this.radius, 2 * Math.PI, false);
    context.fillStyle = "#000000";
    context.fill();
};

Football.prototype.update = function (goalkeeper) {
    this.pos_x += this.vel_x;
    this.pos_y += this.vel_y;
    var left = this.pos_x - this.radius;
    var top = this.pos_y - this.radius;
    var right = this.pos_x + this.radius;
    var bottom = this.pos_y + this.radius;
	
    if (left < 0) {
        this.pos_x = this.radius;
        this.vel_x = -this.vel_x;
    } else if (right > canvas.width) {
        this.pos_x = canvas.width - this.radius;
        this.vel_x = -this.vel_x;
    }
    
    if (left < 50 && right > 50 && bottom > canvas.height - 40 && this.pos_x > 50) {
        this.pos_x = 50 + this.radius;
        this.vel_x = -this.vel_x;
    } else if (left < 50 && right > 50 && bottom > canvas.height - 40 && this.pos_x < 50) {
        this.pos_x = 50 - this.radius;
        this.vel_x = -this.vel_x;
    } else if (left < 250 && right > 250 && bottom > canvas.height - 40 && this.pos_x < 250) {
        this.pos_x = 250 - this.radius;
        this.vel_x = -this.vel_x;
    } else if (left > 250 && right < 250 && bottom > canvas.height - 40 && this.pos_x > 250) {
        this.pos_x = 250 + this.radius;
        this.vel_x = -this.vel_x;
    }
    
    if (top > canvas.height && this.pos_x < 250 && this.pos_x > 50) {
    	missed++;
    	if (missed >= 3) game_running = false;
    }
    
    if (bottom < 0) {
    	if (caught >= 3) game_running = false;
    }

    if (top < (goalkeeper.pos_y + goalkeeper.height) && bottom > goalkeeper.pos_y && left < (goalkeeper.pos_x + goalkeeper.width) && right > goalkeeper.pos_x) {
        this.vel_y = -this.vel_y;
        this.pos_y = goalkeeper.pos_y - this.radius;
        caught++;
    }
    
    if (bottom < 0 || top > canvas.height) {
        this.vel_x = (Math.random() - 0.5)*this.speed;
        this.vel_y = this.speed;
        this.pos_x = this.origin_x;
        this.pos_y = this.origin_y;   
    }
};

function render() {
    context.fillStyle = "#a5bd7b";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeRect((canvas.width-200)/2,canvas.height-40,200,80); 
    goalkeeper.render();
    football.render();
    
    context.font="20px arcadeclassic";
    context.fillText("MISSED: "+missed,10,25);
	context.fillText("CAUGHT: "+caught,10,45);
    
    context.font="50px arcadeclassic";
    if (game_running == false && missed >= 3) context.fillText("YOU  LOST!",40,125);
    if (game_running == false && caught >= 3) context.fillText("YOU  WON!",50,125);
};

function update() {
    if (game_running) goalkeeper.update();
    if (game_running) football.update(goalkeeper);
};

function animate() {
	requestAnimationFrame(animate);
    update();
    render();
}

animate();

window.addEventListener("keydown", function (event) {
    keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function (event) {
    delete keysDown[event.keyCode];
});