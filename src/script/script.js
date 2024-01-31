// Element
const btnPlayPause = $('#book-play-btn');
const btnForward = $('#book-forw-btn');
const btnBackward = $('#book-back-btn');
const audioBook = $('#book-audio').get(0);
const titleChapter = $('#book-title');

// Control
const numberChapter = 10;
let countChapter = 1;
let statusPlay = false;

function playPauseAudio() {
    if (!statusPlay) {
        audioBook.play();
        $(btnPlayPause).removeClass("bi-play-circle-fill");
        $(btnPlayPause).addClass("bi-pause-circle-fill");
    } else {
        audioBook.pause();
        $(btnPlayPause).removeClass("bi-pause-circle-fill");
        $(btnPlayPause).addClass("bi-play-circle-fill");
    }

    statusPlay = !statusPlay;
}

function backwardAudio() {
    if (countChapter > 1)
        countChapter -= 1;
    else
        countChapter = numberChapter;

    audioBook.src = `src/assets/books/dom-casmurro/${countChapter}.mp3`;
    $(titleChapter).html(`Capítulo ${countChapter}`);
    statusPlay = false;
    playPauseAudio();
}

function forwardAudio() {
    if (countChapter < numberChapter)
        countChapter += 1;
    else
        countChapter = 1;

    audioBook.src = `src/assets/books/dom-casmurro/${countChapter}.mp3`;
    $(titleChapter).html(`Capítulo ${countChapter}`);
    statusPlay = false;
    playPauseAudio();
}

$(btnBackward).click(backwardAudio);
$(btnPlayPause).click(playPauseAudio);
$(btnForward).click(forwardAudio);