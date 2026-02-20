const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Route de test
app.get('/', (req, res) => {
  res.send('Backend OK !');
});

// Exemple utilisation clé API
const sanityToken = process.env.SANITY_TOKEN;
console.log("Token Sanity :", sanityToken);

app.listen(PORT, () => {
  console.log(`Serveur en cours sur le port ${PORT}`);
});
