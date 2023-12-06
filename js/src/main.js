const game = new Game();

window.addEventListener('DOMContentLoaded', () => {
    console.log("loaded");
    const startGameButton = document.getElementById("start-game");
    const gameScreen = document.getElementById("game-screen");
    const startGame = document.getElementById("splash-screen");
    startGame.classList.remove("hidden");

    game.player.render(); // Render the player when the game is initialized

    document.addEventListener("keydown", (event) => {
        if (game.gameState === "playing") {
            console.log(event.code);
            switch (event.code) {
                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight":
                    game.player.move(event.code);
                    break;
                default:
                    break;
            }
        }
    });

    startGameButton.addEventListener("click", (event) => {
        startGame.classList.add("hidden");
        gameScreen.classList.remove("hidden");
        game.startGame();
    });
});



// const wonScreen = document.getElementById("won-screen");
// const gameOverScreen = document.getElementById("game-over-screen");

// document.getElementById("won-screen").querySelector("button").addEventListener("click", () => {
//     wonScreen.classList.add("hidden");
//     splash.classList.remove("hidden");
// });

// document.getElementById("game-over-screen").querySelector("button").addEventListener("click", () => {
//     gameOverScreen.classList.add("hidden");
//     splash.classList.remove("hidden");
// });

// const player = new Player();

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         let buttunId = event.target.id;
//         game.startGame()
//         console.log(`${buttunId} event clicked`)
//     });
//     console.log(button)
// })



// Update player position based on arrow key presses
// document.addEventListener("keydown", (event) => {
//     if (game.gameState === "playing") {
//         if (event.key === "ArrowUp") {
//             player.position.y -= 10;
//             player.element.style.top = player.position.y + "px";
//         } else if (event.key === "ArrowDown") {
//             player.position.y += 10;
//             player.element.style.top = player.position.y + "px";
//         }
//     }
// });
