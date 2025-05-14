# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  Context allows data to be managed by one component but can be shared with multiple components.

- What values can be stored in context?
  Any Javascript values - string, number, boolean, objects, array, functions and etc.

- How do you create context and make it available to the components?

1. createContext - import { createContext } from 'react'
2. build a Provider component to wrap the app (In your root component)
3. use useContext() wherever you need the shared values

- How do you access the context values?
  by using useContext() hook. it returns the context value for the context you passed.
  it always looks for the closest provider above the component that calls it.

- When would you use context? (in addition to the best answer: "rarely")
  -You need to share state across many components (deeply nested components).
  -You want a global function accessible anywhere (addToCart(), setTheme()).
  -State needs to live outside the component tree.

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
