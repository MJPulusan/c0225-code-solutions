# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  it is an interaction or occurrence that happens in the browser.

- What is an "event handler"? Which component declares the handler?
  a function that is executed when a specific event occurs (click, change, submit, etc.)

- How do you pass an event handler to a React component?
  as an Event Handler Prop:
  -define a handler function (handleClick) into the parent
  -it will pass as a prop (onClick) to the child component.

- What is the naming convention for event handlers?
  starts with prefix "on" and in a camelCase format.

- What is an "event handler prop"? Which component declares the prop?
  child - when an event happen, the child calls the event handler prop (handleClick) that allows it to communicate with its parents and pass data.

- What are some custom event handler props a component may wish to define?
  className, id, onClick, onSubmit and etc.

- What is the naming convention for custom event handler props?
  starts with "handle" followed by an Uppercase letter.

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
