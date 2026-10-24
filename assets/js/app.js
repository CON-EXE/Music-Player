'use strict'

const playPause = document.getElementById('play-pause-label');
const checkbox = document.getElementById('play-pause');
const prev = document.querySelector('.back');
const next = document.querySelector('.forward');
const selectSong = document.querySelector('select')

let currentSong = null;
const songList = [];
let songLength = 0;
let songName = "";

async function getSongs() {

}

function nextSong() {

}

function prevSong() {

}

playPause.onclick = function() {
    if (checkbox.checked) {
        playPause.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
    } else {
        playPause.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
    }
}

prev.addEventListener('click', () => {
    prevSong();
});

next.addEventListener('click', () => {
    nextSong();
});