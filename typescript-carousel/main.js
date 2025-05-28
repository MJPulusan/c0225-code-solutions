'use strict';
const $images = document.querySelectorAll('.photo-preview');
const $prev = document.querySelector('.fa-chevron-left');
const $next = document.querySelector('.fa-chevron-right');
const $indicators = document.querySelector('.indicators');
let currentIndex = 0;
let intervalId;
// Guard clause
if (!$images.length) throw new Error('No images found for carousel');
function carousel() {
  $images.forEach((img, index) => {
    img.style.display = index === currentIndex ? 'block' : 'none';
  });
  updateIndicators();
}
function nextImg() {
  currentIndex = (currentIndex + 1) % $images.length;
  carousel();
}
function prevImg() {
  currentIndex = (currentIndex - 1 + $images.length) % $images.length;
  carousel();
}
function autoSlide() {
  intervalId = setInterval(nextImg, 3000);
}
function resetSlide() {
  clearInterval(intervalId);
  autoSlide();
}
function createIndicators() {
  if (!$indicators) return;
  $images.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
      currentIndex = index;
      carousel();
      resetSlide();
    });
    $indicators.appendChild(dot);
  });
}
function updateIndicators() {
  if (!$indicators) return;
  const dots = $indicators.querySelectorAll('span');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}
// Event Listeners
$next.addEventListener('click', () => {
  nextImg();
  resetSlide();
});
$prev.addEventListener('click', () => {
  prevImg();
  resetSlide();
});
// Initialize carousel
createIndicators();
carousel();
autoSlide();
