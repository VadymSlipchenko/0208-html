document.addEventListener("DOMContentLoaded", function () {
    // Initialize variables
    let score = 0;
    let clickButton = document.getElementById("clickButton");
    let scoreDisplay = document.getElementById("score");
    let h1 = document.querySelector("h1");

    // Function to update the score
    function updateScore() {
        scoreDisplay.textContent = score;

        // Check if the score is 1 and the text hasn't been changed yet
        if (score === 1 && h1.textContent === "Clicker Game") {
            h1.textContent = "GO!!!";
        }
    }

    // Function to animate the button on click
    function animateButtonClick() {
        clickButton.style.backgroundColor = "#e74c3c"; // Change color on click
        setTimeout(function () {
            clickButton.style.backgroundColor = "#3498db"; // Reset color
        }, 300);
    }

    // Event listener for the button click
    clickButton.addEventListener("click", function () {
        // Increase the score
        score++;
        updateScore();

        // Animate the button on click
        animateButtonClick();
    });

    // Timer for the game (you can adjust the time limit)
    const gameDuration = 20; // in seconds
    let timeLeft = gameDuration;

    function updateTimer() {
        if (timeLeft <= 0) {
            // Game over
            clickButton.disabled = true;
        } else {
            timeLeft--;
            setTimeout(updateTimer, 1000);
        }
    }

    updateTimer(); // Start the timer

    // Display "Game Over" when the timer runs out
    setTimeout(function () {
        clickButton.disabled = true;
        alert("Game Over! Your score: " + score);
    }, gameDuration * 1000);
});