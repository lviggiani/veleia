import express from 'express';
import sqlite3 from 'sqlite3';
import { StatusCodes } from 'http-status-codes';
import Obligatio from './Obligatio.js';

const router = express.Router();

const db = new sqlite3.Database('./db/veleia.db', err => err ? console.error(err) : console.log("DB connected"));

router.get("/obligationes", async (req, res) => res.json(await Obligatio.all(db)));




export default router;