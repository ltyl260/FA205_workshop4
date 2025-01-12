let height = 0;
let waterLevel = 400;
function setup() {
  background(220);
  createCanvas(400, 400);
  text('     Click to turn on water \nClick again to increase speed', 130, 200);
}

function mousePressed() {
setTimeout(drop, 2000);
}

function drop() {
let countInterval = setInterval(waterDrop, 50);
}

function waterDrop() {
  background(220);
  noStroke();
  fill(143, 188, 204);
  circle(200, height, 10);
  triangle(200, height-10, 195, height, 205, height);
  if (height < 100) {
    height += 3;
  } else if (height < 125) {
    height += 4
  } else if (height < 200) {
    height += 5
  } else if (height < 250) {
    height += 6
  } else if (height < 300) {
    height += 7
  } else if (height < 350) {
    height += 8
  } else if (height < 420) {
    height += 9
  } else if (height = 420) {
    height = 0;
  }
}

function draw() {
}
