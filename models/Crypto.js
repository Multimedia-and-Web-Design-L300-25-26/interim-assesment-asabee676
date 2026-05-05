const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  symbol: {
    type: String,
    required: [true, 'Please add a symbol'],
    uppercase: true
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
  image: {
    type: String,
    required: [true, 'Please add an image URL']
  },
  change24h: {
    type: Number,
    required: [true, 'Please add the 24h change percentage']
  }
}, {
  timestamps: true // This will automatically add createdAt and updatedAt fields
});

module.exports = mongoose.model('Crypto', cryptoSchema);
