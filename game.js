class Game {
  constructor() {
    this.score = 0;
    this.ballDx = Math.random() > 0.5 ? 5 : -5;
  }
  incrementScore() {
    this.score += 1;
    if (this.score && this.score % 10 === 0) {
      this.ballDx += 1;
    }
  }
}