//import express
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require("./models/User");
require("./services/passport");

mongoose.Promise = global.Promise
mongoose.connect(keys.mongoUri, { useNewUrlParser: true });

const app = express();
require("./routes/authRoutes")(app);
require("./routes/plan")(app);

const PORT = process.env.PORT || 5000
app.listen(PORT);