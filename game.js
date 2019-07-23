class Game {
  constructor() {
    this.score = 0;
    this.ballDx = 0;
    this.gameOn = false;
    /** @type {BlackHole[]} */
    this.blackHoles = [];
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
    const y = Math.floor(Math.random() * (maxY - yPadding - (yPadding * 2)) + yPadding);
    this.blackHoles.push(new BlackHole(x, y, radius));
  }
  /** @param {Canvas} canvas */
  drawBlackHoles(canvas) {
    this.blackHoles.forEach(bh => {
      canvas.arc({
        ...bh,
        fillStyle: 'black',
        strokeStyle: 'red',
      });
    });
  }
}