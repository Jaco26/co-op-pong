class PhysicsManager {
  constructor(maxX, maxY) {
    this.maxX = maxX;
    this.maxY = maxY;
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
    if (ball.y + ball.r > this.maxY || ball.y - ball.r < 0) {
      ball.dy = -ball.dy;
    }
  }
  checkBallPaddle(ball, paddle, isLeftPaddle) {
    if (
      ball.y < paddle.y + paddle.height
      && ball.y > paddle.y
      && this._ballPaddleCheckX(ball, paddle, isLeftPaddle)
    ) {
      ball.dy = this._ballPaddleDyMod(ball, paddle);
      ball.dx = -ball.dx;
      return true;
    }
    return false;
  }
  ballHitWall(ball) {
    if (ball.x + ball.r > this.maxX || ball.x - ball.r < 0) {
      return true;
    }
  }
}