/*Database manipulations are performed based on where the page is directed to.
  Serves as a backend manipulation - creating, deleting, or listing data.*/

var fitbitPOC = require('../../app/controllers/fitbitPOC.server.controller')

module.exports = function(app) {
	app.route('/api/fitbitPOC/fitbit0916')
		.get(fitbitPOC.list);
};