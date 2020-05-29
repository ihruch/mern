const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true},
    links: {type: mongoose.Types.ObjectId, ref: 'Link'}
})

module.exports = mongoose.model('User', userSchema)