import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DB_CONNECTION_STRING,
});

export default async function handler(req, res) {
    const { nameParam, mailParam, pwdParam, imageUrlParam, codeParam } = req.query;

    try {
        console.log(pwdParam)
        const client = await pool.connect();
        const result = await client.query('INSERT INTO users (name, type, email, password, code, image_url) values ($1, $2, $3, $4, $5, $6)', [nameParam, "user", mailParam, pwdParam, codeParam, imageUrlParam]);
        client.release();
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
