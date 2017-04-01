var store = function() {
    "use strict"
    var price = 1.25,
        getPrice = function(num) {
            return num * price;
        };

    return { getPrice: getPrice };
}();

 (function() {
    "use strict"
    var numberOfItems = 4;

    console.log(store.getPrice(numberOfItems));
    /* code */
}());
