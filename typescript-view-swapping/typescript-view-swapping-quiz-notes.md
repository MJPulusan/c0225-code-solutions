# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  the element that was clicked when an action was triggered.

- What is the effect of setting an element to `display: none`?
  element is removed or not visible to the user.

- What does the `element.matches()` method take as an argument and what does it return?
  CSS selector string and returns a boolean value.

- How can you retrieve the value of an element's attribute?
  by getAttribute() method.

- At what steps of the solution would it be helpful to log things to the console?
  inside the eventTarget.matches method - when changing tabs.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  might need to attached addEventListener to each tab.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  using dateset property.

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
