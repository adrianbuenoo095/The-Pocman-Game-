class Game {
    constructor() {
        this.player = new Player();
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
        const numObstacles = 50;

        for (let i = 0; i < numObstacles; i++) {
            this.obstacles.push(new Obstacle());
        }
        console.log(this.obstacles)
    }

    gameLoop() {
        console.log('animate')
        this.player.move()
        this.obstacles.forEach(currentObstacle => {
            currentObstacle.move()
            game.player.didCollide(currentObstacle)
        })
        requestAnimationFrame(() => this.gameLoop())
    }

    updateScore(points) {
        this.score += points;
    }

    updateLives(lives) {
        this.lives = lives;
    }

    checkCollision() {
    }
}