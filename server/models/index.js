const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  mongoose.connection.openUri(uri).on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  require('./user');
};
