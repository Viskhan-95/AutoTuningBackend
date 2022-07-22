const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const path = require("path");

const cors = require("cors");

const app = express();

app.use('/images', express.static(__dirname + '/public/images'));

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

mongoose.connect(process.env.MONGO_SERVER, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

app.listen(process.env.PORT, () => {
   console.log(process.env.MONGO_SERVER)
   console.log('Connected...')
})