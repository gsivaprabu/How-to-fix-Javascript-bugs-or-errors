# Statement Bugs - Parsing Parenthesis Bug

```javasript

// JavaScript can't parse this correctly…
function () {
/* code */
}();


// A simple wrapper fixes the problem
( function () {
/* code */
}() );


// Technically you can prepend a unary operator
!function () {
/* code */
}();

```