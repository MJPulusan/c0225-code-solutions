# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  it is use to create both modal and non-modal dialog boxes.
  Modal - interrupts interaction to rest of the page.
  Non-Modal - allows interaction.

- How do you show and hide a modal dialog?
  .showModal() - to show.
  .close() - to close dialog.

- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?
  You use Props to manipulate child components. The <dialog> element has its own internal behavior and state management. While React, on the other hand, uses controlled components (props and state)

- How do you call the dialog element's functions in React?
  by using "ref" - reference to directly access the DOM element.

- How can you render nested components or JSX elements in React?
  by placing one component or JSX element inside parent element.

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
