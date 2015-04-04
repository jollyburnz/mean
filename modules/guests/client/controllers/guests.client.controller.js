'use strict';

// Guests controller
angular.module('guests').controller('GuestsController', ['$scope', '$rootScope', '$stateParams', '$location', '$modal', 'Authentication', 'Guests',
	function($scope, $rootScope, $stateParams, $location, $modal, Authentication, Guests ) {
		$scope.authentication = Authentication;

		// var request = new XMLHttpRequest();
		// var params = 'token=sjxNDqpgy38zmd8b2017dhcSgxNPW74G';
		// request.open('POST', 'https://conartistcollective.com/api/users/all', true);
		// request.onreadystatechange = function() {
		// 	if (request.readyState==4) {
		// 		var json = request.response;
		// 		var obj = JSON.parse(json);
		// 		$scope.asdf = obj.data;
		// 		console.log(obj, obj.data, $scope);
		// 		window.asdf = $scope.asdf;
		// 		//console.log($scope.asdf, 'response');
		// 		$scope.$apply();

		// 	}
		// };
		// request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		// request.setRequestHeader("Content-length", params.length);
		// request.setRequestHeader("Connection", "close");
		// request.send(params);


		var mock_data = [
			{"id":21,"first_name":"Sameer","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":22,"first_name":"Sameer1","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":23,"first_name":"Sameer2","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":24,"first_name":"Sameer3","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":25,"first_name":"Sameer4","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":26,"first_name":"Sameer5","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":27,"first_name":"Sameer6","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":28,"first_name":"Sameer7","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":29,"first_name":"Sameer8","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":30,"first_name":"Sameer9","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":31,"first_name":"Sameer10","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":32,"first_name":"Sameer11","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":33,"first_name":"Sameer12","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":34,"first_name":"Sameer13","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":35,"first_name":"Sameer14","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":36,"first_name":"Sameer15","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":37,"first_name":"Sameer16","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"},
			{"id":38,"first_name":"Sameer17","last_name":"Kanda","email":"sameer.kanda@gmail.com","username":"techdoc","artist_name":"techdoc","avatar":"/api/images/f7lLeisMGo2wU9zxEdh9ub3s0cwUoqN1?size=thumbnail"}
		];

		$scope.asdf = mock_data;

		// Create new Guest
		$scope.create = function() {
			// Create new Guest object
			var guest = new Guests ({
				name: this.name
			});

			// Redirect after save
			guest.$save(function(response) {
				console.log(response, 'asdfasdf');
				$location.path('guests/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Guest
		$scope.remove = function( guest ) {
			if ( guest ) { guest.$remove();

				for (var i in $scope.guests ) {
					if ($scope.guests [i] === guest ) {
						$scope.guests.splice(i, 1);
					}
				}
			} else {
				$scope.guest.$remove(function() {
					$location.path('guests');
				});
			}
		};

		// Update existing Guest
		$scope.update = function() {
			var guest = $scope.guest ;

			guest.$update(function() {
				$location.path('guests/' + guest._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Guests
		$scope.find = function() {
			$scope.guests = Guests.query();
		};

		// Find existing Guest
		$scope.findOne = function() {
			$scope.guest = Guests.get({ 
				guestId: $stateParams.guestId
			});
		};

		var modalPromise = $modal({
	    title: 'asdf',
	    animation: 'am-fade-and-scale',
	    html: true,
	    persist: false,
	    template: 'test.html',
	    modalClass: 'modal-class',
	    placement: 'center',
	    container: 'body',
	    scope: $scope,
	    show: false
	  });

	  modalPromise.hide();

		$scope.test = function(user){
			console.log('test', user, user.id);

			Guests.query(function(guests) {
        console.log(guests, 'guests');
        $scope.guests = guests;
      });

			$scope.current_user = user;
			modalPromise.$promise.then(modalPromise.show);


		};

		$scope.woah = [];

		$rootScope.rad = {
			test: ''
		}

		$scope.checkIn = function(guest){
			//console.log('click', this, this.rad, this.$parent.current_user.id);
			//console.log(this, this.$parent, this.$parent.current_user.id);
			console.log($rootScope, this, 'rootscope');
			var guest = this.rad;
			//$scope.rad = this.rad;
			// $rootScope.rad.test = this.rad;

			var newGuest = new Guests ({
				name: $rootScope.rad.test.name,
				email: $rootScope.rad.test.email,
				member: this.$parent.current_user.id
			});

			newGuest.$save(function(response, t) {
				$rootScope.rad.test = {};
				//modalPromise.hide();
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
				alert(errorResponse.data.message);
			});

			// newGuest.$save(function(response, t) {
			// 	console.log(response, t, 'adfd');
			// 	// Clear form fields
			// 	//this.rad = '';
			// 	console.log($scope.rad, modalPromise, 'this_rad');
			// 	$rootScope.rad.test = {};
			// 	modalPromise.hide();
			// }, function(errorResponse) {
			// 	$scope.error = errorResponse.data.message;
			// });

		};
	}
]);