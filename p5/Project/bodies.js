class Celestial {
    constructor() {
        this.radius = 10 + random() * 50;
        this.mass = Math.pow(this.radius, 2) * (5 + random() * 2.5);
        this.pos = createVector(mouseX, mouseY);
        this.vel = createVector(5 * random() - 2.5, 5 * random() - 2.5);
    }

    draw() {
        noStroke();
        circle(this.pos.x, this.pos.y, this.radius);
    }

    updateEnt(baryCentre) {
        // this.vel.add(this.mass*10000/pow((dist(baryCentre, this.pos)), 2));
        this.vel.add(dist(this.pos, baryCentre));
        this.pos.add(this.vel);
    }
}