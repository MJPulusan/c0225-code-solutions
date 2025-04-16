# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  Create - POST
  Read - GET
  Update - PUT
  Delete - DELETE

  It is not required but it makes API harder to understand and may lead to harder to maintain codes.

- What is Express middleware?
  it is a function that fulfills the requested action of the Express maps.
  it has access to the request, response and next function.

- What is Express middleware useful for?
  *Logging request.
  *Lets you read request body when clients send JSON data.

- How do you mount a middleware with an Express application?
  by using the app.use() or app.METHOD() functions in Express.

ex: app.get(), app.post()

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  the "req" - Request object, contains about the incoming HTTP request.
  the "res" - the Response object, used to send data back to the client.
  the "next" - the Next function, a callback that tells Express to move to the next middleware. (it will hang if not called.)

- How do you specify and retrieve route parameters?
  you can specify it by using ( : ) and retrieve from the req.params object.

ex: app.get('/users/:id', (req, res) => {
});

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
