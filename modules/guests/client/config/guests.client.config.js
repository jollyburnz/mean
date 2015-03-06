'use strict';

// Configuring the Guests module
angular.module('guests').run(['Menus',
	function(Menus) {
		// Add the Guests dropdown item
		Menus.addMenuItem('topbar', {
			title: 'Guests',
			state: 'guests',
			type: 'dropdown'
		});

		// Add the dropdown list item
		Menus.addSubMenuItem('topbar', 'guests', {
			title: 'List Guests',
			state: 'guests.list'
		});

		// Add the dropdown create item
		Menus.addSubMenuItem('topbar', 'guests', {
			title: 'Create Guest',
			state: 'guests.create'
		});
	}
]);