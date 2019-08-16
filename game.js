class Game {
  constructor(maxX, maxY) {
    this.score = 0;
    this.ballDx = 0;
    this.gameOn = false;
    /** @type {BlackHole[]} */
    this.blackHoles = [];

    this.maxX = maxX;
    this.maxY = maxY;
  }
  _createBlackHole() {
    const x = this.maxX / 2;
    const radius = 30;
    const yPadding = (this.maxY * 0.1) + radius;
    const y = Math.floor(Math.random() * (this.maxY - yPadding - (yPadding * 2)) + yPadding);
    this.blackHoles.push(new BlackHole(x, y, radius));
  }
  incrementScore() {
    this.score += 1;
    if (this.score % 10 === 0) {
      this.ballDx > 0
        ? this.ballDx += 1
        : this.ballDx -= 1;
    }
  }
  /** @param {Canvas} canvas */
  drawBlackHoles(canvas) {
    if (this.blackHoles.length) {
      this.blackHoles.forEach(bh => {
        const { x, y, r } = bh;
        const grd = canvas.ctx.createRadialGradient(x, y, r, x + 50, y + 50, r);
        grd.addColorStop(0, 'pink');
        grd.addColorStop(1, 'black');
        // grd.addColorStop(1, 'red');
        canvas.arc({
          ...bh,
          fillStyle: grd,
          strokeStyle: 'red',
        });
      });
    }
  }
  maybeBlackHole() {
    const idk = this.score * 0.005;
    const rando = Math.random();
    if (rando < idk) {
      this._createBlackHole()
    }
  }
}