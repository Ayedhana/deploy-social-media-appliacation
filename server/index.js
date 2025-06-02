
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

dotenv.config();

const app = express();

const corsOptions = {
  origin: 'https://social-media-appliacation-frontend.vercel.app', // sans slash final
  methods: 'GET,POST,PATCH,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use('/posts', postRoutes);

// ⚠️ AJOUT IMPORTANT POUR LANCER LE SERVEUR
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`✅ Serveur démarré sur http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.error('Erreur de connexion MongoDB:', error.message));
