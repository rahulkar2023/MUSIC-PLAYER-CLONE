// script.js

const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeDisplay = document.getElementById('current-time');
const durationTimeDisplay = document.getElementById('duration-time');

// Play button event
playButton.addEventListener('click', () => {
    audioPlayer.play();
    updateSongInfo();
});

// Pause button event
pauseButton.addEventListener('click', () => {
    audioPlayer.pause();
});

// Progress bar update
audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;

    // Update time
    const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
    const currentSeconds = Math.floor(audioPlayer.currentTime % 60);
    const durationMinutes = Math.floor(audioPlayer.duration / 60);
    const durationSeconds = Math.floor(audioPlayer.duration % 60);
    currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
    durationTimeDisplay.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
});

// Allow scrubbing with progress bar
progressBar.addEventListener('input', () => {
    const scrubTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = scrubTime;
});

function updateSongInfo() {
    // Add functionality for updating the song title, artist, and album art dynamically
}