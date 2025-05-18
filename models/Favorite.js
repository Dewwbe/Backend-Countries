import mongoose from 'mongoose';

const FavoriteSchema = new mongoose.Schema({
  email: { type: String, required: true },
  country: {
    name: String,
    cca3: String,
    capital: [String],
    region: String,
    population: Number,
    languages: Object,
    flags: Object,
  },
});

const Favorite = mongoose.model('Favorite', FavoriteSchema);
export default Favorite;