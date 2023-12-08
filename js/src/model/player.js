class Player {
    constructor() {
        this.speed = 2;
        this.position = { x: 0, y: window.innerHeight / 2 };
        this.element = null;
        this.directionX = 0;
        this.directionY = 0;
    }

    render() {
        const playerElement = document.createElement("div");
        playerElement.className = "player";
        document.body.appendChild(playerElement);
        this.element = playerElement;
    }

    move() {
        this.position.x += this.directionX * this.speed;
        this.position.y += this.directionY * this.speed;

        this.element.style.left = this.position.x + "px";
        this.element.style.top = this.position.y + "px";
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
