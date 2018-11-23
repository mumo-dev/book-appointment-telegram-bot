var mongoose = require('mongoose');

var appointmetSchema = new mongoose.Schema({
    date: String,
    time:String
});

module.exports = mongoose.model('Appointment',appointmetSchema);