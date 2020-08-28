entities = [];

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight * 0.8);
  canvas.parent("main-panel");
  canvas.style("position", "relative");
  canvas.style("order", "0");
  canvas.style("top", "0");
  background(5, 80);
  centre = createVector(windowWidth / 2, windowHeight * 0.8 / 2); // Location of parent star
}

function draw() {
  background(5, 80);
  noStroke();
  circle(centre.x, centre.y, sqrt(document.getElementById("starMass").value) * 0.15); // Drawing the centre star
  for (i = 0; i < entities.length; i++) {
      for(j = 0; j < entities.length; j++) {
          if (i != j) {
            entities[i].updateEnt(entities[j].pos, entities[j].mass); // Loops through every object and uses Newtonian gravity to calculate the acceleration which must be imparted on the object, unless the object is itself
          }
      }
      if (entities[i].pos.x > windowWidth + 2500 || entities[i].pos.x < -2500 || entities[i].pos.y < -2500 || entities[i].pos.y > windowHeight + 2500) {
        entities.splice(i, 1); // Removes the object if it goes too far away from the screen
      }
      else {
        entities[i].updateEnt(centre, document.getElementById("starMass").value);
        entities[i].draw(); // Updates and displays the object itself
      }
    }
}

function mouseClicked() {
    if (mouseX <= windowWidth && mouseX >= 0 && mouseY <= windowHeight * 0.8 && mouseY >= 0) {
        entities.push(new Celestial()); // Creates a new object at the mouse if it is onscreen
    }
}

function windowResized(){
  centre.set(windowWidth / 2, windowHeight * 0.8 / 2);
  resizeCanvas(windowWidth, windowHeight * 0.8);
}