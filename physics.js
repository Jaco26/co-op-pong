class PhysicsManager {
  constructor(maxX, maxY) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.centerX = this.maxX / 2;
    this.centerY = this.maxY / 2;
    this.leftCenter = this.centerX - this.maxX * 0.2;
    this.rightCenter = this.centerX + this.maxX * 0.2;
  }
  _ballPaddleCheckX(ball, paddle, isLeftPaddle) {
    return isLeftPaddle
      ? ball.x - ball.r < paddle.x + paddle.width
      : ball.x + ball.r > paddle.x;
  }
  _ballPaddleDyMod(ball, paddle) {
    const paddleCenter = paddle.y + paddle.height / 2;
    return (ball.y - paddleCenter) / 10;
  }
  checkPaddleFloorCiel(paddles) {
    paddles.forEach(paddle => {
      if (paddle.y + paddle.height > this.maxY) {
        paddle.dy = 0;
        paddle.y = this.maxY - paddle.height;
      } else if (paddle.y < 0) {
        paddle.dy = 0;
        paddle.y = 0;
      }
    });
  }
  checkBallFloorCiel(ball) {
    if (ball.y + ball.r > this.maxY) {
      ball.y = this.maxY - (ball.r + 1); // ensure that ball clears floor to prevent sticking
      ball.dy = -ball.dy;
    } else if (ball.y - ball.r < 0) {
      ball.y = 0 + (ball.r + 1);
      ball.dy = -ball.dy;
    }
  }
  checkBallPaddle(game, ball, paddle, isLeftPaddle) {
    if (
      ball.y < paddle.y + paddle.height
      && ball.y > paddle.y
      && this._ballPaddleCheckX(ball, paddle, isLeftPaddle)
    ) {
      ball.dy = this._ballPaddleDyMod(ball, paddle);
      game.ballDx = -game.ballDx;
      ball.dx = game.ballDx;
      ball.x = ball.dx + (isLeftPaddle ? paddle.width : paddle.x) // ensure ball clears paddle to prevent sticking
      return true;
    }
    return false;
  }
  ballHitWall(ball) {
    return ball.x + ball.r > this.maxX || ball.x - ball.r < 0;
  }
  ballPassedMiddle(ballX1, ballX2) {
    return (ballX1 > this.leftCenter && ballX2 <= this.leftCenter)
      || (ballX1 < this.rightCenter && ballX2 >= this.rightCenter);
  }
}