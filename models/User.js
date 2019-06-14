const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    designation: { type: String },
    address: { type: String },
    interests: { type: Array, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model('User', UsersSchema);