playButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();  // Play if paused
        playButton.textContent = "Pause Audio";  // Change button text to "Pause"
    } else {
        audio.pause();  // Pause if playing
        playButton.textContent = "Play Audio";  // Change button text to "Play"
    }
});
audio.volume = 0.5;  // Set volume to 50%
