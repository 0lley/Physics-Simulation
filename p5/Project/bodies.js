class Celestial {
    constructor() {
        this.radius = document.getElementById("entityMass").value;
        this.mass = Math.pow(this.radius, 2);
        this.pos = createVector(mouseX, mouseY);
        this.vel = createVector(random() * 2 * document.getElementById("velocityMag").value - document.getElementById("velocityMag").value, random() * 2 * document.getElementById("velocityMag").value - document.getElementById("velocityMag").value);
        this.accel = createVector(0, 0);
        this.heading = 0;
        this.magnitude = 0;
    }

    draw() {
        noStroke();
        circle(this.pos.x, this.pos.y, this.radius);
    } // Displays the object

    updateEnt(inputPos, inputMass) {
        this.relX = inputPos.x - this.pos.x;
        this.relY = inputPos.y - this.pos.y;
        this.magnitude = (document.getElementById("bigG").value / 10 * inputMass) / Math.pow(dist(this.pos.x, this.pos.y, inputPos.x, inputPos.y) + 5, 2); // This calculation determines the magnitude of the acceleration experienced by the object imparted by gravity
        if (this.relX >= 0 && this.relY <= 0) {
            this.heading = Math.atan(abs(this.relX)/abs(this.relY));
        } // Solution if the object is southwest of the input entity
        else if (this.relX >= 0 && this.relY >= 0) {
            this.heading = Math.PI - Math.atan(abs(this.relX)/abs(this.relY));
        } // Solution if the object is northwest of the input entity
        else if (this.relX <= 0 && this.relY >= 0) {
            this.heading = Math.atan(abs(this.relX)/abs(this.relY)) + Math.PI;
        } // Solution if the object is northeast of the input entity
        else {
            this.heading = 2 * Math.PI - Math.atan(abs(this.relX)/abs(this.relY));
        } // Solution if the object is southeast of the input entity
        this.accel.set(this.magnitude * Math.sin(this.heading), this.magnitude * Math.cos(this.heading) * -1); // Sets the acceleration of the object, and uses trigonometric vector decomposition to accomplish this
        this.vel.add(this.accel); // Changes the velocity of the object based on its acceleration
        this.pos.add(this.vel); // Changes the position of the object based on its velocity
    }
}