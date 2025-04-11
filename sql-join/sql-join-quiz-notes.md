# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  it is a column from a table that links or a reference to the primary key of another table.

- How do you join two SQL tables? (Provide at least two syntaxes.)
  select \*
  from "table_nameA"
  join "table_nameB" using ("column");

  or join "table_nameB" on "table_nameA"

- How do you temporarily rename columns or tables in a SQL statement?
  by using alias:

select "column_nameA"."name" as "new_tableNAme"

- How do you create a one-to-many relationship between two tables?
  Parent table will have the primary key. then for the child table will have the foreign key.

Parent table:
CREATE TABLE customers (
"column_name" SERIAL PRIMARY KEY,

Child Table:
FOREIGN KEY (column_name) REFERENCES customers(column_name)

- How do you create a many-to-many relationship between two tables?
  You will create a junction table that will have the primary keys for two different tables.

CREATE TABLE student_courses (
columnA INTEGER,
columnB INTEGER,
PRIMARY KEY (columnA, columnB), <!--composite primary key -->
FOREIGN KEY (columnA) REFERENCES students(columnA),
FOREIGN KEY (columnB) REFERENCES courses(columnB)

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
