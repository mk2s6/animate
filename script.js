const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const body = document.querySelector('body');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

body.style['background-color'] = 'white';

window.addEventListener('resize', function () {
	canvas.width = window.innerWidth;	
	canvas.height = window.innerHeight;
	
// 	if (innerWidth < 500px) {

// 		init(50);
// 	}
	init(100);
});	


var Color = [
		'violet',
		'indigo',
		'blue',
		'green',
		'yellow',
		'orange',
		'red'
];

function Circle (x, y, dx , dy, radius, color) {

	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;
	this.draw = function  () {
		console.log('acdac');
		c.beginPath();
		console.log(this.color);
		c.arc(this.x, this.y, this.radius, 0 , Math.PI * 2, false);
		c.fill();
		c.fillStyle = this.color;
	
	}

	this.update = function  () {
		if (this.x + radius > innerWidth || this.x - radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + radius > innerHeight || this.y - radius < 0) {
			this.dy = -this.dy;	
		}
		
		this.x += this.dx;
		this.y += this.dy;
		
		this.draw();	
	}
}


var circleArray = [];
function init (value) {
	circleArray = [];
	for (var i = 0; i < value; i++) {
		
		var radius = (Math.random() * 15) + 4;
		var x = Math.random() * (innerWidth - (radius * 2)) + radius;
		var y = Math.random() * (innerHeight - (radius * 2)) + radius;
		var dx = (Math.random() - 0.5) * 10 + 1;
		var dy = (Math.random() - 0.5) * 10 + 1;
		var color = Color[Math.floor(Math.random() * Color.length)];
			
		circleArray.push( new Circle(x, y, dx, dy, radius, color));
	}
}

console.log(circleArray);
 init();
animate();
function animate () {



	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		console.log(circleArray[i]);
		circleArray[i].update();
	}

}
