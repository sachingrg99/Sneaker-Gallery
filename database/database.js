const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/Sneaker_Gallery',{
    useNewUrlParser :true,
    useUnifiedTopology: true
})