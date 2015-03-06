'use strict';

describe('Guests E2E Tests:', function() {
	describe('Test Guests page', function() {
		it('Should not include new Guests', function() {
			browser.get('http://localhost:3000/#!/guests');
			expect(element.all(by.repeater('guest in guests')).count()).toEqual(0);
		});
	});
});
