const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	newArr = arr.reduce((total, num) => {
    return total + num
  }, 0)

  return newArr
};

const multiply = function(arr) {
  newArr = arr.reduce((total, num) =>{
    return total * num
  }, 1)

  return newArr
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(n) {
	if (n === 0) return 1;
  else if (n > 0) {
    return n * factorial(n - 1)
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
