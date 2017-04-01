# Expression and Operator Bugs - Crude Computation Bug

#### Math Libraries

Big - [https://github.com/MikeMcl/big.js](https://github.com/MikeMcl/big.js)
BigNumber - [https://github.com/MikeMcl/bignumber.js](https://github.com/MikeMcl/bignumber.js)

// Native floating point type

console.log(0.3 - 0.1); // 0.19999999999999998

// BigNumber type

console.log(Big(0.3).minus(0.1).toString()); // "0.2"