class Game {
    constructor() {
        this.startScreen = document.getElementById('splash-screen');
        this.gameScreen = document.getElementById('game-screen');
        this.endScreen = document.getElementById('game-over-screen');
        this.player = null;
        this.obstacles = [];
        this.score = 0;
        this.lives = 5;
        this.width = 500;
        this.height = 500;
        this.left = 0;
        this.top = 0;

        this.isGameOver = false;
    }

    start() {
        this.startScreen.style.display = 'none'
        this.endScreen.style.display = 'none'
        this.gameScreen.style.display = 'block'
        this.gameScreen.style.width = `${this.width}px`
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.top = `${this.top}`
        this.gameScreen.style.left = `${this.left}`

        this.spawnObstacles();

        this.gameState = "playing";
        this.player = new Player(this.gameScreen)
        this.gameLoop();
    }

    spawnObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles.push(new Obstacle(this.gameScreen));
        }
        console.log(this.obstacles)
    }

    gameLoop() {
        console.log('animate');
        this.player.move();

        const nextObstacles = [];
        this.obstacles.forEach(currentObstacle => {
            currentObstacle.move();

            if (currentObstacle.top + currentObstacle.height < 0) {
                currentObstacle.element.remove();
            } else {
                if (this.player.didCollide(currentObstacle)) {
                    console.log('collision');
                    this.lives -= 1;
                    if (this.lives <= 0) {
                        this.isGameOver = true;
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