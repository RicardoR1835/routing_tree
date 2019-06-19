var mongoose = require('mongoose');
require('../models/models.js');


module.exports={
    index: function(req, res){
        res.render('index');
    },
}