var canvas;
var ctx;
var head;
var ball;
var dots;

var leftDirection = false;
var rightDirection = true;
var upDirection = false;
var downDirection = false;
var inGame = true;    

const DOT_SIZE = 10;
const ALL_DOTS = 900;
const MAX_RAND = 29;
const DELAY = 140;
const C_HEIGHT = 400;
const C_WIDTH = 500; 
   
var x = new Array(ALL_DOTS);
var y = new Array(ALL_DOTS);

function init() {
	
	canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    loadImages();
    createSnake();
    setTimeout("gameCycle()", DELAY);
}   

function loadImages() {
    
    head = new Image();
    head.src = "head.png";    
    
    ball = new Image();
    ball.src = "dot.png"; 
}

function createSnake() {

    dots = 6;

    for (var z = 0; z < dots; z++) {
        x[z] = 50 - z * 10;
        y[z] = 50;
    }
}

function doDrawing() {
    
    ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);
    
    if (inGame) {

        for (var z = 0; z < dots; z++) {
            
            if (z == 0) {
                ctx.drawImage(head, x[z], y[z]);
            } else {
                ctx.drawImage(ball, x[z], y[z]);
            }
        }    
    } else {

        gameOver();
    }        
}

function gameOver() {
    
    ctx.fillStyle = "black";
    ctx.textBaseline = "middle"; 
    ctx.textAlign = "center"; 
    ctx.font = "normal bold 18px serif";
    
    ctx.fillText("Game over", C_WIDTH/2, C_HEIGHT/2);
}

function move() {

    for (var z = dots; z > 0; z--) {
        x[z] = x[(z - 1)];
        y[z] = y[(z - 1)];
    }
    if (leftDirection) {
        x[0] -= DOT_SIZE;
    }
    if (rightDirection) {
        x[0] += DOT_SIZE;
    }
    if (upDirection) {
        y[0] -= DOT_SIZE;
    }
    if (downDirection) {
        y[0] += DOT_SIZE;
    }
}    

function checkCollision() {

    if (y[0] >= C_HEIGHT) {
        inGame = false;
    }
    if (y[0] < 0) {
       inGame = false;
    }
    if (x[0] >= C_WIDTH) {
      inGame = false;
    }
    if (x[0] < 0) {
      inGame = false;
    }
}

function gameCycle() {
    
    if (inGame) {

        checkCollision();
        move();
        doDrawing();
        setTimeout("gameCycle()", DELAY);
    }
}

function leftTurn() {
    
    if (rightDirection) {
		upDirection = true;
		leftDirection = false;
		rightDirection = false;
		downDirection = false;
		return;
	}
	if (upDirection) {
		upDirection = false;
		leftDirection = true;
		rightDirection = false;
		downDirection = false;
		return;
	}
	if (leftDirection) {
		upDirection = false;
		leftDirection = false;
		rightDirection = false;
		downDirection = true;
		return;
	}
	// code would not work if I included another if-statement, had to use this strategy
	upDirection = false;
	leftDirection = false;
	rightDirection = true;
	downDirection = false;
	return;
} 

function rightTurn() {
    
    if (rightDirection) {
		upDirection = false;
		leftDirection = false;
		rightDirection = false;
		downDirection = true;
		return;
	}
	if (upDirection) {
		upDirection = false;
		leftDirection = false;
		rightDirection = true;
		downDirection = false;
		return;
	}
	if (leftDirection) {
		upDirection = true;
		leftDirection = false;
		rightDirection = false;
		downDirection = false;
		return;
	}
	// code would not work if I included another if-statement, had to use this strategy
	// this is if downDirection = true
	upDirection = false;
	leftDirection = true;
	rightDirection = false;
	downDirection = false;
	return;
} 