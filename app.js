var express = require('express');
app = express();
port = process.env.PORT || 4001;
mongoose = require('mongoose');
product = require('./Models/product_model');

bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/gift');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    limit: 10241024102420,
    type: 'application/json'
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "HEAD,GET,POST,PATCH,OPTIONS,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var routes = require('./Routes/routes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function (req, res) {
    res.status(404).send({
        url: req.originalUrl + ' Not Found'
    })
});

console.log('gift_card list RESTful API server started on: ' + port);