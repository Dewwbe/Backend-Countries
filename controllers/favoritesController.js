import Favorite from '../models/Favorite.js';

export const addFavorite = async (req, res) => {
    const { email, country } = req.body;
  
    try {
      // Check if favorite already exists
      const exists = await Favorite.findOne({ 
        email, 
        'country.cca3': country.cca3 
      });
  
      if (exists) {
        return res.status(400).json({ message: 'Already added' });
      }
  
      // Create new favorite
      const fav = new Favorite({ email, country });
      await fav.save();
  
      res.status(201).json(fav);
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };



export const removeFavorite = async (req, res) => {
    const { email, cca3 } = req.body;
  
    try {
      await Favorite.findOneAndDelete({ 
        email, 
        'country.cca3': cca3 
      });
  
      res.status(200).json({ message: 'Removed' });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };

  export const getFavoritesByEmail = async (req, res) => {
    const { email } = req.params;
  
    try {
      const favorites = await Favorite.find({ email });
      res.status(200).json({ favorites });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };