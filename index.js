import express from 'express';
import cookieParser from 'cookie-parser';

import router from './routes/index.js';

const app = express(),
      PORT = process.env.PORT || 8080;

(async _=> {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use(router);
    
    app.listen(PORT, _ => console.log(`Veleia is ready on port ${PORT}`));
})()
