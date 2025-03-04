const $image = document.querySelectorAll('.photo-preview');
// const $prev = document.querySelector('.fa-chevron-left');
// const $next = document.querySelector('.fa-chevron-right');

let currentIndex = 0;
let intervalId: number;

if (!$image.length) throw new Error('!$image does not exists');

function carousel(): void {
  $image.forEach((img, index) => {
    (img as HTMLElement).style.display =
      index === currentIndex ? 'block' : 'none';
  });
}

function nextImg(): void {
  currentIndex = (currentIndex + 1) % $image.length;
  carousel();
}

function prevImg(): void {
  currentIndex = (currentIndex - 1) % $image.length;
  carousel();
}

function autoSlide(): void {
  intervalId = setInterval(nextImg, 3000);
}

function resetSlide(): void {
  clearInterval(intervalId);
  autoSlide();
}
