class PhysicsManager {
  constructor(maxX, maxY) {
    this.maxX = maxX;
    this.maxY = maxY;
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
    })
  }
  checkBallFloorCiel(ball) {
    if (ball.y + ball.r > this.maxY || ball.y - ball.r < 0) {
      ball.dy = -ball.dy;
    }
  }
}