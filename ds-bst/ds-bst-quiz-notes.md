# ds-bst-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Binary Search Tree data structure.
  it is a tree-style data structure where in nodes should only have 1 or at most 2 children.

- What are some examples of when you would use a Binary Search Tree?
  when we want to maintain items in sorting order.
  examples:
  Finding all products within a price range in a catalog.
  Looking up an element in our phone contacts where each entry is sorted alphabetically.

- How do you determine if an element is in a Binary Search Tree? What is its time complexity?
  by doing Binary search approach - making sure smaller number should be in the left child and higher number is in the right child. keep repeating until value is found.
  Complexity will depend on the height of the tree. - 0(log n).

- How do you add an element into a Binary Search Tree? What is its time complexity?
  Start at the root, compare target value with the current node. If smaller, it should go to the left and if it is bigger, it should be in the right.
  complexity - 0(log n)

- How do you remove an element from a Binary Search Tree? What is its time complexity?
  by setting to "null" the corresponding parent if no children. if there's 2 children, replace the value to be deleted with smallest node in the right child.
  time complexity - 0(log n)

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
