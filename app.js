const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const authService = require("./utils/authService")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userApi = require("./services/users/userServices");
const productApi = require("./services/products/productServices");
const getProducts = require('./services/products/getProducts')
const db = require("./models");
db.sequelize.sync();

//Base API for checking status of API 
app.get("/", function (req, res) {
    res.send({
        status: "ON",
        message: "Api service is running!!",
    });
});

app.use("/api/", userApi);
app.use("/api/", getProducts);

app.use(authService.verifyToken, function (req, res, next) {
    authService.tokenValidation(req, res, next);
});

app.use("/api/", productApi);

app.listen(process.env.PORT || 8888, () => {
    console.log("server is up at 8888");
});