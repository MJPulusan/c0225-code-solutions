# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?
  It returns a promise that resolves to the Response object representing the outcome of the request.

- What is the default request method used by `fetch()`?
  it is the GET method.

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  you must pass an options object as teh second argument to fetch(), setting the method property to 'GET'

- How does `fetch` report errors?
  It considers a promise resolved even if the server responds with an error status code. it only fails if there are network related issues.

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
