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

## Copyright and license

    The MIT License (MIT)

    Copyright (c) 2014 Pyie Zone

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

