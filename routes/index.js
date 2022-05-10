import express from 'express';

import api from './api/index.js';

const router = express.Router();

router.use("/api", api);

router.use("/vee", express.static("vee/src"));

router.use("/", express.static("public"));
router.get("/", (req, res) => res.redirect("/index.html"));

export default router;