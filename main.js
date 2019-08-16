const W = 900;
const H = 600;

const canvas = new Canvas('canvas', W, H);
const game = new Game(W, H);
const ball = new Ball();
const paddle1 = new Paddle();
const paddle2 = new Paddle();
const p1Controls = new PaddleControls();
const p2Controls = new PaddleControls();
const physics = new PhysicsManager(W, H);

let animationFrameId;

function pause() {
  cancelAnimationFrame(animationFrameId);
}

function paint() {
  canvas.clear();
  canvas.fill();
  canvas.showScore(game.score);
  canvas.arc(ball);
  canvas.rect(paddle1);
  canvas.rect(paddle2);
  // game.drawBlackHoles(canvas);
}

function setup() {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const paddleW = 15;
  const paddleH = 80;

  game.score = 0;
  game.ballDx = Math.random() > 0.5 ? 5 : -5;
  game.gameOn = false;

  ball.x = centerX;
  ball.y = centerY;
  ball.r = 10;
  ball.dx = game.ballDx;
  ball.dy = 0;

  // game._createBlackHole();
  // game.drawBlackHoles(canvas);

  paddle1.x = 0
  paddle1.y = centerY - (paddleH / 3);
  paddle1.width = paddleW;
  paddle1.height = paddleH;

  paddle2.x = canvas.width - paddleW;
  paddle2.y = centerY - (paddleH / 1.5);
  paddle2.width = paddleW;
  paddle2.height = paddleH;

  p1Controls.downKeyCode = 83; // s
  p1Controls.upKeyCode = 87; // w

  p2Controls.downKeyCode = 40; // down arrow
  p2Controls.upKeyCode = 38; // up arrow
}

function main() {
  paint();
  p1Controls.notifyPaddle(paddle1);
  p2Controls.notifyPaddle(paddle2);
  physics.checkBallFloorCiel(ball);
  physics.checkPaddleFloorCiel([paddle1, paddle2]);
  const ballHitP1 = physics.checkBallPaddle(game, ball, paddle1, true);
  const ballHitp2 = physics.checkBallPaddle(game, ball, paddle2);
  // const ballX1 = ball.x;
  ball.updatePosition();
  // const ballX2 = ball.x;
  paddle1.updatePosition();
  paddle2.updatePosition();
  // const ballPassedMiddle = physics.ballPassedMiddle(ballX1, ballX2);
  // if (ballPassedMiddle) {
  //   game.maybeBlackHole();
  // }
  if (!physics.ballHitWall(ball)) {
    if (ballHitP1 || ballHitp2) {
      game.incrementScore();
    }
    animationFrameId = requestAnimationFrame(main);
  } else {
    canvas.gameOver();
  }
}

const newGameButton = document.querySelector('#new-game');
const pauseButton = document.querySelector('#pause');

newGameButton.onclick = function() {
  pauseButton.removeAttribute('disabled');
  pauseButton.setAttribute('class', 'hover-pointer');
  pauseButton.textContent = 'Pause';
  pause();
  setup();
  main();
  game.gameOn = true;
}

pauseButton.onclick = function() {
  if (game.gameOn) {
    pause();
    game.gameOn = false;
    this.textContent = 'Resume';
  } else {
    main();
    game.gameOn = true;
    this.textContent = 'Pause';
  }
}

window.onload = function() {
  setup();
  paint();
}

window.onkeydown = function(e) {
  p1Controls.keydown(e.keyCode);
  p2Controls.keydown(e.keyCode);
}

window.onkeyup = function(e) {
  p1Controls.keyup(e.keyCode);
  p2Controls.keyup(e.keyCode);
}
