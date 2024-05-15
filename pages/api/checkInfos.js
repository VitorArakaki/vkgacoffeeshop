import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DB_CONNECTION_STRING,
});

export default async function handler(req, res) {
    const { codeParam, mailParam } = req.query;

    try {
        const client = await pool.connect();
        const result_codes = await client.query('SELECT * FROM codes WHERE code = $1', [codeParam]);
        const result_mails = await client.query('SELECT * FROM users WHERE email = $1', [mailParam]);
        const final_result = []

        if (result_codes.rows.length > 0) {
            final_result.push(true)
        } else {
            final_result.push(false)
        }

        if (result_mails.rows.length > 0) {
            final_result.push(true)
        } else {
            final_result.push(false)
        }

        client.release();
        res.status(200).json(final_result);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
