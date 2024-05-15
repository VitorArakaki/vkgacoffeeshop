import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DB_CONNECTION_STRING,
});

export default async function handler(req, res) {
    const { queryParam } = req.query;

    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM coffee WHERE name = $1', [queryParam]);
        client.release();
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
