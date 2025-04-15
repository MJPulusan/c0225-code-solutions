import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/countries', async (req, res, next) => {
  try {
    const sql = `
  select
      "c"."countryId" as "Country ID",
      "c"."name" as "Country Name",
      count("ci"."cityId") as "Cities"
  from
      "countries" "c"
  join
      "cities" "ci" on "ci"."countryId" = "c"."countryId"
  group by
      "c"."countryId", "c"."name"
  order by
      "c"."countryId";
  `;

    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/cities/:cityId', async (req, res, next) => {
  try {
    const { cityId } = req.params;

    if (!Number(cityId)) {
      throw new ClientError(400, `cityID must be a positive integer`);
    }

    const sql = `
 select *
  from
      "cities" "ci"
  join
      "countries" "c" on "ci"."countryId" = "c"."countryId"
  where
      "ci"."cityId" = $1;
`;
    const result = await db.query(sql, [cityId]);
    const city = result.rows[0];

    if (!city) {
      throw new ClientError(404, `City with ID ${cityId} not found`);
    }
    res.json(city);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
