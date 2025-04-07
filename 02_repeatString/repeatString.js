const repeatString = function (string, count) {
  if (count < 0) return "ERROR";
  let repeat = "";
  for (let i = 0; i < count; i++) {
    repeat += string;
  }
  return repeat;
};

// Do not edit below this line
module.exports = repeatString;
