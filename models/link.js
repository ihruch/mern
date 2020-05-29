const mongoose = require('mongoose');

const linkSchema = mongoose.Schema({
    from: {type: String, required: [true, 'Field is required'] },
    to: {type: String, required: true, unique: true},
    code: {type: String, required: true, unique: true},
    date: {type: Date, default: Date.now},
    clicks: {type: Number, default: 0},
    owner:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}

})

module.exports = mongoose.model('Link', linkSchema)