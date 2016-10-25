/*Defines schema for the data being created or called for/from the database.*/

var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var fitbitPOC = mongoose.Schema({
	Date: String,
	CaloriesBurned: String,
	Steps: Number,
	Distance: Number,
	Floors: Number,
	MinutesSedentary: Number,
	MinutesLightlyActive: Number,
	MinutesFairlyActive: Number,
	MinutesVeryActive: Number,
	ActivityCalories: Number
},
{collection: 'fitbit0916'});

mongoose.model('fitbitPOC', fitbitPOC);