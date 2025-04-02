# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  for us to be able to check the result.

- What is the purpose of events and event handling?
  events are any actions that happen in the browser

- Are all possible parameters required to use a JavaScript method or function?
  No, not all.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  a callback function.

- What is a callback function?
  a function passed into another function as an argument.
  it allows you to write more generic and reusable code providing the flexibility of passing different functions depending on what action needs to occur.

- What object is passed into an event listener callback when the event fires?
  the event object. - passed as an argument to the event handler.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  event.target refers the event o the element that is responsible for firing the event.

- What is the difference between these two snippets of code?
  ````js
  element.addEventListener('click', handleClick);
  ```callback function is not called - it only passes the function definition to addEventListener
  ```js
  element.addEventListener('click', handleClick());
  ```the callback function is being called.
  ````

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
