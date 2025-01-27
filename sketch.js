//  original 'workshop-task-2 code' by ellap4n 
//     integrating class structure to waterdrop by ltyl260

function setup() {
  tic = 0;
  background(211, 230, 232);
  createCanvas(400, 400);
  waterdrop1 = new Waterdrop(200,0,50);
  waterdrop2 = new Waterdrop(200, 0, 50);
  waterdrop3 = new Waterdrop(200, 0, 50);
  waterdrop4 = new Waterdrop(200, 0, 50);
  waterdrop5 = new Waterdrop(200, 0, 50);
  minL = 50
  print(height);
  clicked = -1;
  text('     Click to turn on water \nClick again to increase speed', 130, height/2);
}

function mousePressed() { //fixed indentation
  if (clicked == 4) { // after 1st click, furtger clicks will speed up waterdrop speed.
    clicked +=1
    x = mouseX;
    y = mouseY;
    waterdrop5 = new Waterdrop(x, 0, random(minL,y+minL));
    //waterdrop4.speedUp(); 
  }
  if (clicked == 3) { // after 1st click, furtger clicks will speed up waterdrop speed.
    clicked +=1
    x = mouseX;
    y = mouseY;
    waterdrop4 = new Waterdrop(x, 0, random(minL,y+minL));
    //waterdrop3.speedUp(); 
  }
  if (clicked == 2) { 
    clicked +=1
    x = mouseX;
    y = mouseY;
    waterdrop3 = new Waterdrop(x, 0, random(minL,y+minL));
    //waterdrop2.speedUp(); 
    
  }
  if (clicked == 1) { // after 1st click, furtger clicks will speed up waterdrop speed.
    clicked +=1
    x = mouseX;
    y = mouseY;
    waterdrop2 = new Waterdrop(x, 0, random(minL,y/4+minL));
    //waterdrop1.speedUp(); 
    
  }
  if (clicked == -1){
    clicked += 2; //has been clicked now == 1
    x = mouseX;
    y = mouseY;
    waterdrop1 = new Waterdrop(x, 0, random(minL,y+minL));
  } 
  if (clicked >=5){ // after all waterdrops have been created further clicks will speed up the drops, further clicks will speed up waterdrop speed.
    waterdrop1.speedUp();
    print(waterdrop1.velocity)
    waterdrop2.speedUp();
    waterdrop3.speedUp();
    waterdrop4.speedUp();
    waterdrop5.speedUp();
  }    
}


class Waterdrop {
  constructor(x_pos,y_pos,size){
    this.x = x_pos;
    this.y = y_pos;
    this.l = size;
    this.velocity = 0.5;
    // change velocity dependented on page size (height of 400, velocity is 0.5, if height is 600 speed should be 0.75, etc.
  }
  show(){
    //substitute variables to add water drops at different positions
    noStroke();
    fill(143, 188, 204);
    // circle(x, height, 10); 'height' is confused with the global variable for window height, chnaging to y
    circle(this.x, this.y, (this.l)/5);
    // triangle(200, height-10, 195, height, 205, height);
    triangle(this.x, this.y-(this.l/4), this.x-(this.l/10), this.y-(2/110*this.l), this.x+(this.l/10), this.y-(2/110*this.l));
  }
  drop(){ // increases drop velocity as drop falls down the page
    // chanhed conditionals so y is relative to the height if the page (always falling down the page)
    if (this.y < height/4) {
      this.y += this.velocity*3;
    } else if (this.y < height*0.3125) {
      this.y += this.velocity*4
    } else if (this.y < height/2) {
      this.y += this.velocity*5
    } else if (this.y < height*0.625) {
      this.y += this.velocity*6
    } else if (this.y < height*0.75) {
      this.y += this.velocity*7
    } else if (this.y < height*0.875) {
      this.y += this.velocity*8
    } else if (this.y < height*1.02) {
      this.y += this.velocity*9
    } else if (this.y >= height*1.02) { //fixed contidional to  match boolean grammar.
      this.y = 0;
    }
  }
  speedUp(){
    this.velocity += 0.25
  }
  animate(){
    this.show();
    this.drop();
  }
}

function draw() { 
  if (clicked != -1){
    background(211, 230, 232);
  }
  if (clicked >= 1){ //if the title card is showing then clicking mouse will start the waterdrop animation!
    waterdrop1.animate();
  }
  if (clicked >= 2){
    waterdrop2.animate();
  }
  if (clicked >= 3){
    waterdrop3.animate();
  }
  if (clicked >= 4){
    waterdrop4.animate();
  }
  if (clicked >= 5){
    waterdrop5.animate();
  }
}