const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: true },
});

module.exports = recipientSchema;
