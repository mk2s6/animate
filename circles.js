const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener('resize', function () {
	canvas.width = window.innerWidth;	
	canvas.height = window.innerHeight;
	
	init();
});	


function Circle (x, y, dy, radius) {

	this.x = x;
	this.y = y;
	this.dy = dy;
	this.radius = radius;
	this.draw = function  () {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0 , Math.PI * 2, false);
		c.stroke();
		c.strokeStyle = 'white';

	}

	this.update = function  () {
		

		this.y -= this.dy;
		
		this.draw();	
		if (this.y <= 0) {
			this.y = innerHeight + radius;
		}
	}
}


var circleArray = [];
function init () {
	circleArray = [];
	for (var i = 0; i < 100 ; i++) {
		
		var radius = (Math.random() * 15) + 4;
		var x = Math.random() * (innerWidth - (radius * 2)) + radius;
		var y = Math.random() * (innerHeight - (radius * 2)) + radius;
		var dy = Math.random()+ 0.1;
			
		circleArray.push( new Circle(x, y, dy, radius));
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