const convertToCelsius = function(fahrenheit) {
  //Formula to convert f to c is ((f-32)*5)/9
  return parseFloat((((fahrenheit-32)*5)/9).toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  //Formula to convert c to f is (c * 9/5)+32
  return parseFloat(((celsius * 9/5)+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
