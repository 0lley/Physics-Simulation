entities = [];
starRadius = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  centre = createVector(windowWidth / 2, windowHeight / 2); // Location of parent star
  entities.push(new Celestial());
}

function draw() {
  background(20);
  noStroke();
  circle(windowWidth / 2, windowHeight / 2, starRadius);
  centre.set(windowWidth / 2, windowHeight / 2);
  for (i = 0; i < entities.length; i++) {
      for(j = 0; j < entities.length; j++) {
          if (i != j) {
            entities[i].updateEnt(entities[j].pos, entities[j].mass);
          }
      }
    entities[i].draw();
    if (entities[i].pos.x > windowWidth + 2500 || entities[i].pos.x < -2500 || entities[i].pos.y < -2500 || entities[i].pos.y > windowHeight + 2500) {
      entities.splice(i, 1);
    }
  }
}

function mouseClicked() {
  entities.push(new Celestial());
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}