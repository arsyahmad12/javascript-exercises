fibonacciNumbers = [1, 1]

const fibonacci = function(num) {
    for (let i = 2; i < 100000; i++) {
        fibonacciNumbers[i] = fibonacciNumbers[i-1] + fibonacciNumbers[i-2]
    }
    if (num < 1) return "OOPS"
    return fibonacciNumbers[num-1]
};

// Do not edit below this line
module.exports = fibonacci;
