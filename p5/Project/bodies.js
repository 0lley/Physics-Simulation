class Celestial {
    constructor() {
        this.radius = 10 + random() * 20;
        this.mass = floor(100 + random() * 50);
        this.pos = createVector(mouseX, mouseY);
        this.vel = createVector(5 * random() - 2.5, 5 * random() - 2.5);
    }

    draw() {
        noStroke();
        circle(this.pos.x, this.pos.y, this.radius);
    }

    updateEnt(accel) {
        this.vel.add(accel);
        this.pos.add(this.vel);
    }
}