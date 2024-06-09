const wrapperOne = document.querySelector('.wrapper-1');
const leftButton = document.querySelector('.carousel-left');
const rightButton = document.querySelector('.carousel-right');
const imageContainer = document.querySelector('.image-container');


let track = 0;

let counter = 1;

const moveImagesLeft = function () {
    if (counter < imageContainer.childElementCount) {
        counter++;
        track = track - 100;
        wrapperOne.style.marginLeft = `${track}%`;
        console.log(`${track} ${counter}`)

    }
}

const moveImagesRight = function () {
    if (counter > 1) {
        counter--;
        track = track + 100;
        wrapperOne.style.marginLeft = `${track}%`;
        console.log(`${track} ${counter}`)
    }
}

rightButton.addEventListener('click', () => {
    moveImagesLeft();
});


leftButton.addEventListener('click', () => {
    moveImagesRight();
});


document.body.addEventListener('keydown', function (event) {
    if (event.key == 'ArrowLeft') {
        moveImagesRight();
    }
});

document.body.addEventListener('keydown', function (event) {
    if (event.key == 'ArrowRight') {
        moveImagesLeft();
    }
});