import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  filmTitle: String,
  filmYear: String,
  filmFormat: String,
  filmStars: [String],
});

export default mongoose.model('Film', Schema);
