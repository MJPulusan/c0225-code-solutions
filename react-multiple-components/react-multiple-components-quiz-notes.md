# react-multiple-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the phases in the React design process?

1. Identify pieces that would make good components.
2. Determine the UI state that must be held in the components
3. Determine the events (actions) that need to modify state, which child components they originate in, and how parent components should respond to them.

- How does data flow in React?
  State can only flow from parent to child, as "props"

- How can children components modify state in their parents?
  By passing a callback function down to the child component via props, the child can trigger a state change in the parent without directly modifying the parent's state.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
