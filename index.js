const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path')
require('dotenv').config();

app.use(cors());
app.use(express.json());


app.use(require('./routes'))
app.use('/images', express.static(path.resolve(__dirname + '/images')));


mongoose.connect(process.env.MONGO_SERVER, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

app.listen(process.env.PORT, () => {
   console.log(process.env.MONGO_SERVER)
   console.log('Connected...')
})