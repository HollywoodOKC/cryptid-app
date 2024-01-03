const mongoose = require('mongoose');

const CryptidSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    updated_date: {
        type: Date,
        default: Date.now
    },
    cryptidOfMonth: {
        type: Boolean,
        default: false
    }
});

module.exports = Cryptid = mongoose.model('cryptid', CryptidSchema);