'use strict';

/* jasmine specs for controllers go here */

describe('PhoneCat controllers', function() {
    describe('PhoneListCtrl', function() {
        beforeEach(module('phonecatApp'));

        it('should create "phone" model with 3 phone', inject(function($controller) {
            var scope = {},
                ctrl = $controller('PhoneListCtrl', {$scope:scope});
            expect(scope.phones.length).toBe(3);
        }));
    });
});
