'use strict';

module.exports = function(app) {
	var guests = require('../controllers/guests.server.controller');
	var guestsPolicy = require('../policies/guests.server.policy');

	// Guests Routes
	app.route('/api/guests').all()
		.get(guests.list).all(guestsPolicy.isAllowed)
		.post(guests.create);

	app.route('/api/guests/:guestId').all(guestsPolicy.isAllowed)
		.get(guests.read)
		.put(guests.update)
		.delete(guests.delete);

	// Finish by binding the Guest middleware
	app.param('guestId', guests.guestByID);
};