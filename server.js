var express     = require('express');
var bodyParser  = require('body-parser');
var path        = require('path');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var mainRouter  = require('./routes/index');
var apiRouter  = require('./routes/api'); 

const PORT = 8000 || process.env.PORT;
var DB = "mongodb://localhost:27017/tododb";

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', mainRouter);
app.use('/api', apiRouter);

mongoose.connect(DB, function (err){
    if(err){
        return err;
    }else{
        console.log('successfully connected to '+DB);
    }
});

app.set('views', __dirname+'/client/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/client'));
app.listen(PORT, function(){
    console.log('server running in port '+ PORT);
});