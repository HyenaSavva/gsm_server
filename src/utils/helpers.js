const arrayFromLength = (number) =>
  Array.from(new Array(number).keys()).map((k) => k + 1);

module.exports = { arrayFromLength };
