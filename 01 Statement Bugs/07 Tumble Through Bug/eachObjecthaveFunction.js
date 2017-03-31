var prices = {};
prices.apple = function(num) {
    return 1.25 * num; };
prices.banana = function(num) {
    return 0.75 * num; };
prices.orange = function(num) {
    return 1.00 * num; };
prices.passionfruit = function(num) {
    var month = new Date().getMonth(),
        price = month < 4 && month > 10 ? 10 : 20;
    return price * num;
};
prices.pear = function(num) {
    return 0.50 * num; };
console.log(prices["passionfruit"](2));