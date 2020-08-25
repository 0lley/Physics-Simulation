class Celestial {
    constructor() {
        this.radius = 10 + random() * 50;
        this.mass = Math.pow(this.radius, 2);
        this.pos = createVector(mouseX, mouseY);
        this.vel = createVector(random() * 20 - 10, random * 20 - 10);
        this.accel = createVector(0, 0);
        this.heading = 0;
        this.magnitude = 0;
        this.bigG = 0.1;
    }

    draw() {
        noStroke();
        circle(this.pos.x, this.pos.y, this.radius);
    }

    updateEnt(baryCentre, baryCentreMass) {
        // this.vel.add(this.mass*10000/pow((dist(baryCentre, this.pos)), 2));
        baryCentreMass = 100;
        this.relX = baryCentre.x - this.pos.x;
        this.relY = baryCentre.y - this.pos.y;
        this.magnitude = (this.bigG * baryCentreMass * this.mass) / Math.pow(dist(this.pos.x, this.pos.y, baryCentre.x, baryCentre.y) + 5, 2);
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
        this.accel.set(this.magnitude * Math.sin(this.heading) * -1, this.magnitude * Math.cos(this.heading));
        this.vel.sub(this.accel);
        this.pos.add(this.vel);
    }
}