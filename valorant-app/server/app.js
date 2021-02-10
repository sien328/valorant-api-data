import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import riotGames from './riot-games.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(riotGames);

app.listen(port, () => console.log(`Listening on port ${port}`));