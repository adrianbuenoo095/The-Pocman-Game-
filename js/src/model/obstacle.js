class Obstacle {
    constructor(type) {
        this.position = {
            x: Math.floor(Math.random() * window.innerWidth),
            y: Math.floor(Math.random() * window.innerHeight),
        };
        this.type = type;
        this.isActive = true;
        this.element = document.createElement("div");
        this.element.className = "obstacle";
        document.body.appendChild(this.element);


        this.element.style.left = this.position.x + "px";
        this.element.style.top = this.position.y + "px";
    }

    move() {
        this.position.x -= 1

        this.element.style.left = this.position.x + "px";
        this.element.style.top = this.position.y + "px";
    }

    interact(player) {

    }

    update() {

    }
}