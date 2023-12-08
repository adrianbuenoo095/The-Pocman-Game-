class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.endScreen = document.getElementById('game-end');
        this.player = null;
        this.obstacles = [];
        this.score = 0;
        this.lives = 5;
        this.gameState = "playing";
    }

    start() {
        this.spawnObstacles();
        this.updateScore(0);
        this.updateLives(5);
        this.gameState = "playing";
        this.player = new Player(this.gameScreen)
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
            this.player.didCollide(currentObstacle)
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