*link: [https://ltyl260.github.io/FA205_workshop3.5/](https://ltyl260.github.io/workshop-task-3.5/](https://ltyl260.github.io/FA205_workshop4/)*

# Workshop 4: Interactivity
the URL for the original task is here: https://ellap4n.github.io/workshop-task-2/
original 'workshop-task-2 code' by ellap4n, integrating class structure to waterdrop by ltyl260

## Idea
I saw that ellap4n wanted to have multiple waterdrops and I knew that this could be easily achived trhough utilising classes!

## Making *multiple* water drops through classes
Now that Ive established a Waterdrop class I can create multiple waterdrops! I have done this in the setup() function, its easier to initialise objects in the begining so that they can be easily accesed once the sketch is up and running.
>  waterdrop1 = new Waterdrop(200,0,50);
>  waterdrop2 = new Waterdrop(200, 0, 50);
>  waterdrop3 = new Waterdrop(200, 0, 50);
>  waterdrop4 = new Waterdrop(200, 0, 50);
>  waterdrop5 = new Waterdrop(200, 0, 50);
I also establish a minL variabel to control the size of teh waterdrops as I want to randomly generate the size of the waterdrops with seeds based on mouseX and mouseY when clicked. 
Instantiating a class is fairly simple, its just a matter of making as much as you can into variables, to you can easily make mulptiple instances without having to hard code it each and everytime. *i.e. we set up a water drop with 4 qualities, x position, y position, length and velocity*
>class Waterdrop {
>  constructor(x_pos,y_pos,size){
>    this.x = x_pos;
>    this.y = y_pos;
>    this.l = size;
>    this.velocity = 0.5; // change velocity dependented on page size (height of 400, velocity is 0.5, if height is 600 speed should be 0.75, etc.
>  }
**within this class we can add as many functions as we like!**
this can be called within the class (this.show())  and outside of it (waterdrop1.show()) by using its object name
**show()** calls all of the information needed to display a waterdrop
To make this work on varying sizes and positions of waterdrops substitute variables to add water drops at different positions
>  show(){
>   noStroke();
>    fill(143, 188, 204);
>    // circle(x, height, 10); 'height' is confused with the global variable for window height, chnaging to y
>    circle(this.x, this.y, (this.l)/5);
>    // triangle(200, height-10, 195, height, 205, height);
>    triangle(this.x, this.y-(this.l/4), this.x-(this.l/10), this.y-(2/110*this.l), this.x+(this.l/10), this.y-(2/110*this.l));
>  }
## Conditionals for speed are now within the class in the drop() function
I kept the original IF conditonals based on the height of the water drop - but I changed the conditional statements to be in relation to the height of teh page so in theory we can have this working on multiple sized displays in the future! 
**drop()** increases drop velocity as drop falls down the page
  >I changed conditionals so y is relative to the height if the page (always falling down the page)
  >I also fixed contidional to  match boolean grammar.
 **speedUp()** function to increase velocity called when mouse is clicked
 **animate()** function to show and move the drop all at once so i have less code to write per drop.

## Cue on command
Instead of using the setTimeout function, I only generated the background when the mouse was clicked and a water drop was generated. I kept allp4n's text at the begining so that the user can understand what the website does.
I did this in **function draw()** depending on if the mouse is clicked I will only draw the background when a drop is generated by clicking. *i.e. if (clicked != -1)*
>if clicked > 1 I will start adding more water drops. I only initialised 5 so I only needed 5 if statements to generate them.
>*i.e  if (clicked >= 2){ waterdrop2.animate();} if (clicked >= 3){ waterdrop3.animate();} ...... etc*

## USER INTERACTION
I used a global variable *clicked = -1* in the setup() to keep track of mouseclicks (incrementing each time the mouse is pressed *clicked += 1;*)
function mousePressed() { //fixed indentation
>if (clicked == -1){
>    clicked += 2; //has been clicked now == 1
At initialisation the mouse has not yet been clicked and the title card is showing, I take mouse x to determine where on the x axis the drip starts from and I use y to help instantiate the size of the new waterdrop.
>    x = mouseX;
>    y = mouseY;
>    waterdrop1 = new Waterdrop(x, 0, random(minL,y+minL));
>  }
Once the mouse has been clicked I can use the same x and y variables to take in the new waterdrops cordinates and generate the size
>if (clicked == 1) { 
>    clicked +=1
>    x = mouseX;
>    y = mouseY;
>    waterdrop2 = new Waterdrop(x, 0, random(minL,y/4+minL));
>}
And repeat per how many waterdrops I have in this instance 5
>if (clicked == 2) {...} if (clicked == 2) {...} .... etc {...}if (clicked == 4) {...}

After all waterdrops have been created (5 clicks) further clicks will speed up the drops, further clicks will speed up waterdrop speed. 
>  if (clicked >=5){ 
>    waterdrop1.speedUp();
>    waterdrop2.speedUp();
>    waterdrop3.speedUp();
>    waterdrop4.speedUp();
>    waterdrop5.speedUp();
>  }    
