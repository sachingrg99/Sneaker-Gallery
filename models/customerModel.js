const mongoose = require ("mongoose");

const Customer = mongoose.model("Customer",{
    username:{
        type : String
    },
  password: {
        type: String
    },
    address :{
        type : String
    },
    phone : {
        type: String
    },
    uimage:{
        type: String
    }
}
)
module.exports = Customer;
    