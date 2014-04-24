/**
 * Dependency: http://glench.github.io/fuzzyset.js/
 * Version: 0.0.1a
 * Usage: <fuzz-email class="myclass" maxlength="100" emails="['gmail','yahoo','aol','hotmail','msn']" required></fuzz-email>
 */

var myModule = angular.module('fuzzyEmail-ng', []);

myModule.directive('fuzzEmail', function(){

        return {
               restrict: 'E',
               replace: true,
               link: function(scope,element,attrs){
                   var good_emails = [
                       "gmail",
                       "yahoo",
                       "aol",
                       "hotmail"
                   ]; //good_emails
                   if (attrs.hasOwnProperty('emails')){
                       good_emails = eval(attrs.emails);
                   }

                   var fuzzyEmails = FuzzySet(good_emails);

                   scope.fuzzMe = function(){
                       var email = scope.email;
                       if (typeof email == 'undefined' || email == ''){
                              scope.alt_email = false;
                              return false;
                       }

                       var atpos = email.indexOf('@');
                       var afterat = email.substring(atpos+1);

                       var dotpos = afterat.indexOf('.');
                       var email_first = email.substring(0,atpos+1);
                       var email_domain = afterat.substring(0,dotpos);
                       var email_last = afterat.substring(dotpos);
                       //console.log('first:'+ email_first + ' domain:' + email_domain + ' last:' + email_last);

                       var fuzzy = fuzzyEmails.get(email_domain);

                       if ( typeof fuzzy == 'undefined' || fuzzy == null ||  fuzzy == ''){
                           return false;
                       }

                       if (fuzzy.length && fuzzy[0][0] > 0.5 && fuzzy[0][0] < 1){
                               scope.alt_email = email_first + fuzzy[0][1] + email_last;

                       }else{
                                scope.alt_email = false;
                       }
                       return false;
                   };

               },
               template: function(element,attrs){
                             var myclass = attrs.fclass || '';
                             var maxlen  = attrs.maxlength || '100';
                             var required = attrs.hasOwnProperty('required') ? "required='required'" : "";
                             var htmlText =     '<div>' +
                                                    '<input class="' + myclass + '" id="email" type="email" name="email" maxlength="' + maxlen + '" placeholder="Email" ' +   required + ' ng-model="email" ng-change="fuzzMe()">' +
                                                    '<div class="alert alert-warning" ng-show="alt_email">' +
                                                        'Did you mean <a class="b link" ng-click="email = alt_email;alt_email = false;">{{alt_email}}</a>' +
                                                    '</div>' +
                                                '</div>';
                             return htmlText;
                   }


        };
});
