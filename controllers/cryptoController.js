const Crypto = require('../models/Crypto');

// @desc    Get all cryptocurrencies
// @route   GET /api/crypto
// @access  Public
const getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find({});
    res.status(200).json({ success: true, data: cryptos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get top gainers
// @route   GET /api/crypto/gainers
// @access  Public
const getTopGainers = async (req, res) => {
  try {
    // Sort by change24h in descending order
    const cryptos = await Crypto.find({}).sort({ change24h: -1 }).limit(10);
    res.status(200).json({ success: true, data: cryptos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get new listings
// @route   GET /api/crypto/new
// @access  Public
const getNewListings = async (req, res) => {
  try {
    // Sort by createdAt in descending order
    const cryptos = await Crypto.find({}).sort({ createdAt: -1 }).limit(10);
    res.status(200).json({ success: true, data: cryptos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Add a new cryptocurrency
// @route   POST /api/crypto
// @access  Private
const addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    if (!name || !symbol || !price || !image || change24h === undefined) {
      return res.status(400).json({ success: false, message: 'Please add all fields' });
    }

    const crypto = await Crypto.create({
      name,
      symbol,
      price,
      image,
      change24h
    });

    res.status(201).json({ success: true, data: crypto });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllCryptos,
  getTopGainers,
  getNewListings,
  addCrypto,
};
