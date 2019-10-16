const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    designation: { type: String, required: true },
    address: { type: String, required: true },
    interests: { type: Array, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model('User', UsersSchema);