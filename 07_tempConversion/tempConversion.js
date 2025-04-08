const convertToCelsius = function (fahrenheitValue) {
  const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
  return Number(celsiusValue.toPrecision(3));
};

const convertToFahrenheit = function () {};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
