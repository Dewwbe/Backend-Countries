import dotenv from 'dotenv';
dotenv.config(); // ✅ Load environment variables from .env file
import cors from 'cors';
// ✅ Debug lines: Check if environment variables are loaded correctly
console.log('JWT_SECRET:', process.env.JWT_SECRET);
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import favoritesRoute from './routes/favoritesRoute.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/users', userRoutes);
app.use('/api/favorites', favoritesRoute);
const PORT = process.env.PORT || 5000;

// ✅ Debug line: check if MONGO_URI is actually loaded
console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log("MongoDB connection error:", error));