/*Interacts with the database in MongoDB, signifying what
  data manipulation operations to do.*/

var fitbitSpecific = require('mongoose').model('fitbitSpecific');

exports.test = function(req, res, next) {	
	fitbitSpecific.find({}, 'Date Steps', function (err, fitbitSpecifics) {
    if (err) {
			return next(err);
		}
		else {
			res.json(fitbitSpecifics);
		}
  }).sort({Date: 1});
};