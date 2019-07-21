class Game {
  constructor() {
    this.score = 0;
    this.ballDx = 0;
    this.gameOn = false;
    this.blackHoleCount = 0;
  }
  incrementScore() {
    this.score += 1;
    if (this.score % 10 === 0) {
      this.ballDx > 0
        ? this.ballDx += 1
        : this.ballDx -= 1;
    }
  }
  createBlackHole(maxX, maxY) {
    const x = maxX / 2;
    const radius = 30;
    const yPadding = (maxY * 0.1) + radius;
    const y = Math.floor(Math.random() * (maxX - yPadding - (yPadding * 2)) + yPadding);
    return new BlackHole(x, y, radius);
  }
}