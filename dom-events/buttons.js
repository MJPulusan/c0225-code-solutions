'use strict';
const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('Error');
function handleClick(event) {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}
$clickButton.addEventListener('click', handleClick);
const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('Error');
function handleMouseover(event) {
  console.log('button-hovered');
  console.log('event', event);
  console.log('event.target', event.target);
}
$hoverButton.addEventListener('mouseover', handleMouseover);
const $doubleClickButton = document.querySelector('.double-click-button');
if (!$doubleClickButton) throw new Error('Error');
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
