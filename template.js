// This code is from Creative Coding Making Book by renona396

const detailXarray = [4,5,7];
const palette = ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"];

function setup() {
  createCanvas(1200, 750, WEBGL);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background("#E7ECF2");

  lights();
  noStroke();

  for (let i=0; i<50; i++){
    fill(random(palette));
    
    push();
    translate(
      random(-width/2, width/2),
      random(-height /2, height/2),
      random(-50, 0)
    );
    
    rotateX(random(360));
    rotateY(random(360));
    rotateZ(random(360));
  
    let cylinderRadius = random(50, 100);
    let cylinderHeight = cylinderRadius / 2;
    let cylinderDetailX = random(detailXarray);
    
    cylinder(cylinderRadius, cylinderHeight, cylinderDetailX, 1);
    pop();
  }
}