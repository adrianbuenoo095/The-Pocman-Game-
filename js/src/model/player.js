class Player {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.speed = 2;
        this.position = { x: 0, y: window.innerHeight / 2 };
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("div");
        this.className = "player";
        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.position.x += this.directionX * this.speed;
        this.position.y += this.directionY * this.speed;

    }

    updatePosition() {
        this.element.style.left = `${this.position.x}px`;
        this.element.style.top = `${this.position.y}px`;
    }

    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect()
        const obstacleRect = obstacle.element.getBoundingClientRect()

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            console.log('collision')
            return true
        } else {
            return false
        }
    }
}
