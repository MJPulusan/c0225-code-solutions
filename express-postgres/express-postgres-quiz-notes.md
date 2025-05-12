# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  to allow the Node.js application to connect to, query, and interact with a PostgreSQL database.
  Run and read SQL queries (Select, Insert, Update, Delete)

- How do you tell `pg` which database to connect to?
  by providing a connection string (connection URI) or by setting individual connection parameters.

- How do you send SQL to PostgreSQL from your Express server?

1. Create a "pg.package" to manage DB connection
2. Use await "db.query('SQL', [params])" to send SQL
3. Use the result (result.rows) to send data back to the client

- How do you access the rows that get returned from the SQL query?
  by using the .rows property on the result of the query() method.

- What must you always remember to put around your asynchronous route handlers? Why?
  to always wrap it with "try/catch" method - to make sure errors are properly handled and for easy debugging.

- What is a SQL Injection Attack and how do you avoid it in `pg`?
  it is a cyberattack where malicious SQL code is inserted into input fields to manipulate a database.
  To avoid it, we need to stop writing in dynamic queries with string concatenation or never interpolate user input directly into SQL strings.

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
