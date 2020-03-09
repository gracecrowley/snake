let canvas;
let context;
let width;
let height;
let score = 0;
let ps = [];
let interval_id
let snake = {
    x : 250,
    y : 400,
    size :15

};

let obstacle = {
    x : 400,
    y : 400,
    size : 20
};

let moveRight = false;
let moveUp = false;
let moveDown = false;
let moveLeft = false;

document.addEventListener('DOMContentLoaded', init, false);

function init() {
    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    interval_id = window.setInterval(draw, 200);
    window.addEventListener('keydown', activate, false)

}

function draw() {
	/*Snake*/
	context.clearRect(0, 0, width, height);
	context.fillStyle='#DB7093';
	context.fillRect(snake.x,snake.y,snake.size,snake.size);
	/*Obstacle*/
	context.fillStyle='#008080';
	context.fillRect(obstacle.x,obstacle.y,obstacle.size,obstacle.size);

	if (snake.x >= width) {
        	stop();
        	window.alert('You Lose! Your score is ' + score);
        	return;
    	}
	if (snake.y >= height) {
        	stop();
        	window.alert('You Lose! Your score is ' + score);
        	return;
    	}
	if (snake.x + snake.size <= 0) {
        	stop();
        	window.alert('You Lose! Your score is ' + score);
        	return;
    	}
	if (snake.y + snake.size <= 0) {
        	stop();
        	window.alert('You Lose! Your score is ' + score);
        	return;
    	}
	if (collides(obstacle)) {
            score += 1;

	context.clearRect(obstacle.x,obstacle.y,obstacle.size,obstacle.size);
	obstacle.x = getRandomNumber(0, 500)
	obstacle.y =getRandomNumber(0, 500)
        }

 	if (moveRight) {
        snake.x += 15;

    }
    if (moveUp) {
        snake.y -= 15;
    }
    if (moveDown) {
        snake.y += 15;
    }
	if (moveLeft) {
        snake.x -= 15;

  }

}

function collides(obstacle) {
    if (snake.x + snake.size < obstacle.x ||
        obstacle.x + obstacle.size < snake.x ||
        snake.y > obstacle.y + obstacle.size ||
        obstacle.y > snake.y + snake.size) {
        return false;
    } else {
        return true;
    }
}

function stop() {
    clearInterval(interval_id);
    window.removeEventListener('keydown', activate)

}


function activate(event) {
	let keyCode = event.keyCode;
	moveRight = false
	moveLeft = false
	moveUp = false
	moveDown = false

	if (keyCode === 38) {
		moveUp = true
	}
	else if (keyCode === 39) {
		moveRight = true
	}
	else if (keyCode ===40) {
		moveDown = true
	}
	else if (keyCode === 37) {
		moveLeft = true
	}
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


