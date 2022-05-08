const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes= require('./routes/d_details');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);


const PORT = 8000;
const DB_URL = 'mongodb+srv://itp123:itp123@visioncargo.p4cvw.mongodb.net/VisionCargo?retryWrites=true&w=majority'

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
})
.catch((err) =>console.log('DB connection error',err));

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
})