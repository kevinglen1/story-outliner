var mongoose = require('mongoose');

// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection
const userSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  cards: [cardSchema]
})

const cardSchema = new mongoose.Schema({
  sceneType: String,
  position: Int,
  startingValue: String,
  endingValue: String,
  description: String,
})

module.exports = mongoose.model('Card', cardSchema);