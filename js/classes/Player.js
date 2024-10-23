class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.width = 100;
    this.height = 100;
    this.gravity = 1;
    this.jumpStrength = 10; 
    this.isGrounded = true;
  }

  update() {
    // Apply gravity
    this.velocity.y += this.gravity;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Ground check
    if (this.position.y + this.height >= canvasHeight) {
      this.position.y = canvasHeight - this.height;
      this.velocity.y = 0; 
      this.isGrounded = true; 
    } else {
      this.isGrounded = false; 
    }
  }

  jump() {
    if (this.isGrounded) {
      this.velocity.y = -this.jumpStrength; 
      this.isGrounded = false; 
    }
  }

  draw() {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
