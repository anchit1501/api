'use strict';
var mongoose=require('mongoose');
var Product= mongoose.model('Products');

exports.add_product=function(req,res){
    var new_product=new Product(req.body);
    console.log(req.body);
    new_product.save(function(err,admin){
        if(err)
        res.send(err);
    res.json(admin);
    });
     
 };