# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  async function - it creates a binding of a new async function to a given name.
  await - is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style w/o heavily configuring promise chains.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async/await - makes asynchronous code look and behave more like synchronous code, improving readability.
  .then/.catch - uses chained promises, which can sometimes lead to "promise chaining" that is harder to follow.

- When do you use `async`?
  when defining a function that needs to handle asynchronous operations and return a Promise.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  We use the await keyword to pause execution until the Promise returned either fulfilled or rejected.
  You do not use "await" if you want the promise to return immediately.

- How do you handle errors with `await`?
  using the "try...catch" method. it helps to catch and manage errors.

- What do `try`, `catch` and `throw` do? When do you use them?
  try - code will be executed first.
  catch - this will be executed if try code throws an exception.
  finally - it is always be executed before control flow exits.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  it will immediately return the promise and will not wait for it to resolve.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  "async/await"
- because syntax are easier to read and understand.
- easier to handle errors with try/catch method.

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
