let gamePattern = [];
let wrongAudioElement = new Audio("sounds/wrong.mp3");
let buttonColors = ["green", "red", "yellow", "blue"];
let buttonSound = ["sounds/green.mp3", "sounds/red.mp3", "sounds/yellow.mp3", "sounds/blue.mp3"]
let level = 0;
let start = 1;
let count;
let highest_score = 0;
$(".highest-user-score").hide();
for (let i = 0; i < 4; i++) {
    $("#" + buttonColors[i]).click(() => {
        let audioElement = new Audio(buttonSound[i]);
        $("#" + buttonColors[i]).fadeOut().fadeIn();
        if (start == 1) {
            audioElement.play();
            gamePattern.push(buttonColors[i]);
            start = 0;
            count = 0;
        }
        if (count == 0) {
            level++;
            count = level;
            $("#level-title").text("Level: " + level);
        }
        else {
            if (gamePattern[level - count] == buttonColors[i]) {
                audioElement.play();
                count--;
                if (count == 0) {
                    start = 1;
                }
            }
            else {
                wrongAudioElement.play();
                $("#level-title").text("Game Over");
                if (highest_score == 0 || level > highest_score) {
                    $(".highest-user-score").show();
                    $("#user-score").text("Your score is: " + level);
                }
            }
        }



    })
}

