'use strict';

/* jasmine specs for directives go here */

describe('Directive:fuzz-email', function() {
  beforeEach(module('fuzzyEmail-ng'));
  var element;
  var $scope;

  beforeEach(inject(function ($rootScope,$compile){
     $scope = $rootScope;
     element = angular.element('<fuzz-email fclass="myclass" maxlength="100" required></fuzz-email>');

     $compile(element)($scope);
     $scope.$digest();


  }));

    it('should have div and input', function() {
        var my_div = element.find('div');
        var my_input = element.find('input');

        expect(my_div.length).toBe(1);
        expect(my_input.length).toBe(1);

        //expect(element.hasClass("ng-invalid")).toBe(true);

    });
    it('should suggest correct email domain', function(){

        var my_input = element.find('input');
        //set typo in gmail domain name
        my_input.val('test@gamil.com');
        my_input.trigger("change");
        var suggested = element.find('a');
        expect(suggested.text()).toBe('test@gmail.com');

    });

});
