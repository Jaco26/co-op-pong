const canvas = new Canvas('canvas', 700, 500);
const ball = new Ball();
const paddle1 = new Paddle();
const paddle2 = new Paddle();
const p1Controls = new PaddleControls();
const p2Controls = new PaddleControls();

function setup() {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const paddleW = 15;
  const paddleH = 80;

  ball.x = centerX;
  ball.y = centerY;
  ball.r = 10;
  ball.dx = Math.random() > 0.5 ? 2 : -2;

  paddle1.x = 0
  paddle1.y = centerY - (paddleH / 2);
  paddle1.width = paddleW;
  paddle1.height = paddleH;

  paddle2.x = canvas.width - paddleW;
  paddle2.y = centerY - (paddleH / 2);
  paddle2.width = paddleW;
  paddle2.height = paddleH;

  p1Controls.downKeyCode = 83; // down arrow
  p1Controls.upKeyCode = 87; // up arrow

  p2Controls.downKeyCode = 40; // s
  p2Controls.upKeyCode = 38; // w
}

window.onkeydown = function(e) {
  p1Controls.keydown(e.keyCode);
  p2Controls.keydown(e.keyCode);
}
window.onkeyup = function(e) {
  p1Controls.keyup(e.keyCode);
  p2Controls.keyup(e.keyCode);
}

function main() {
  canvas.clear();
  canvas.fill();
  canvas.arc(ball);
  canvas.rect(paddle1);
  canvas.rect(paddle2);
  ball.updatePosition();
  p1Controls.informPaddle(paddle1);
  p2Controls.informPaddle(paddle2);
  paddle1.updatePosition();
  paddle2.updatePosition();
  requestAnimationFrame(main);
}

setup();
main();



