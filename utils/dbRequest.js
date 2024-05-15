'use client'


import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DB_CONNECTION_STRING,
});

async function dbRequest(text, params) {
    const client = await pool.connect();
    try {
        const result = await client.query(text, params);
        return result;
    } finally {
        client.release();
    }
}

// export const dbRequest = async (text, params) => {
//     const client = await pool.connect();
//     try {
//         const result = await client.query(text, params);
//         return result;
//     } finally {
//         client.release();
//     }
// };

export async function dbRequesta(text, params) {
    const guestVerify = await dbRequest(text, params);
    return guestVerify;
}