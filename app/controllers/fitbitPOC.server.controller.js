/*Interacts with the database in MongoDB, signifying what
  data manipulation operations to do.*/

var fitbitPOC = require('mongoose').model('fitbitPOC');

exports.list = function(req, res, next) {	
	fitbitPOC.find({}, function (err, fitbitPOCs) {
    if (err) {
			return next(err);
		}
		else {
			res.json(fitbitPOCs);
		}
  });
};