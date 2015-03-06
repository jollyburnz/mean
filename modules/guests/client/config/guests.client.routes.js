'use strict';

//Setting up route
angular.module('guests').config(['$stateProvider',
	function($stateProvider) {
		// Guests state routing
		$stateProvider.
		state('guests', {
			abstract: true,
			url: '/guests',
			template: '<ui-view/>'
		}).
		state('guests.list', {
			url: '',
			templateUrl: 'modules/guests/views/list-guests.client.view.html'
		}).
		state('guests.create', {
			url: '/create',
			templateUrl: 'modules/guests/views/create-guest.client.view.html'
		}).
		state('guests.view', {
			url: '/:guestId',
			templateUrl: 'modules/guests/views/view-guest.client.view.html'
		}).
		state('guests.edit', {
			url: '/:guestId/edit',
			templateUrl: 'modules/guests/views/edit-guest.client.view.html'
		});
	}
]);