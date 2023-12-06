class Game {
    constructor(obstacle, player) {
        this.obstacle = obstacle;
        this.player = player
        this.score = 0;
        this.gameState = ["underwater", "mushroom city", "dessert"]
    }

    startGame() {

    }

    updateScore(points) {
        this.score += points
    }

    updateGameState() {
    }

    endGame() {

    }
}