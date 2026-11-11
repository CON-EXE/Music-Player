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

songInput.addEventListener('change', (event) => {
    currentSong = event.target.files[0];

    if (currentSong) {
        const fileUrl = URL.createObjectURL(currentSong);
        audio.src = fileUrl;
        audio.volume = volumeControl.value / 100;
        nameDisplay.innerText = currentSong.name;
    }
});

audio.ontimeupdate = function() {
    progress.value = (audio.currentTime / audio.duration) * 100;
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