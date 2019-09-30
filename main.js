const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var snake = {l:0,r:0,d:0,u:0,x:3,y:5,s:1}
var test = 1;


/*controls*/
document.getElementById('canvas').addEventListener('keydown', KDown);
var intervalID = window.setInterval(function()
{
move();
draw();
}, 100);

function draw(){
move();
	/*clean*/
ctx.clearRect(0, 0, canvas.width, canvas.height);
	/*outline*/
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, 250, 250);
ctx.clearRect(5, 5, 240, 240);
	/*snake*/
ctx.beginPath();
ctx.arc(snake.x*5, snake.y*5, 10, 0, Math.PI * 2, true);
ctx.fill();
	/*update pos*/

}

function move()
{
if(snake.x >= 3 && snake.x <=47 )
{
if(snake.l)snake.x -= snake.s;
if(snake.r)snake.x += snake.s;
if(snake.d)snake.y += snake.s;
if(snake.u)snake.y -= snake.s;
}
else {if (snake.x < 3){snake.x = 47;} 
	  if(snake.x > 47){snake.x = 3;}
	  
	}
}

function KDown(e)
{
if(e.code == 'ArrowLeft')
{
	snake.l = 1;
	snake.r = 0;
	snake.d = 0;
	snake.u = 0;
}
if(e.code == 'ArrowRight')
{
	snake.l = 0;
	snake.r = 1;
	snake.d = 0;
	snake.u = 0;
}
if(e.code == 'ArrowDown')
{
	snake.l = 0;
	snake.r = 0;
	snake.d = 1;
	snake.u = 0;
}
if(e.code == 'ArrowUp')
{
	snake.l = 0;
	snake.r = 0;
	snake.d = 0;
	snake.u = 1;
}
}
