# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  are special functions used to add state into a component that will persist across component calls.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  1.name must start with "use" followed by an Uppercase letter.
  2.it can only be called by React component.
  3.it must always be called on the top level component.

- What is the purpose of state in React?
  it allows React to store any values that persist between component re-enders.

- Why can't we just maintain state in a local variable?
  because each time a function is called new local variables are allocated.

- What two actions happen when you call a `state setter` function?
  -State Update Scheduling
  -Component Re-Rendering

- When does the local `state variable` get updated with the new value?
  during rendering its component function gets called. then new local variables will be allocated.

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
