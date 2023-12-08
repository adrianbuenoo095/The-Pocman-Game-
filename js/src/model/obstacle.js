class Obstacle {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 40;
        this.height = 40;
        this.top = 0;
        this.left = 0;
        this.position = {
            x: Math.floor(Math.random() * window.innerWidth),
            y: Math.floor(Math.random() * window.innerHeight),
        };
        this.isActive = true;


        this.element = document.createElement("div");

        this.element.style.backgroundColor = 'red'
        this.element.style.position = 'absolute'

        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`

        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

        this.gameScreen.appendChild(this.element);


        this.element.style.left = this.position.x + "px";
        this.element.style.top = this.position.y + "px";
    }

    move() {
        this.position.x -= 1
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = this.position.x + "px";
        this.element.style.top = this.position.y + "px";
    }
}