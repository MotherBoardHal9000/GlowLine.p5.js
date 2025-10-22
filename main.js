let lines;
let colors = ["rgb(33, 156, 222)", "rgb(233, 184, 36)", "rgb(255, 63, 49)"];

function setup() {
  createCanvas(800, 800);
  background(10);
  strokeWeight(6);
}

function draw() {
  if (frameCount == 1 || frameCount % 200 == 0) {
    lines = [];
    for (let i = 0; i < 50; i++) {
      lines.push(new singleLine(i));
    }
    stroke(colors[floor((frameCount / 200) % 3)]);
  }

  lines.forEach((l) => {
    l.grow();
    l.show();
  });
}

class singleLine {
  constructor(i) {
    this.x = i * 16 + 4;
    this.y1 = -5;
    this.y2 = random(-10);
    this.speed = random(1, 5);
    this.deceleration = random(0.01, 0.05);
  }

  grow() {
    this.speed -= this.deceleration;
    if (this.y2 < 600) this.y2 += this.speed;
  }

  show() {
    line(this.x, this.y1, this.x, this.y2);
  }
}