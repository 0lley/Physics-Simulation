entities = [];
starMass = 100;

function setup() {
  var canvas = createCanvas(windowWidth * 0.7, windowHeight);
  canvas.parent("main-panel");
  background(20);
  centre = createVector(width / 2, windowHeight / 2); // Location of parent star
}

function draw() {
  background(20);
  noStroke();
  circle(centre.x, centre.y, sqrt(starMass));
  for (i = 0; i < entities.length; i++) {
      for(j = 0; j < entities.length; j++) {
          if (i != j) {
            entities[i].updateEnt(entities[j].pos, entities[j].mass);
          }
      }
      entities[i].updateEnt(centre, starMass);
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
  centre.set((windowWidth * 0.8) / 2, windowHeight / 2);
  resizeCanvas(windowWidth * 0.7, windowHeight);
}