const mongoose = require('mongoose');

//postgres://oezogxyo:mtumGeWcgDT8-OSlwgdXseF7jWdSWvtl@heffalump.db.elephantsql.com/oezogxyo
const MONGO_URI =
  'mongodb+srv://uTravel:kenny@cluster0.4ltk2.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'scratch-project',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  strCategory: { type: String, required: true },
  strArea: { type: String, required: true },
  strInstructions: { type: String, required: true },
  strTags: { type: String, required: true },
});

const UserRecipe = mongoose.model('userRecipe', recipeSchema);

const reviewSchema = new Schema({
  strReview: { type: String, required: true },
  strUsername: { type: String, required: true },
  rating: { type: String, required: true },
  recipeId: { type: Number, required: true },
});

const UserReview = mongoose.model('userReview', reviewSchema);

module.exports = {
  UserRecipe,
  UserReview,
};
