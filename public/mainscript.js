// This code manages the play and pause of the songs on the thumbnails of the home page
var musicBox = document.getElementById('musicBox');
var isPlaying = false;

// Ths is function will toggle between whenthe music is played and when it is paused
function togglePlay() {
    isPlaying ? musicBox.pause() : musicBox.play();
};

musicBox.onplaying = function() {
    isPlaying = true;
    document.getElementById('musicBtn').innerHTML="Pause";
};
musicBox.onpause = function() {
    isPlaying = false;
    document.getElementById('musicBtn').innerHTML="Play";
    
};