# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Insert, Select, Update, Delete

- How do you add a row to a SQL table?
  "insert into" clause followed by the table name (attributes)

- How do you add multiple rows to a SQL table at once?
  insert into table_name (columnA, columnB)
  values
  (value1a, value2a)
  (value1b, value2b)

- How do you update rows in a database table?
  update clause:
  update table_name
  set "column_name" = 'value'

- How do you delete rows from a database table?
  delete from clause
  delete from table_name
  where "column_name" = 'value'

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  without it, it will consider or apply every row in a tables.

- How do you accidentally delete or update all rows in a table?
  when you accidentally deleted the whole table.

"deleted from actors"

- How do you get back the modified row without a separate `select` statement?
  by using "returning" clause.

- Why did you get an error when trying to delete certain films?
  because of foreign key constraints which it might be a reference only from other tables.

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
