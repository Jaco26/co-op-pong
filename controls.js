class PaddleControls {
  constructor() {
    this.upKeyCode = null;
    this.downKeyCode = null;
    this.up = false;
    this.down = false;
  }
  keydown(keyCode) {
    switch (keyCode) {
      case this.upKeyCode:
        this.up = true;
        break;
      case this.downKeyCode:
        this.down = true;
        break;
      default:
        break;
    }
  }
  keyup(keyCode) {
    switch (keyCode) {
      case this.upKeyCode:
        this.up = false;
        break;
      case this.downKeyCode:
        this.down = false;
        break;
      default:
        break;
    }
  }
  informPaddle(paddle) {
    if (this.up && !this.down) paddle.dy = -4;
    else if (this.down && !this.up) paddle.dy = 4;
    else paddle.dy = 0;
  }
}