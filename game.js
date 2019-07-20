class Game {
  constructor() {
    this.score = 0;
    this.ballDx = 0;
    this.gameOn = false;
  }
  incrementScore() {
    this.score += 1;
    if (this.score % 10 === 0) {
      this.ballDx > 0
        ? this.ballDx += 1
        : this.ballDx -= 1;
    }
  }
}