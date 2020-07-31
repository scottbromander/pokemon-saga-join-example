const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET ALL POKEMON
router.get('/', (req, res) => {
  const queryString = `SELECT * FROM pokemon`;

  pool
    .query(queryString)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET ALL TYPES

// GET POKEMON WITH TYPES

module.exports = router;
