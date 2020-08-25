class Celestial {
    constructor() {
        this.radius = 10 + random() * 50;
        this.mass = Math.pow(this.radius, 2) * (5 + random() * 2.5);
        this.pos = createVector(mouseX, mouseY);
        this.vel = createVector(5 * random() - 2.5, 5 * random() - 2.5);
        this.accel = createVector(0, 0);
        this.heading = 0;
    }

    draw() {
        noStroke();
        circle(this.pos.x, this.pos.y, this.radius);
    }

    updateEnt(baryCentre) {
        // this.vel.add(this.mass*10000/pow((dist(baryCentre, this.pos)), 2));
        this.relX = baryCentre.x - this.pos.x;
        this.relY = baryCentre.y - this.pos.y;
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
        this.accel.mag();
        console.log(this.heading);
        // console.log(baryCentre);
        this.vel.add(this.accel);
        this.pos.add(this.vel);
    }
}