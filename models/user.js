var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email : { type: String, lowercase: true, required: true },
    forename : { type: String, default: "" },
    surname : { type: String, default: "" },
    created : { type: Date, required: true, default: Date.now }
},{
    versionKey: false
});

var user = mongoose.model('user', userSchema);

module.exports = {
  User: user
};

