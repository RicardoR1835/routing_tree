var meh = require('../controllers/controllers');

module.exports = function(app){
    app.get('/', function (req, res) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        meh.index(req, res) ;
    })

    // Below is example of post method
    app.post('/btquote', function (req, res) {
        meh.btquote(req, res);
    })
}