const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");
const setting = require('./settings');

const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());

app.use('/users', require('./routes/users'));
app.use('/mypage', require('./routes/mypage'));
app.use('/qrcode', require('./routes/qrcode'));
app.use('/main', require('./routes/main'));

app.use('/uploads', express.static('uploads'));

const port = process.env.PORT || 80

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});