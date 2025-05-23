
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

dotenv.config();

const app = express();

const corsOptions = {
  origin: 'https://social-media-appliacation-frontend.vercel.app/', // ton frontend déployé
  methods: 'GET,POST,PATCH,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use('/posts', postRoutes);

export default app; // nécessaire pour Vercel
