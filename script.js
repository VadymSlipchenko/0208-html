document.addEventListener("DOMContentLoaded", function () {
   
    let score = 0;
    let clickButton = document.getElementById("clickButton");
    let scoreDisplay = document.getElementById("score");
    let h1 = document.querySelector("h1");

    
    function updateScore() {
        scoreDisplay.textContent = score;

       
        if (score === 1 && h1.textContent === "Clicker Game") {
            h1.textContent = "GO!!!";
        }
    }


    function animateButtonClick() {
        clickButton.style.backgroundColor = "#e74c3c"; 
        setTimeout(function () {
            clickButton.style.backgroundColor = "#3498db"; 
        }, 300);
    }

    
    clickButton.addEventListener("click", function () {
        // Increase the score
        score++;
        updateScore();

       
        animateButtonClick();
    });

    
    const gameDuration = 20; 
    let timeLeft = gameDuration;

    function updateTimer() {
        if (timeLeft <= 0) {
            
            clickButton.disabled = true;
        } else {
            timeLeft--;
            setTimeout(updateTimer, 1000);
        }
    }

    updateTimer(); 

    
    setTimeout(function () {
        clickButton.disabled = true;
        alert("Game Over! Your score: " + score);
    }, gameDuration * 1000);
});