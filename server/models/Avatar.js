// backend/models/Avatar.js
const mongoose = require('mongoose');

const AvatarSchema = new mongoose.Schema({
    name: String,
    traits: [String],
});

module.exports = mongoose.model('Avatar', AvatarSchema);
