const add = function(addend1, addend2) {
	return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(numbers) {
  let sum = 0;
	for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
};

const multiply = function(numbers) {
  if (numbers.length == 0) return 0;
  product = 1;
  for (let i=0; i<numbers.length; i++){
    product *= numbers[i];
  }
  return product;
};

const power = function(base, exponent) {
  if (exponent === 0) return 1
  result = base
	for (let i=1; i<exponent; i++){
    result *= base;
  }
  return result;
};

const factorial = function(factor) {
	let product = 1;
  for (let i = factor; i > 0; i--) {
    product *= i;
  }
  return product;
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
