const mongoose = require('mongoose');

const uri = process.env.URI;
mongoose.connect(uri);
