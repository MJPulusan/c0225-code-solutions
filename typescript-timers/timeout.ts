const $message = document.querySelector('.message');

function helloThere(): void {
  if (!$message) throw new Error('!$message does not exist');

  $message.textContent = 'Hello There';
}
setTimeout(helloThere, 2000);
