class Paddle {
  constructor() {
    this.fillStyle = 'a29';
    this.strokeStyle = 'lime';
    this.dy = 0;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  }
  updatePosition() {
    this.y += this.dy;
  }
}