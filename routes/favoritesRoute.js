import express from 'express';
import {
  addFavorite,
  removeFavorite,
  getFavoritesByEmail,
} from '../controllers/favoritesController.js';

const router = express.Router();

router.post('/add', addFavorite);
router.post('/remove', removeFavorite);
router.get('/:email', getFavoritesByEmail);

export default router;
