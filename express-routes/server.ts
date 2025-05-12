import express from 'express';

const app = express();

app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.path}`);
  next();
});
// Middleware to parse JSON bodies (if needed for POST)
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/notes', (req, res) => {
  res.send('Here are all the notes.');
});

app.post('/notes/:noteId', (req, res) => {
  const noteId = req.params.noteId;
  res.send(`Received note with ID: ${noteId}`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
