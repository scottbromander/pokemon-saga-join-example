const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const pokemonRouter = require('./routes/pokemon.router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('build'));

// ROUTES!
app.use('/api/pokemon', pokemonRouter);
//

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT: ${PORT}`);
});
