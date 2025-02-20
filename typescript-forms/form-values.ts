interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;

$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const $formElements = document.getElementById('input');
});
