entities = [];
mass = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  baryCentre = createVector(windowWidth / 2, windowHeight / 2); // Location of barycentre
}

function draw() {
  background(20);
  noStroke();
  circle(windowWidth / 2, windowHeight / 2, 100);
  baryCentre.set(windowWidth / 2, windowHeight / 2);
  for (i = 0; i < entities.length; i++) {
    entities[i].updateEnt(baryCentre);
    entities[i].draw();
    if (entities[i].pos.x > windowWidth + 1000 || entities[i].pos.x < -1000 || entities[i].pos.y < -1000 || entities[i].pos.y > windowHeight + 1000) {
      mass -= entities[i].mass;
      entities.splice(i, 1);
    }
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