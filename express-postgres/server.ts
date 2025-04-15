import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

import pg from 'pg';

// only create ONE pool for your whole server.
// Note the database name at the end of the connection string.
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const result = await db.query('select * from "films"');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const filmId = Number(req.params.filmId);
    if (!Number.isInteger(filmId) || filmId <= 0) {
      throw new ClientError(400, 'filmId must be a positive integer');
    }

    const sql = 'select * from "films" where "filmId" = $1';
    const params = [filmId];
    const result = await db.query(sql, params);
    const film = result.rows[0];

    if (!film) {
      throw new ClientError(404, `Film with ID ${'filmId'} not found`);
    }

    res.json(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/films/:filmId', async (req, res, next) => {
  try {
    const filmId = Number(req.params.filmId);
    const { title } = req.query;

    // Validate filmId
    if (!Number.isInteger(filmId) || filmId <= 0) {
      throw new ClientError(400, 'filmId must be a positive integer');
    }

    // Validate title
    if (typeof title !== 'string' || title.trim() === '') {
      throw new ClientError(
        400,
        'title is required as a non-empty query parameter'
      );
    }

    // Update the film
    const sql = `
      update "films"
      set title = $1
      where "filmId" = $2
      returning *
    `;
    const params = [title.trim(), 'filmId'];
    const result = await db.query(sql, params);
    const updatedFilm = result.rows[0];

    if (!updatedFilm) {
      throw new ClientError(404, `Film with ID ${'filmId'} not found`);
    }

    res.json(updatedFilm);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
