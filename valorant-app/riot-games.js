import express from 'express';
import bodyParser from 'body-parser';

var router = express.Router();

router.get('/riot-games/val/content', (req, res) => {
  console.log(process.env.RIOT_API_KEY);
  res.send({ express: 'Hello From Express' });
});

router.post('/riot-games/val/ranked', (req, res) => {
  console.log("Here:", req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

export default router;
