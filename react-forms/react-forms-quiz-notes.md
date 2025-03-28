# react-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do controlled components differ from uncontrolled components?
  Uncontrolled - it manages its own state. Like the component's value is managed by DOM.
  Controlled - the component that renders the component manages its state. Like an "input value" is set using a value prop.

- What are some advantages of using uncontrolled components?
  it makes the code simpler since it rely on DOM.
  no need for useState or onChange handlers.
  When working with larger form libraries, uncontrolled components can simplify integration.

- What are some advantages of using controlled components?
  the component's state becomes the "single source of truth".
  it is easier to access and manage since it is stored in React state.

- Which style do you prefer?
  I think it is best to use Controlled form if i am going to build more dynamic or larger number of forms.
  also it has instant or real-time validation.

- What two props must you pass to an input for it to be "controlled"?
  the value prop and the event handle prop.

- What are some popular npm packages for creating forms in React?
  React Hook Form
  React Final Form
  Formik

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
