/*Interacts with the database in MongoDB, signifying what
  data manipulation operations to do.*/

var fitbit0916 = require('mongoose').model('fitbit0916');
var fitbitSpecific = require('mongoose').model('fitbitSpecific');

exports.list = function(req, res, next) {	
	fitbit0916.find({}, function (err, fitbit0916s) {
    if (err) {
			return next(err);
		}
		else {
			res.json(fitbit0916s);
		}
  }).sort({Date: 1});
};

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