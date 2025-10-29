const { camelCase } = require("case-anything");

const convertToCelsius = function(fahr) {
  fahr -= 32;
  fahr *= 5 / 9;
  fahr = Math.round(fahr * 10) / 10;
  return fahr;
};

const convertToFahrenheit = function(cels) {
  cels *= 9 / 5;
  cels += 32;
  cels = Math.round(cels * 10) / 10;
  return cels;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
