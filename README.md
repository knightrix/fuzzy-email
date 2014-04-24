fuzzy-email
===========

Angular Directive for checking input email domain names correctness

Dependency
---------

- [AngularJS 1.2+](https://github.com/angular/angular.js)
- [FuzzySet] (http://glench.github.io/fuzzyset.js/)

## Quick Start

+ Include required libraries:

>
``` html
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js"></script>
<script src="js/vendor/fuzzyset.js"></script>
<script src="js/fuzzyEmail-ng.js"></script>
```

+ Inject the `fuzzyEmail-ng` module into your app:

>
``` javascript
angular.module('yourApp', ['fuzzyEmail-ng']);
```

+ Use the directive

>
``` html
<form>
    <fuzz-email fclass="myclass" maxlength="100" emails="['gmail','yahoo','aol','hotmail','msn']" required></fuzz-email>
</form>
```

