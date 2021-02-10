import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import e from 'express';

var router = express.Router();

router.get('/riot-games/val/content', (req, res) => {
  
  const options = {
    method: 'get',
    url: process.env.RIOT_API_BASE_URL + '/val/content/v1/contents?locale=en-US',
    headers: {
      "X-Riot-Token": process.env.RIOT_API_KEY
    }
  };

  axios(options)
    .then((response) => {
      // console.log(response.data);
      res.send(response.data);
    }).catch(error => {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
    });
});

router.get('/riot-games/val/leaderboard', (req, res) => {
  console.log("Herefffsdfsdffdsfsdfffffffdddddfdddf:", req.query.actID );
  res.send(
    `I received your POST request. This is what you sent me:`,
  );
});

export default router;
