'use strict'

const playPause = document.getElementById('play-pause-label');
const checkbox = document.getElementById('play-pause');
const prev = document.querySelector('.back');
const next = document.querySelector('.forward');
const songInput = document.getElementById('select')
const nameDisplay = document.querySelector('.song-name');
const volumeControl = document.getElementById('volume');

let currentSong = null;
let audioPlayer = null;
const songList = [];
let songLength = 0;
let songName = "";
let volume = .5;

songInput.addEventListener('change', (event) => {
    currentSong = event.target.files[0];

    if (currentSong) {
        console.log("Song selected: ", currentSong.name);
        console.log("Stored variable: ", currentSong);
        
        const fileUrl = URL.createObjectURL(currentSong);
        audioPlayer = new Audio(fileUrl);
        audioPlayer.volume = volumeControl.value / 100;

        nameDisplay.innerText = currentSong.name;
    }
});

volumeControl.oninput = function() {
    if (currentSong) {
        audioPlayer.volume = volumeControl.value / 100;
        console.log(audioPlayer.volume);
    }
}

function nextSong() {

}

function prevSong() {

}

playPause.onclick = function() {
    if (audioPlayer) {
        if (checkbox.checked) {
            playPause.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
            audioPlayer.pause();
        } else {
            playPause.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
            audioPlayer.play();
        }
    }
}

prev.addEventListener('click', () => {
    prevSong();
});

next.addEventListener('click', () => {
    nextSong();
});