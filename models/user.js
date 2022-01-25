var mongoose = require('mongoose');

// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection

const cardSchema = new mongoose.Schema({
  sceneType: String,
  position: Number,
  startingValue: String,
  endingValue: String,
  description: String,
})

const userSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  cards: [cardSchema]
})



module.exports = mongoose.model('User', userSchema);