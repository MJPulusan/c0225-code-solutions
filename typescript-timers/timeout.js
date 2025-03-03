'use strict';
const $message = document.querySelector('.message');
function helloThere() {
  if (!$message) throw new Error('!$message does not exist');
  $message.textContent = 'Hello There';
}
setTimeout(helloThere, 2000);
