const convertToCelsius = function (fahrenheitValue) {
  const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
  return Number(celsiusValue.toPrecision(3));
};

const convertToFahrenheit = function (celsiusValue) {
  const fahrenheitValue = celsiusValue * (9 / 5) + 32;
  return Number(fahrenheitValue.toPrecision(4));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
