class Game {
    constructor() {
        this.startScreen = document.getElementById('splash-screen');
        this.gameScreen = document.getElementById('game-screen');
        this.endScreen = document.getElementById('game-over-screen');
        this.player = null;
        this.obstacles = [];
        this.score = 0;
        this.lives = 5;
        this.gameState = "playing";
        this.isGameOver = false;
    }

    start() {
        this.startScreen.style.display = 'none'
        this.endScreen.style.display = 'none'
        this.gameScreen.style.display = 'block'
        this.spawnObstacles();

        this.gameState = "playing";
        this.player = new Player(this.gameScreen)
        this.gameLoop();
    }

    spawnObstacles() {
        const numObstacles = 50;

        for (let i = 0; i < numObstacles; i++) {
            this.obstacles.push(new Obstacle(this.gameScreen));
        }
        console.log(this.obstacles)
    }

    gameLoop() {
        const numObstacles = 50;
        console.log('animate');
        this.player.move();

        const nextObstacles = [];
        this.obstacles.forEach(currentObstacle => {
            currentObstacle.move();

            if (currentObstacle.top + currentObstacle.height < 0) {
                // Remove obstacle only if it
                currentObstacle.element.remove();
            } else {
                if (this.player.didCollide(currentObstacle)) {
                    console.log('collision');
                    this.lives -= 1;
                    if (this.lives <= 0) {
                        this.isGameOver = true;
                    }
                    else {
                        this.score += 10;
                    }
                } else {
                    nextObstacles.push(currentObstacle);
                }
            }
        });

        this.obstacles = nextObstacles;

        if (this.animateId % 300 === 0) {
            this.obstacles.push(new Obstacle(this.gameScreen));
        }

        console.log(this.obstacles);

        document.getElementById('score').innerText = this.score;
        document.getElementById('lives').innerText = this.lives;

        if (this.isGameOver) {
            this.gameScreen.style.display = 'none';
            this.endScreen.style.display = 'block';
            this.player.element.remove();
        } else {
            console.log(this.animateId);
            this.animateId = requestAnimationFrame(() => this.gameLoop());
        }
    }


}