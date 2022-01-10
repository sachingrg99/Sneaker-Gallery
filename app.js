const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("./database/database");

const customerRoute = require("./router/customerRoute");
const productRoute = require("./router/productRoute");

app.use(productRoute);
app.use(customerRoute);


app.listen("90");