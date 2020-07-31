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

// GET POKEMON WITH TYPES
router.get('/full', (req, res) => {
  const queryString = `SELECT pokemon.id, pokemon.name, pokemon.description, pokemon.images, array_agg(type.description) as types FROM pokemon
            JOIN pokemon_type ON pokemon.id=pokemon_type.pokemon_id
            JOIN type ON pokemon_type.type_id=type.id
            GROUP BY pokemon.id ORDER BY pokemon.id;`;

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

module.exports = router;
