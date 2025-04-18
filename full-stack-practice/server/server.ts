import 'dotenv/config';
import express from 'express';
import { errorMiddleware, ClientError } from './lib/index.js';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      SELECT *
      FROM "products"
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    if (!Number.isInteger(productId) || productId < 1) {
      throw new ClientError(400, 'productId must be a positive integer');
    }

    const sql = `
      SELECT *
      FROM "products"
      WHERE "productId" = $1
    `;
    const result = await db.query(sql, [productId]);
    const product = result.rows[0];

    if (!product) {
      throw new ClientError(404, `Product with ID ${productId} not found`);
    }

    res.json(product);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
