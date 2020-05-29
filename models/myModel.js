const mongoose = require('mongoose');

const MyModel = mongoose.Schema({
    firstAttribute : String,
    secondAttribute : String
});

module.exports = mongoose.model('myModel', MyModel);