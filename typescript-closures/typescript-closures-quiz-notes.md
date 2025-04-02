# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  It is determined at Script Load, at the time a function is defined at run time.

- What allows JavaScript functions to "remember" variables from their surroundings?
  Closure - it is created when a function is defined within another function, allowing the inner function to access the outer function's variables.

- What values does a closure contain?
  Variables in its own scope and from the global variables, parameters of outside function.

- When is a closure created?
  it is created whenever a function is defined inside another function that keeps a reference to its surrounding scope.
  Also, any time an inner function is returned or assigned to a variable, it retains access to its outer function’s variables.

- How can you tell if a function will be created with a closure?
  referencing to outside scope.

1. It is defined inside another function.
2. It references variables from the outer function's scope.
3. It remains accessible after the outer function has executed

- In React, what is one important case where you need to know if a closure was created?
  When a "Stale Closure" happens inside useEffect hook. As it captures an old state or prop value instead of the latest one.

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
