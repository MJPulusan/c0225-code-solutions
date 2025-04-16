import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

// READ
app.get('/api/grades', async (req, res, next) => {
  try {
    const result = await db.query(`SELECT * FROM "grades"`);
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

// READ
app.get(`/api/grades/:gradeId`, async (req, res, next) => {
  try {
    const { gradeId } = req.params;

    if (!Number(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }

    const result = await db.query(
      `SELECT * FROM "grades" WHERE "gradeId" = $1`,
      [gradeId]
    );

    const grade = result.rows[0];

    if (!grade) {
      throw new ClientError(404, `Grade with ID ${gradeId} not found`);
    }

    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

// CREATE
app.post(`/api/grades`, async (req, res, next) => {
  try {
    const { name, course, score } = req.body;

    if (
      typeof name !== 'string' ||
      typeof course !== 'string' ||
      !Number(+score) ||
      score < 0 ||
      score > 100
    ) {
      throw new ClientError(
        400,
        'Invalid input. "name", "course", and "score" (0 to 100) are required.'
      );
    }

    const sql = `
      INSERT INTO
        "grades" ("name", "course", "score")
      VALUES
        ($1, $2, $3)
      RETURNING *;
    `;

    const result = await db.query(sql, [name, course, score]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

// UPDATE
app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    // const gradeId = req.params;
    const gradeId = Number(req.params.gradeId);
    const { name, course, score } = req.body;

    validateGradeId(gradeId);

    if (
      typeof name !== 'string' ||
      typeof course !== 'string' ||
      !Number(+score) ||
      score < 0 ||
      score > 100
    ) {
      throw new ClientError(
        400,
        'Invalid input. "name", "course", and "score" (0 to 100) are required.'
      );
    }

    const sql = `
      UPDATE "grades"
      SET "name" = $1, "course" = $2, "score" = $3
      WHERE "gradeId" = $4
      RETURNING *;
    `;

    const result = await db.query(sql, [name, course, score, gradeId]);
    const updatedGrade = result.rows[0];

    if (!updatedGrade) {
      throw new ClientError(404, `Grade with ID ${gradeId} not found`);
    }

    res.status(200).json(updatedGrade);
  } catch (err) {
    next(err);
  }
});

// DELETE
app.delete(`/api/grades/:gradeId`, async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);

    validateGradeId(gradeId);

    const sql = `
      DELETE FROM "grades"
      WHERE "gradeId" = $1
      RETURNING *;
    `;

    const result = await db.query(sql, [gradeId]);
    const deletedGrade = result.rows[0];

    if (!deletedGrade) {
      throw new ClientError(404, `Grade with ID ${gradeId} not found`);
    }

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});

function validateGradeId(gradeId: number): void {
  if (!Number(+gradeId)) {
    throw new ClientError(400, 'Invalid gradeId');
  }
}
