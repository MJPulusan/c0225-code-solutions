const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

let clickCount = 0;

$hotButton?.addEventListener('click', function () {
  clickCount++;

  $clickCount.textContent = `Click count: ${clickCount}`;

  // console.log(`Button clicked ${$clickCount} times`);

  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }

  if (clickCount < 4) {
    $hotButton.className = 'cold';
  } else if (clickCount < 7) {
    $hotButton.className = 'cool';
  } else if (clickCount < 10) {
    $hotButton.className = 'tepid';
  } else if (clickCount < 13) {
    $hotButton.className = 'warm';
  } else if (clickCount < 16) {
    $hotButton.className = 'hot';
  } else {
    $hotButton.className = 'nuclear';
  }
});
