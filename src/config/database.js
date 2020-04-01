const mongoose = require('mongoose');
// run in windows => mongod --port 80
const uri = 'mongodb://localhost/millionUsuarios';

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose; 
