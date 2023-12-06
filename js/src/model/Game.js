class Game {
    constructor() {
        this.player = new Player(); // Initialize the player instance
        this.obstacles = [];
        this.score = 0;
        this.lives = 5;
        this.gameState = "playing";
    }

    startGame() {
        this.spawnObstacles();
        this.updateScore(0);
        this.updateLives(5);
        this.gameState = "playing";
        this.gameLoop();
    }

    spawnObstacles() {
        // Number of obstacles to spawn
        const numObstacles = 50;

        for (let i = 0; i < numObstacles; i++) {
            const obstacleElement = document.createElement("div");
            obstacleElement.className = "obstacle";
            document.body.appendChild(obstacleElement);

            // Randomly position the obstacle on the screen
            const obstaclePosition = {
                x: Math.floor(Math.random() * window.innerWidth),
                y: Math.floor(Math.random() * window.innerHeight),
            };

            obstacleElement.style.left = obstaclePosition.x + "px";
            obstacleElement.style.top = obstaclePosition.y + "px";

            // Add the obstacle element to the obstacles array in the Game class
            this.obstacles.push(obstacleElement);
        }
    }

    gameLoop() {
        setInterval(() => {
            if (this.gameState === "playing") {
                // Move the player during the game loop based on the dynamic direction
                this.player.move(this.player.currentDirection);
                this.checkCollision();
            }
        }, 100);
    }

    updateScore(points) {
        this.score += points;
        // Update the score display or perform other actions here
    }

    updateLives(lives) {
        this.lives = lives;
        // Update the lives display or perform other actions here
    }

    checkCollision() {
        // Implement collision detection logic
    }
}