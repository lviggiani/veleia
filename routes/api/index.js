import express from 'express';
import sqlite3 from 'sqlite3';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

const db = new sqlite3.Database('./db/veleia.db', err => err ? console.error(err) : console.log("DB connected"));

router.post("/query", (req, res) => {
    const query = req.body.query;
    if (!query) return res.status(StatusCodes.BAD_REQUEST).end();

    db.all(query, (err, rows) => 
        err ? res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err) : res.json(rows));
})

export default router;