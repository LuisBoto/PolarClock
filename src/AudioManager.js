var ambientMusic = new Audio("res/ambient.mp3");
ambientMusic.loop = true;

function playAmbientMusic() {
    ambientMusic.volume = 0.5;
    ambientMusic.play();
}

function stopMusic() {
    ambientMusic.pause();
}

