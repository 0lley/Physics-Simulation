class Celestial {
    constructor() {
        this.radius = 10 + random() * 50;
        this.mass = Math.pow(this.radius, 2);
        this.pos = createVector(mouseX, mouseY);
        this.vel = createVector(2.5, 0);
        this.accel = createVector(0, 0);
        this.heading = 0;
        this.magnitude = 0;
        this.bigG = 0.02;
    }

    draw() {
        noStroke();
        circle(this.pos.x, this.pos.y, this.radius);
    }

    updateEnt(inputPos, inputMass) {
        // this.vel.add(this.mass*10000/pow((dist(baryCentre, this.pos)), 2));
        this.relX = inputPos.x - this.pos.x;
        this.relY = inputPos.y - this.pos.y;
        this.magnitude = (this.bigG * inputMass) / Math.pow(dist(this.pos.x, this.pos.y, inputPos.x, inputPos.y) + 5, 2);
        // console.log(inputMass);
        if (this.relX >= 0 && this.relY <= 0) {
            this.heading = Math.atan(abs(this.relX)/abs(this.relY));
        }
        else if (this.relX >= 0 && this.relY >= 0) {
            this.heading = Math.PI - Math.atan(abs(this.relX)/abs(this.relY));
        }
        else if (this.relX <= 0 && this.relY >= 0) {
            this.heading = Math.atan(abs(this.relX)/abs(this.relY)) + Math.PI;
        }
        else {
            this.heading = 2 * Math.PI - Math.atan(abs(this.relX)/abs(this.relY));
        }
        this.accel.set(this.magnitude * Math.sin(this.heading), this.magnitude * Math.cos(this.heading) * -1);
        this.vel.add(this.accel);
        this.pos.add(this.vel);
    }
}