const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config();
const bodyParser = require('body-parser');
//import router
const studentRoutes = require('./routes/student');

//app
const app = express();
app.use(bodyParser.json());
app.use('/', studentRoutes);

//db
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false}
  ).then(()=>{
    console.log('DB Connected');
  }).catch((err)=>{
    console.log(`DB connection error: ${err.message}`);
  });
     
const port = process.env.PORT;
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});