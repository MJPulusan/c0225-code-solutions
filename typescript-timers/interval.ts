const $countdown = document.querySelector('.countdown-display');

if ($countdown) {
  let count = 4;

  const intervalId = setInterval(function () {
    count--;

    if (count >= 1) {
      $countdown.textContent = count.toString();
    } else {
      $countdown.textContent = '~Earth Beeeelooowww Us~';
      clearInterval(intervalId);
    }
  }, 1000);
} else {
  if (!$countdown) throw new Error('!$countdown does not exist');
}
