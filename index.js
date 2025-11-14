const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const allowedOrigins = ['https://projeto-ci-cd-front-ten.vercel.app']; 

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({ "mensagem": "API online e integrada com CI/CD!" });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});