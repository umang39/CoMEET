const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/CoMEET');
mongoose.connect("mongodb+srv://abhishekpal463:Abhipal123@cluster0-wlpqz.mongodb.net/CoMEET", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error in connecting mongoDB'));
db.once('open', () => {
    console.log('connected to database::mongoDB');

});

module.exports = db;