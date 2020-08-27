entities = [];
starMass = 100000;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight * 0.8);
  canvas.parent("main-panel");
  canvas.style("position", "relative");
  canvas.style("order", "0");
  canvas.style("top", "0");
  background(20);
  centre = createVector(windowWidth / 2, windowHeight * 0.8 / 2); // Location of parent star
}

function draw() {
  background(20);
  noStroke();
  circle(centre.x, centre.y, sqrt(sqrt(starMass)));
  for (i = 0; i < entities.length; i++) {
      for(j = 0; j < entities.length; j++) {
          if (i != j) {
            entities[i].updateEnt(entities[j].pos, entities[j].mass);
          }
      }
      if (entities[i].pos.x > windowWidth + 2500 || entities[i].pos.x < -2500 || entities[i].pos.y < -2500 || entities[i].pos.y > windowHeight + 2500) {
        entities.splice(i, 1);
      }
      else {
        entities[i].updateEnt(centre, starMass);
        entities[i].draw();
      }
    }
}

function mouseClicked() {
  entities.push(new Celestial());
}

function windowResized(){
  centre.set(windowWidth / 2, windowHeight * 0.8 / 2);
  resizeCanvas(windowWidth, windowHeight * 0.8);
}