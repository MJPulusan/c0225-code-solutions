"use strict";
const $image = document.querySelectorAll('.photo-preview');
// const $prev = document.querySelector('.fa-chevron-left');
// const $next = document.querySelector('.fa-chevron-right');
let currentIndex = 0;
let intervalId;
if (!$image.length)
    throw new Error('!$image does not exists');
function carousel() {
    $image.forEach((img, index) => {
        img.style.display =
            index === currentIndex ? 'block' : 'none';
    });
}
function nextImg() {
    currentIndex = (currentIndex + 1) % $image.length;
    carousel();
}
function prevImg() {
    currentIndex = (currentIndex - 1) % $image.length;
    carousel();
}
function autoSlide() {
    intervalId = setInterval(nextImg, 3000);
}
function resetSlide() {
    clearInterval(intervalId);
    autoSlide();
}
