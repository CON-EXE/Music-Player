'use strict'

const playPause = document.querySelector('.play-pause');
const prev = document.querySelector('.back');
const next = document.querySelector('.forward');
const selectSong = document.querySelector('.select')

let currentSong = null;
let songList = null;
let songLength = 0;
let songName = "";

function getSongs() {

}

function nextSong() {

}

function prevSong() {

}

selectSong.addEventListener('click', () => {
    getSongs();
});

prev.addEventListener('click', () => {
    prevSong();
});

next.addEventListener('click', () => {
    nextSong();
});