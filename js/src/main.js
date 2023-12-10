

window.addEventListener('DOMContentLoaded', () => {
    const startGame = document.getElementById("splash-screen");
    const startGameButton = document.getElementById("start-game");
    const game = new Game();

    console.log("loaded");
    startGame.classList.remove("hidden");

    startGameButton.addEventListener("click", () => {
        game.start();
    });

    keyDownEvent(game);
    keyUpEvent(game);
});

function keyUpEvent(game) {
    document.addEventListener("keyup", (event) => {
        switch (event.code) {
            case "ArrowUp":
            case "ArrowDown":
                game.player.directionY = 0;
                break;
            case "ArrowRight":
            case "ArrowLeft":
                game.player.directionX = 0;
                break;
            default:
                break;
        }
    });
}

function keyDownEvent(game) {
    document.addEventListener("keydown", (event) => {
        switch (event.code) {
            case "ArrowUp":
                game.player.directionY = -1;
                break;
            case "ArrowDown":
                game.player.directionY = 1;
                break;
            case "ArrowLeft":
                game.player.directionX = -1;
                break;
            case "ArrowRight":
                game.player.directionX = 1;
                break;
            default:
                break;
        }

    });
}
