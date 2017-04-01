# Statement Bugs - Fickle Figure Bug

### Internet Explorer 7
```javascript
var opts = { minDate: -20, showWeek: true, }; // Error
var numbers = [ 1, 2, 3, ]; // Error
```
### Internet Explorer 8
```javascript
var opts = { minDate: -20, showWeek: true, }; // Works
var numbers = [ 1, 2, 3, ]; // length 4
```
### Internet Explorer 9
```javascript
var opts = { minDate: -20, showWeek: true, }; // Works
var numbers = [ 1, 2, 3, ]; // length 3
```