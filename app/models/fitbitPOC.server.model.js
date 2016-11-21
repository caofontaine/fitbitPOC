/*Defines schema for the data being created or called for/from the database.*/

var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var fitbit0916 = mongoose.Schema({
  Date: String,
  CaloriesBurned: Number,
  NumSteps: Number,
  Distance: Number,
  Floors: Number,
  MinutesSedentary: Number,
  MinutesLightlyActive: Number,
  MinutesFairlyActive: Number,
  MinutesVeryActive: Number,
  ActivityCalories: Number
},
{collection: 'fitbit0916'});

var fitbitSpecific = mongoose.Schema({
  Date: String,
  NumSteps: Number
},
{collection: 'fitbit0916'});

mongoose.model('fitbit0916', fitbit0916); //Register model name with schema.
mongoose.model('fitbitSpecific', fitbitSpecific);