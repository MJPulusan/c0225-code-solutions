# express-static-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the Express Static middleware?
  its purpose is to serve static files like HTML, CSS, images, videos and etc.

- What does `express.static()` return?
  express.static(root, [options]) - returns root directory for which to serve static assets.
  The function determines the file to serve by combining req.url with the root dir.

- What are several examples of static files?
  HTML, CSS, Javascript, Images, Videos, Fonts, PDFs - anything that is allowed to be viewed by client.

- What is a good way to serve application images using Express?
  we use "express.static()" to serve a public folder that contains images.

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
