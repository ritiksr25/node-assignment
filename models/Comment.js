const mongoose = require('mongoose');

const CommentsSchema = mongoose.Schema({
    by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = Comment = mongoose.model('Comment', CommentsSchema);