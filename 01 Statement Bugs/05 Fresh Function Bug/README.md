# Statement Bugs - Fresh Function Bug

- Filter and Map mthod not supported in older browsers

	- IE8 Throws an Error (Doesnot support ECMASCRIPT-5)
  - ECMAScript 5 array methods in Chrome, Firefox, Safari, Opera, IE9+
		(map, reduce, reduceRight, filter, forEach, every, some, indexOf, lastIndexOf)

#### Polyfill
 - es5-shim - https://github.com/kriskowal/es5-shim/

#### Shim
 - Underscore.js - http://underscorejs.org/
 - Lo-Dash - http://lodash.com/

#### Polyfill
	Polyfill this functionality. A polyfill is a library that simulates a native API, such as the ES5 array methods