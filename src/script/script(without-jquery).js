// Element
const btnPlayPause = document.getElementById('book-play-btn');
const btnForward = document.getElementById('book-forw-btn');
const btnBackward = document.getElementById('book-back-btn');
const audioBook = document.getElementById('book-audio');
const titleChapter = document.getElementById('book-title');

// Control
const numberChapter = 10;
let countChapter = 1;
let statusPlay = false;

function playPauseAudio() {
    if (!statusPlay) {
        audioBook.play();
        btnPlayPause.classList.remove('bi-play-circle-fill');
        btnPlayPause.classList.add('bi-pause-circle-fill');
    } else {
        audioBook.pause();
        btnPlayPause.classList.remove('bi-pause-circle-fill');
        btnPlayPause.classList.add('bi-play-circle-fill');
    }

    statusPlay = !statusPlay;
}

function backwardAudio() {
    if (countChapter > 1)
        countChapter -= 1;
    else
        countChapter = numberChapter;

    audioBook.src = `src/assets/books/dom-casmurro/${countChapter}.mp3`;
    titleChapter.innerText = "Capítulo " + countChapter;
    statusPlay = false;
    playPauseAudio();
}

function forwardAudio() {
    if (countChapter < numberChapter)
        countChapter += 1;
    else
        countChapter = 1;

    audioBook.src = `src/assets/books/dom-casmurro/${countChapter}.mp3`;
    titleChapter.innerText = "Capítulo " + countChapter;
    statusPlay = false;
    playPauseAudio();
}

btnBackward.addEventListener('click', backwardAudio);
btnPlayPause.addEventListener('click', playPauseAudio);
btnForward.addEventListener('click', forwardAudio);