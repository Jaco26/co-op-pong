
class Ball {
  constructor() {
    this.fillStyle = '#17b';
    this.strokeStyle = '#333';
    this.dx = 0;
    this.dy = 0;
    this.x = 0;
    this.y = 0;
    this.r = 0;
  }
  updatePosition() {
    this.x += this.dx;
    this.y += this.dy;
  }
}