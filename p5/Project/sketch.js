entities = [];
mass = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  centre = createVector(windowWidth / 2, windowHeight / 2); // Location of barycentre
}

function draw() {
  background(20);
  noStroke();
  circle(windowWidth / 2, windowHeight / 2, 10);
  centre.set(windowWidth / 2, windowHeight / 2);
  for (i = 0; i < entities.length; i++) {
    entities[i].updateEnt(centre, mass - entities[i].mass);
    entities[i].draw();
    if (entities[i].pos.x > windowWidth + 2500 || entities[i].pos.x < -2500 || entities[i].pos.y < -2500 || entities[i].pos.y > windowHeight + 2500) {
      mass -= entities[i].mass;
      entities.splice(i, 1);
    }
    // console.log(entities.length);
  }
//   console.log(mass);
}

function mouseClicked() {
  entities.push(new Celestial());
  mass += entities[i].mass;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}