# react-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When does React re-render a component?
  React will only schedule the component to re-render if the value of the state changes.

- What are some ways to create a new, modified copy of an object?
  by immutably modifying an array or object.

- What is a good way to immutably add a value to an array?
  Array.concat() - by making a copy of the Array and then pushing the item onto the copy.

- What is a good way to immutably update a value in an array?
  Array.map() - by copying each element in the Array into a new Array, and then replacing the updated item.

- What is a good way to immutably remove a value from an array?
  Array.filter() - by copying each element in the Array into a new Array, except the one being removed.

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
