$(document).ready(function() {

    var randomNumber = Math.floor(Math.random() * 102) + 19;

    $("#random-number").html(randomNumber);

    var crystal1 = Math.floor(Math.random() * 11) + 1;
    var crystal2 = Math.floor(Math.random() * 11) + 1;
    var crystal3 = Math.floor(Math.random() * 11) + 1;
    var crystal4 = Math.floor(Math.random() * 11) + 1;

    var playerScore = 0;
    var wins = 0;
    var losses = 0;

    function reset() {

        randomNumber = Math.floor(Math.random() * 102) + 19;
        $("#random-number").html(randomNumber);

        crystal1 = Math.floor(Math.random() * 11) + 1;
        crystal2 = Math.floor(Math.random() * 11) + 1;
        crystal3 = Math.floor(Math.random() * 11) + 1;
        crystal4 = Math.floor(Math.random() * 11) + 1;

        playerScore = 0;
        $("#player-score").html(playerScore);
    }

    function win() {

        wins++;
        $("#outcome").html("You Win!!");
        $("#wins").html("Wins: " + wins);
        reset();
    }

    function lose() {

        losses++;
        $("#outcome").html("LOSER!");
        $("#losses").html("Losses: " + losses);
        reset();
    }

    $("#crystal1").on("click", function() {

        playerScore = playerScore + crystal1;
        $("#player-score").html(playerScore);

        if (playerScore === randomNumber) {
            win();
        }
        else if (playerScore > randomNumber) {
            lose();
        }
    });

    $("#crystal2").on("click", function() {

        playerScore = playerScore + crystal2;
        $("#player-score").html(playerScore);

        if (playerScore === randomNumber) {
            win();
        }
        else if (playerScore > randomNumber) {
            lose();
        }
    });

    $("#crystal3").on("click", function() {

        playerScore = playerScore + crystal3;
        $("#player-score").html(playerScore);

        if (playerScore === randomNumber) {
            win();
        }
        else if (playerScore > randomNumber) {
            lose();
        }
    });

    $("#crystal4").on("click", function() {

        playerScore = playerScore + crystal4;
        $("#player-score").html(playerScore);

        if (playerScore === randomNumber) {
            win();
        }
        else if (playerScore > randomNumber) {
            lose();
        }
    });

});