const $inputUserName = document.querySelector('#user-name');
const $inputUserEmail = document.querySelector('#user-email');
const $inputUserMessage = document.querySelector('#user-message');

function handleFocus(event: Event): void {
  const eventTarget = event.target as HTMLInputElement;
  console.log('focus was fired');
  console.log('event.target.name:', eventTarget.name);
}

function handleBlur(event: Event): void {
  const eventTarget = event.target as HTMLInputElement;
  console.log('blur was fired');
  console.log('event.target.name:', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement;
  console.log('event.target.name:', eventTarget.name);
}

$inputUserName?.addEventListener('focus', handleFocus);
$inputUserEmail?.addEventListener('focus', handleFocus);
$inputUserMessage?.addEventListener('focus', handleFocus);

$inputUserName?.addEventListener('blur', handleBlur);
$inputUserEmail?.addEventListener('blur', handleBlur);
$inputUserMessage?.addEventListener('blur', handleBlur);

$inputUserName?.addEventListener('input', handleInput);
$inputUserEmail?.addEventListener('input', handleInput);
$inputUserMessage?.addEventListener('input', handleInput);
