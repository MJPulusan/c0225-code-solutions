# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:

  - What does `Array.forEach` do?
    it iterates over each element in an array and executes a provided callback function.

  - What should the callback function do?
    it defines what actions to execute on each element of an array - (item, index, and array)

  - What is `Array.forEach` useful for?
    useful when you need to execute a function on each array element without creating a new array.
    ie: modifying element within an array / debugging array elements.

- `Array.map`:

  - What does `Array.map` do?
    it creates a new array by applying a callback function to each element of the array.

  - What should the callback function return?
    a new array with each element as the result of the callback.

  - What is `Array.map` useful for?
    in creating new arrays, in converting values while keeping the same array structure.

- `Array.find`:

  - What does `Array.find` do?
    it returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

  - What should the callback function return?
    It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise.

  - What is `Array.find` useful for?
    finding a specific item or returning a single matching element in an array.

- `Array.filter`:

  - What does `Array.filter` do?
    it creates a new array with all elements that pass the test implemented by the provided function.

  - What should the callback function return?
    It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.

  - What is `Array.filter` useful for?
    it can be use to select multiple items that match a specific condition. also if you want to remove an unwanted element.

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
