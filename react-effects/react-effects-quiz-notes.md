# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  when it is first added to DOM and drawn on the page.

- What is a React Effect?
  a side effect that happens after rendering.

- When should you use an Effect and when should you not use an Effect?
  you can use it when you need to transform data for rendering and connecting to an external system.
  you don't need it if you're not trying to transform data.

- When do Effects run?
  After the components get mounted, after every update of dependencies.

- What function is used to declare an Effect?
  "useEffect" hook.

- What are Effect dependencies and how do you declare them?
  useEffect contains two arguments, the main code run as a side effect and an optional array of dependencies.
  it allows you to specify which values the effect depends on.

- Why would you want to clean up from an Effect?
  by using the useEffect cleanup, it allows us to tidy up our code before our component unmounts.

- How do you clean up from an Effect?
  by returning cleanup function inside the useEffect hook.

- When does the cleanup function run?
  "useEffect cleanup" function runs when our component wants to unmount
  it also runs right before the execution of the next scheduled effect.

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
