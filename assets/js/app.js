'use strict'

const audio = document.getElementById('audio');
const playPause = document.getElementById('play-pause-label');
const checkbox = document.getElementById('play-pause');
const prev = document.querySelector('.back');
const next = document.querySelector('.forward');
const songInput = document.getElementById('select')
const nameDisplay = document.querySelector('.song-name');
const volumeControl = document.getElementById('volume');
const progress = document.getElementById('progress');

let currentSong = null;
const songList = [];
let songName = "";

// Without this the ontimeupdate will go to war with the onchange and thats just a pain
let progressClick = false;

songInput.addEventListener('change', (event) => {
    currentSong = event.target.files[0];

    if (currentSong) {
        const fileUrl = URL.createObjectURL(currentSong);
        audio.src = fileUrl;
        audio.volume = volumeControl.value / 100;
        nameDisplay.innerText = currentSong.name;
        progress.value = 0;
    }
});

audio.ontimeupdate = function() {
    if (!progressClick) {
        progress.value = (audio.currentTime / audio.duration) * 100;
    }
}

progress.addEventListener('pointerdown', () => {
    progressClick = true;
});

progress.addEventListener('pointerup', () => {
    progressClick = false;
});

progress.onchange = function() {
    if (currentSong) {
        audio.currentTime = (progress.value / 100) * audio.duration;
    }
    progressClick = false;
}

volumeControl.oninput = function() {
    if (currentSong) {
        audio.volume = volumeControl.value / 100;
    }
}

playPause.onclick = function() {
    if (currentSong) {
        if (checkbox.checked) {
            playPause.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
            audio.pause();
        } else {
            playPause.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
            audio.play();
        }
    }
}