'use strict'

const playPause = document.querySelector('.play-pause');
const prev = document.querySelector('.back');
const next = document.querySelector('.forward');
const selectSong = document.querySelector('.select')

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

prev.addEventListener('click', () => {
    prevSong();
});

next.addEventListener('click', () => {
    nextSong();
});