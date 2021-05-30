const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log('Connected to DB'))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

module.exports = mongoose;
