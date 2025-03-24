const $inputUserName = document.querySelector('#user-name');
const $inputUserEmail = document.querySelector('#user-email');
const $inputUserMessage = document.querySelector('#user-message');

if (!$inputUserName) throw new Error('$inputUserName is not existing');
if (!$inputUserEmail) throw new Error('$inputUserEmail is not existing');
if (!$inputUserMessage) throw new Error('$inputUserMessage is not existing');

function handleFocus(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('focus was fired');
  console.log('event.target.name:', eventTarget.name);
}

function handleBlur(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('blur was fired');
  console.log('event.target.name:', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  // console.log('event.target.name:', eventTarget.name);
  console.log('value of Name:', eventTarget.value);
}

$inputUserName.addEventListener('focus', handleFocus);
$inputUserEmail.addEventListener('focus', handleFocus);
$inputUserMessage.addEventListener('focus', handleFocus);

$inputUserName.addEventListener('blur', handleBlur);
$inputUserEmail.addEventListener('blur', handleBlur);
$inputUserMessage.addEventListener('blur', handleBlur);

$inputUserName.addEventListener('input', handleInput);
$inputUserEmail.addEventListener('input', handleInput);
$inputUserMessage.addEventListener('input', handleInput);
