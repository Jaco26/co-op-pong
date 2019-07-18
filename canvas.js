
class Canvas {
  constructor(selector, width, height) {
    this.fillStyle = '#abcd';
    this.canvas = document.querySelector(selector);
    this.width = this.canvas.width = width;
    this.height = this.canvas.height = height;
    /** @type {CanvasRenderingContext2D} */
    this.ctx = this.canvas.getContext('2d');
  }
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  fill() {
    this.ctx.fillStyle = this.fillStyle;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
  gameOver() {
    this.ctx.strokeStyle = 'red';
    this.ctx.font = "24px Georgia"
    this.ctx.strokeText(
      "Game Over", 
      this.width / 2 - 80,
      this.height / 2
    );
  }
  draw(config, callback) {
    this.ctx.beginPath();
    this.ctx.fillStyle = config.fillStyle;
    this.ctx.strokeStyle = config.strokeStyle;
    callback();
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
  }
  arc(config) {
    this.draw(config, () => {
      this.ctx.arc(config.x, config.y, config.r, 0, Math.PI * 2);
    });
  }
  rect(config) {
    this.draw(config, () => {
      this.ctx.rect(config.x, config.y, config.width, config.height);
    });
  }
}