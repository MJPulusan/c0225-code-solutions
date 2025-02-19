# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  When a user clicks, it is logged to the console, showing which element was interacted with.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Because of Event Bubbling and Capturing. - when it a user clicks, it ripples through its ancestors in DOM hierarchy, from innermost to higher most.

- What DOM element property tells you what type of element it is?
  The nodeName

- What does the `element.closest()` method take as its argument and what does it return?
  'selector' string

- How can you remove an element from the DOM?
  remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  the Event Delegation ensures that the behavior is consistent across all elements.

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
