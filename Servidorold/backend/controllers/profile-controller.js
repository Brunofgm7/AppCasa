// Database connection
var db = require('../routes/conn');

// READ
module.exports.profileInfo = function(req, res, next) {
    // email
    var email = req.params;
    console.log("Email to be consulted", email);
    // Database query to select item to edit
    db.query('SELECT * FROM user WHERE email = ?', email.email, function (error, results, fields) {
        if(error) {
            console.log("There are some error with query");
        }
        else {
            res.json(
                results
            );
        }
    });
}