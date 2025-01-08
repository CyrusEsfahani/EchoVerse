// backend/models/World.js
const mongoose = require('mongoose');

const WorldSchema = new mongoose.Schema({
    name: String,
    settings: Object, // Store customizable settings like weather, architecture, etc.
    owner: String, // User ID
});

module.exports = mongoose.model('World', WorldSchema);
