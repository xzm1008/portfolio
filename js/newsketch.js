var petals = []

function Petal(x, y, size) {

    this.lifespan = 255.0;
    this.x = x;
    this.y = y;
    this.size = size;

    this.display = function() {
      noStroke();
      fill(220, 152, 141, this.lifespan);
      arc(this.x, this.y, 60*this.size, 40*this.size, PI, PI+HALF_PI );
      arc(this.x-30*this.size, this.y, 60*this.size, 60*this.size, 0, HALF_PI );
    };


    this.update = function() {
      this.x += random(0, -3);
      this.y += random(0.5,3);
      this.lifespan-= random(0,1.4);
    };


    this.isFinished = function() {
      if(this.lifespan < 0 ){
        return true
      } else {
        return false;
      }
    };

     this.isTouching = function() {
      if(this.x > width || this.x < 0){
        return true;
      } else if(this.y > height || this.y < 0){
        return true;
      } else {
        return false;
      }
    };
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  canvas = createCanvas(windowWidth,windowHeight);

  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');

  canvas.parent('sketch-holder');
  canvas.position(0,0);
  canvas.style('z-index', '-1');



}


function draw() {
    background(255);

    for(var i = petals.length-1; i >= 0; i--){
      petals[i].update();
      petals[i].display();
      if(petals[i].isFinished() || petals[i].isTouching()){
        petals.splice(i, 1);
      }
    }
}





function mousePressed() {
    var p = new Petal(mouseX, mouseY, random(0.5,0.7));
    petals.push(p);

    var p2 = new Petal(mouseX+random(-50,50), mouseY+random(-50,50), random(0.7,1.5));
    petals.push(p2);

}




