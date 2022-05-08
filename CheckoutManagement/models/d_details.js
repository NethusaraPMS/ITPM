const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    companyName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('DeliveryDetails',postSchema);