var express     = require('express');
var bodyParser  = require('body-parser');
var path        = require('path');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

const PORT = 8000 || process.env.PORT;
var DB = "mongodb://localhost:27017/tododb";

var app = express();
app.use(morga('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(DB, function (err){
    if(err){
        return err;
    }else{
        console.log('successfully connected to '+DB);
    }
});
