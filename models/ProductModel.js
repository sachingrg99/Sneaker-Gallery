const mongoose = require("mongoose");

const Product = new mongoose.Schema({
    prodname:{
        type : String,
        required : true
    },
    proddescrip:{
        type : String
    },
    prodprice:{
        type : String
    },
    quantity:{
        type : Number
    },
    prodimage:{
        type : String
    },
    UserId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Customer'
    }
})
module.exports = mongoose.model('Product', Product);